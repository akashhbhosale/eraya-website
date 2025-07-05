"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const AdhesionTesting = dynamic(
  () => import("@/components/ServicesComponents/AdhesionTesting"),
  {
    ssr: false,
  }
);

export default function AdhesionTestingPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <AdhesionTesting />
      </main>
      <Footer />
    </div>
  );
}
