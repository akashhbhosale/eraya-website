"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const CustomManufacturing = dynamic(
  () => import("@/components/ServicesComponents/CustomManufacturing"),
  {
    ssr: false,
  }
);

export default function CustomManufacturingPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <CustomManufacturing />
      </main>
      <Footer />
    </div>
  );
}
