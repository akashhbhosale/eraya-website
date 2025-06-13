"use client";

import { Navigation } from "@/components/navigation";
import { Team } from "@/components/team"; // Reusing same component
import { Footer } from "@/components/footer";

export default function TeamPage() {
  return (
    <div className="bg-black text-white min-h-screen w-full overflow-hidden">
      <Navigation />

      <main className="pt-16">
        <Team />
      </main>

      <Footer />
    </div>
  );
}
