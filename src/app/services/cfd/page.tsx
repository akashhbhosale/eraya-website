"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const CFD = dynamic(() => import("@/components/ServicesComponents/cfd"), {
  ssr: false,
});

export default function CfdPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <CFD />
      </main>
      <Footer />
    </div>
  );
}
