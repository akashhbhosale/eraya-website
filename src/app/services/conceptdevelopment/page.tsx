"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const ConceptDevelopment = dynamic(
  () => import("@/components/ServicesComponents/conceptdevelopment"),
  { ssr: false }
);

export default function ConceptDevelopmentPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <ConceptDevelopment />
      </main>
      <Footer />
    </div>
  );
}
