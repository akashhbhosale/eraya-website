"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const DisruptiveInnovation = dynamic(
  () => import("@/components/ServicesComponents/disruptiveinnovation"),
  {
    ssr: false,
  }
);

export default function DisruptiveInnovationPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <DisruptiveInnovation />
      </main>
      <Footer />
    </div>
  );
}
