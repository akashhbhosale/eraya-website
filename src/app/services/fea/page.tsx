"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const FEA = dynamic(() => import("@/components/ServicesComponents/fea"), {
  ssr: false,
});

export default function FeaPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <FEA />
      </main>
      <Footer />
    </div>
  );
}
