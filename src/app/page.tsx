"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Team } from "@/components/team";
import { Clients } from "@/components/clients";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import About from "@/components/about";

// ✅ Dynamically import Services with SSR disabled
const Services = dynamic(() => import("@/components/services"), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      {/* <section id="team">
        <Team />
      </section> */}

      {/* <section id="clients">
        <Clients />
      </section> */}

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
