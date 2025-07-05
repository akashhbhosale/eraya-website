"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const StaticLoadTesting = dynamic(
  () => import("@/components/ServicesComponents/StaticLoadTesting"),
  {
    ssr: false,
  }
);

export default function StaticLoadTestingPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <StaticLoadTesting />
      </main>
      <Footer />
    </div>
  );
}
