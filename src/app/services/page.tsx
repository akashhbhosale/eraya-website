"use client";

import Services from "@/components/services";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <Navigation />
      <main className="pt-24 px-4">
        <Services />
      </main>
      <Footer />
    </div>
  );
}
