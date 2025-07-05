"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const CrashTesting = dynamic(
  () => import("@/components/ServicesComponents/CrashTesting"),
  {
    ssr: false,
  }
);

export default function CrashTestingPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <CrashTesting />
      </main>
      <Footer />
    </div>
  );
}
