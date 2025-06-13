"use client";

import { Navigation } from "@/components/navigation";
import { Clients } from "@/components/clients";
import { Footer } from "@/components/footer";

export default function ClientsPage() {
  return (
    <div className="bg-black text-white min-h-screen w-full overflow-hidden">
      <Navigation />

      <main className="pt-16">
        <Clients />
      </main>

      <Footer />
    </div>
  );
}
