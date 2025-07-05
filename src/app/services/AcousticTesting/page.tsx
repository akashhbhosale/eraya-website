"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const AcousticTesting = dynamic(
  () => import("@/components/ServicesComponents/AcousticTesting"),
  {
    ssr: false,
  }
);

export default function AcousticTestingPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <AcousticTesting />
      </main>
      <Footer />
    </div>
  );
}
