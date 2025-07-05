"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const CastedProducts = dynamic(
  () => import("@/components/ServicesComponents/CastedProducts"),
  {
    ssr: false,
  }
);

export default function CastedProductsPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <CastedProducts />
      </main>
      <Footer />
    </div>
  );
}
