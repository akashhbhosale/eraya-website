"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const Manufacturing = dynamic(
  () => import("@/components/ServicesComponents/manufacturing"),
  {
    ssr: false,
  }
);

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <Manufacturing />
      </main>
      <Footer />
    </div>
  );
}
