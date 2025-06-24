"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import CAD from "@/components/ServicesComponents/cad";

const Cam = dynamic(() => import("@/components/ServicesComponents/cam"), {
  ssr: false,
});

export default function CamPage() {
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
