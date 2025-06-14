"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

// ⛑ Dynamically load the Services component with SSR disabled
const Services = dynamic(() => import("@/components/services"), {
  ssr: false,
});

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full text-white bg-black">
      <Navigation />
      <main className="pt-24 px-4">
        <Services />
      </main>
      <Footer />
    </div>
  );
}
