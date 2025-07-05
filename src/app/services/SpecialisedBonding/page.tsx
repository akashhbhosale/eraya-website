"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const SpecialisedBonding = dynamic(
  () => import("@/components/ServicesComponents/SpecialisedBonding"),
  {
    ssr: false,
  }
);

export default function SpecialisedBondingPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <SpecialisedBonding />
      </main>
      <Footer />
    </div>
  );
}
