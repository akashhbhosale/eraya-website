"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const LifeCycleTesting = dynamic(
  () => import("@/components/ServicesComponents/LifeCycleTesting"),
  {
    ssr: false,
  }
);

export default function LifeCycleTestingPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <LifeCycleTesting />
      </main>
      <Footer />
    </div>
  );
}
