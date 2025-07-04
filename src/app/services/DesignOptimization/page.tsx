"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const DesignOptimization = dynamic(
  () => import("@/components/ServicesComponents/DesignOptimization"),
  {
    ssr: false,
  }
);

export default function DesignOptimizationPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <DesignOptimization />
      </main>
      <Footer />
    </div>
  );
}
