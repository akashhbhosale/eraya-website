"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FallingStarsBackground1 from "@/components/ui/falling-stars-background-1";

const CAD = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white bg-black py-16 px-6">
      {/* 🔵 Animated Background */}
      <FallingStarsBackground1 />

      {/* 🟢 Glass Card with Background Image */}
      <div className="relative z-10 max-w-[90rem] w-full mx-auto bg-[url('/assets/cad-bg.png')] bg-cover bg-center bg-no-repeat backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl space-y-12">
        {/* Optional dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/60 rounded-3xl z-0" />

        {/* 🟢 Content Section */}
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center space-y-3" data-aos="fade-up">
            <h1 className="text-4xl font-bold text-blue-500">
              Computer Aided Design (CAD)
            </h1>
            <p className="text-lg italic text-gray-100">
              "Precision in design is the foundation of innovation and we build
              it right from the blueprint."
            </p>
          </div>

          {/* About */}
          <div
            className="text-lg text-gray-200 leading-relaxed mt-6"
            data-aos="fade-up"
          >
            At <span className="font-semibold text-white">ERAYA</span>, our
            Computer-Aided Design (CAD) Division is at the forefront of{" "}
            <span className="text-blue-500">precision engineering</span> and{" "}
            <span className="text-blue-500">digital design</span>. We specialize
            in delivering <span className="text-blue-500">detailed</span>,{" "}
            <span className="text-blue-500">accurate</span>, and{" "}
            <span className="text-blue-500">efficient CAD solutions</span> that
            transform ideas into tangible results—serving industries like
            architecture, manufacturing, engineering, rail, aerospace,
            automobile, construction, and product design.
          </div>

          {/* Grid Sections */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10"
            data-aos="fade-up"
          >
            <Section
              title="🧪 Product Design & Prototyping"
              data={[
                "Concept-to-CAD modeling",
                "Reverse engineering",
                "FEA & simulation",
                "SolidWorks & Fusion 360",
                "STL files for 3D printing",
              ]}
            />
            <Section
              title="⚡ Electrical & MEP Drafting"
              data={[
                "Schematics & wiring diagrams",
                "MEP coordination",
                "Panel layouts & circuit planning",
              ]}
            />
            <Section
              title="💻 Software Proficiency"
              data={[
                "AutoCAD / AutoCAD MEP",
                "SolidWorks",
                "Autodesk Revit",
                "CATIA / NX",
              ]}
            />
          </div>

          {/* 🔵 Deliverables */}
          <div
            className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-16"
            data-aos="fade-up"
          >
            {/* Text */}
            <div className="w-full md:w-1/2 self-center">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                📦 Deliverables
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg">
                <li>DWG, DXF, STL, STEP, and PDF file formats</li>
                <li>3D models, exploded views, and assembly instructions</li>
                <li>Complete technical drawings with GD&T</li>
                <li>Cloud-based file sharing & collaboration</li>
              </ul>
            </div>

            {/* Images */}
            <div className="w-full md:w-1/4 transition-transform duration-300 hover:scale-105">
              <img
                src="/assets/cad-8.png"
                alt="Deliverable 1"
                className="rounded-2xl shadow-xl object-cover w-full h-48 md:h-56"
              />
            </div>
            <div className="w-full md:w-1/4 transition-transform duration-300 hover:scale-105">
              <img
                src="/assets/cad-6.png"
                alt="Deliverable 2"
                className="rounded-2xl shadow-xl object-cover w-full h-48 md:h-56"
              />
            </div>
          </div>

          {/* 🟡 Why Choose Us */}
          <div
            className="flex flex-col md:flex-row items-start gap-6 mt-16"
            data-aos="fade-up"
          >
            {/* Images */}
            <div className="w-full md:w-1/4 transition-transform duration-300 hover:scale-105">
              <img
                src="/assets/cad-5.png"
                alt="Why Choose Us 1"
                className="rounded-2xl shadow-xl object-cover w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/4 transition-transform duration-300 hover:scale-105">
              <img
                src="/assets/cad-7.png"
                alt="Why Choose Us 2"
                className="rounded-2xl shadow-xl object-cover w-full h-auto"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                🌟 Why Choose Us?
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg">
                <li>High Accuracy & Industry Standards</li>
                <li>Fast Turnaround Times</li>
                <li>Experienced CAD Designers & Engineers</li>
                <li>Scalable for Projects of All Sizes</li>
                <li>Integration with Manufacturing & Construction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🔧 Reusable Section Component
interface SectionProps {
  title: string;
  data: string[];
}

const Section: React.FC<SectionProps> = ({ title, data }) => {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-blue-500">{title}</h3>
      <ul className="list-disc list-inside pl-2 text-gray-300 space-y-1">
        {data.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CAD;
