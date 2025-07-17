"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const [isCanvasReady, setIsCanvasReady] = useState(false);

  const particleCount = props.particleCount || 700;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY || 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const baseHue = props.baseHue || 220;
  const rangeHue = 100;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = props.backgroundColor || "#000000";

  const noise3D = createNoise3D();
  const particlePropsRef = useRef(new Float32Array(particlePropsLength));
  const centerRef = useRef<[number, number]>([0, 0]);
  const tickRef = useRef(0);

  const rand = (n: number) => n * Math.random();
  const randRange = (n: number) => n - rand(2 * n);
  const fadeInOut = (t: number, m: number) =>
    Math.abs(((t + 0.5 * m) % m) - 0.5 * m) / (0.5 * m);
  const lerp = (n1: number, n2: number, speed: number) =>
    (1 - speed) * n1 + speed * n2;

  const initParticles = () => {
    tickRef.current = 0;
    particlePropsRef.current = new Float32Array(particlePropsLength);
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const x = rand(canvas.width);
    const y = centerRef.current[1] + randRange(rangeY);
    const life = 0;
    const ttl = baseTTL + rand(rangeTTL);
    const speed = baseSpeed + rand(rangeSpeed);
    const radius = baseRadius + rand(rangeRadius);
    const hue = baseHue + rand(rangeHue);

    particlePropsRef.current.set(
      [x, y, 0, 0, life, ttl, speed, radius, hue],
      i
    );
  };

  const checkBounds = (x: number, y: number, canvas: HTMLCanvasElement) =>
    x > canvas.width || x < 0 || y > canvas.height || y < 0;

  const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const [x, y, vx0, vy0, life, ttl, speed, radius, hue] = Array.from(
      particlePropsRef.current.subarray(i, i + 9)
    );

    const n =
      noise3D(x * xOff, y * yOff, tickRef.current * zOff) *
      noiseSteps *
      Math.PI *
      2;
    const vx = lerp(vx0, Math.cos(n), 0.5);
    const vy = lerp(vy0, Math.sin(n), 0.5);
    const x2 = x + vx * speed;
    const y2 = y + vy * speed;

    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

    particlePropsRef.current.set(
      [x2, y2, vx, vy, life + 1, ttl, speed, radius, hue],
      i
    );
    (checkBounds(x, y, canvas) || life > ttl) && initParticle(i);
  };

  const drawParticle = (
    x: number,
    y: number,
    x2: number,
    y2: number,
    life: number,
    ttl: number,
    radius: number,
    hue: number,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  };

  const resize = () => {
    if (typeof window === "undefined") return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    centerRef.current = [0.5 * canvas.width, 0.5 * canvas.height];
    initParticles();
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    tickRef.current++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }

    ctx.save();
    ctx.filter = "blur(8px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.filter = "blur(4px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();

    animationRef.current = requestAnimationFrame(draw);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const timeout = setTimeout(() => {
      resize();
      setIsCanvasReady(true);
    }, 100);

    window.addEventListener("resize", resize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isCanvasReady) draw();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isCanvasReady]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full", props.containerClassName)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 z-0 bg-transparent"
      >
        <canvas ref={canvasRef} className="w-full h-full" />
      </motion.div>
      <div className={cn("relative z-10 w-full h-full", props.className)}>
        {props.children}
      </div>
    </div>
  );
};
