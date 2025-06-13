"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Contact } from "@/components/contact"; // ✅ Import your Contact component

export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen w-full overflow-hidden">
      <Navigation />

      <main className="pt-16 px-4">
        <Contact /> {/* ✅ Reuse your existing component */}
      </main>

      <Footer />
    </div>
  );
}
