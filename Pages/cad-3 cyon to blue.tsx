"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CAD = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-[url('/assets/cad-bg.png')] bg-cover bg-center bg-no-repeat text-white py-16 px-6 flex justify-center">
      {/* ✅ Glass-like background wrapper */}
      <div className="max-w-5xl w-full bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl shadow-2xl space-y-10">
        {/* Title */}
        <div className="text-center space-y-3" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-blue-500">
            Computer Aided Design (CAD)
          </h1>
          <p className="text-lg italic text-gray-300">
            "Precision in design is the foundation of innovation and we build it
            right from the blueprint."
          </p>
        </div>

        {/* About */}
        <div
          className="text-lg text-gray-200 leading-relaxed"
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
          architecture, manufacturing, engineering, rail, aerospace, automobile,
          construction, and product design.
        </div>

        {/* Sections below with animations */}
        <Section
          title="🏛️ Architectural Drafting & BIM"
          data={[
            "2D and 3D floor plans",
            "BIM using Revit",
            "Site planning & elevations",
            "Construction documentation",
          ]}
        />
        <Section
          title="⚙️ Mechanical & Industrial Design"
          data={[
            "Mechanical part & assembly modeling",
            "Sheet metal design",
            "FEA & simulation",
            "Tooling, jigs, fixture design",
          ]}
        />
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

        {/* Software Proficiency */}
        <div data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-blue-500 mb-3">
            💻 Software Proficiency
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>AutoCAD / AutoCAD MEP</li>
            <li>SolidWorks</li>
            <li>Autodesk Revit</li>
            <li>CATIA / NX</li>
          </ul>
        </div>

        {/* Deliverables */}
        <div data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-blue-500 mb-3">
            📦 Deliverables
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>DWG, DXF, STL, STEP, and PDF file formats</li>
            <li>3D models, exploded views, and assembly instructions</li>
            <li>Complete technical drawings with GD&T</li>
            <li>Cloud-based file sharing & collaboration</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-blue-500 mb-3">
            🌟 Why Choose Us?
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>High Accuracy & Industry Standards</li>
            <li>Fast Turnaround Times</li>
            <li>Experienced CAD Designers & Engineers</li>
            <li>Scalable for Projects of All Sizes</li>
            <li>Integration with Manufacturing & Construction</li>
          </ul>
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
    <div data-aos="fade-up">
      <h3 className="text-xl font-semibold text-blue-500 mb-2">{title}</h3>
      <ul className="list-disc list-inside pl-5 text-gray-300 space-y-1">
        {data.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CAD;
