"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const CncMachining = dynamic(
  () => import("@/components/ServicesComponents/CncMachining"),
  {
    ssr: false,
  }
);

export default function CncMachiningPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <CncMachining />
      </main>
      <Footer />
    </div>
  );
}
