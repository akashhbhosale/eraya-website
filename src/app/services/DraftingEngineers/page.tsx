"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const DraftingEngineers = dynamic(
  () => import("@/components/ServicesComponents/DraftingEngineers"),
  {
    ssr: false,
  }
);

export default function DraftingEngineersPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <DraftingEngineers />
      </main>
      <Footer />
    </div>
  );
}
