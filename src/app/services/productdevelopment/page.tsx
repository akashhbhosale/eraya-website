"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

// Lazy-load the ProductDevelopment component
const ProductDevelopment = dynamic(
  () => import("@/components/ServicesComponents/ProductDevelopment"),
  { ssr: false }
);

export default function ProductDevelopmentPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <ProductDevelopment />
      </main>
      <Footer />
    </div>
  );
}
