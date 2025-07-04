"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const NPD = dynamic(
  () => import("@/components/ServicesComponents/NewProductDevelopment"),
  {
    ssr: false,
  }
);

export default function NpdPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <NPD />
      </main>
      <Footer />
    </div>
  );
}
