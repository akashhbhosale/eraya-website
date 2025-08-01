"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const CAD = dynamic(() => import("@/components/ServicesComponents/cad"), {
  ssr: false,
});

export default function CadPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <CAD />
      </main>
      <Footer />
    </div>
  );
}
