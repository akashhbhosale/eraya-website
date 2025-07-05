"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const SpecialisedWelding = dynamic(
  () => import("@/components/ServicesComponents/SpecialisedWelding"),
  {
    ssr: false,
  }
);

export default function SpecialisedWeldingPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <SpecialisedWelding />
      </main>
      <Footer />
    </div>
  );
}
