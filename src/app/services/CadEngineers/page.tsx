"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const CadEngineers = dynamic(
  () => import("@/components/ServicesComponents/CadEngineers"),
  {
    ssr: false,
  }
);

export default function CadEngineersPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <CadEngineers />
      </main>
      <Footer />
    </div>
  );
}
