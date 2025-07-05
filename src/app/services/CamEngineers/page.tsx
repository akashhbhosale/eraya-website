"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const CamEngineers = dynamic(
  () => import("@/components/ServicesComponents/CamEngineers"),
  {
    ssr: false,
  }
);

export default function CamEngineersPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <CamEngineers />
      </main>
      <Footer />
    </div>
  );
}
