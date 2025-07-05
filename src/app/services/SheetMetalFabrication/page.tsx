"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const SheetMetalFabrication = dynamic(
  () => import("@/components/ServicesComponents/SheetMetalFabrication"),
  {
    ssr: false,
  }
);

export default function SheetMetalFabricationPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <SheetMetalFabrication />
      </main>
      <Footer />
    </div>
  );
}
