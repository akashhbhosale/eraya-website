"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const FeaEngineers = dynamic(
  () => import("@/components/ServicesComponents/FeaEngineers"),
  {
    ssr: false,
  }
);

export default function FeaEngineersPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <FeaEngineers />
      </main>
      <Footer />
    </div>
  );
}
