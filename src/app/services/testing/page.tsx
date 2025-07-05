"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const Testing = dynamic(
  () => import("@/components/ServicesComponents/testing"),
  {
    ssr: false,
  }
);

export default function TestingPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <Testing />
      </main>
      <Footer />
    </div>
  );
}
