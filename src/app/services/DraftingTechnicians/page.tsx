"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const DraftingTechnicians = dynamic(
  () => import("@/components/ServicesComponents/DraftingTechnicians"),
  {
    ssr: false,
  }
);

export default function DraftingTechniciansPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <DraftingTechnicians />
      </main>
      <Footer />
    </div>
  );
}
