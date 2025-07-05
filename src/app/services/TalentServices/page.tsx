"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const TalentServices = dynamic(
  () => import("@/components/ServicesComponents/TalentServices"),
  {
    ssr: false,
  }
);

export default function TalentServicesPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <main className="pt-24 px-4">
        <Navigation />
        <TalentServices />
      </main>
      <Footer />
    </div>
  );
}
