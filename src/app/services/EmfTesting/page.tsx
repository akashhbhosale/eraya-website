"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const EmfTesting = dynamic(
  () => import("@/components/ServicesComponents/EmfTesting"),
  {
    ssr: false,
  }
);

export default function EmfTestingPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <EmfTesting />
      </main>
      <Footer />
    </div>
  );
}
