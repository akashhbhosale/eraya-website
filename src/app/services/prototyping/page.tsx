"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const Prototyping = dynamic(
  () => import("@/components/ServicesComponents/prototyping"),
  {
    ssr: false,
  }
);

export default function PrototypingPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <Prototyping />
      </main>
      <Footer />
    </div>
  );
}
