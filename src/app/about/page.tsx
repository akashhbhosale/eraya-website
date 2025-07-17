"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

// Dynamically import the About component
const About = dynamic(() => import("@/components/about"), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pt-24">
        <Navigation />
        <About />
      </main>
      <Footer />
    </div>
  );
}
