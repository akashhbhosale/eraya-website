"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FallingStarsBackground1 from "@/components/ui/falling-stars-background-1";
import { motion } from "framer-motion";

const CAD = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const quote =
    "Precision in design is the foundation of innovation and we build it right from the blueprint.";
  const words = quote.split(" ");

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white bg-black py-6 px-6 mt-0">
      <FallingStarsBackground1 />

      <div className="relative z-10 max-w-[90rem] w-full mx-auto bg-[url('/assets/cad-bg.png')] bg-cover bg-center bg-no-repeat backdrop-blur-xl border border-white/10 pt-6 pb-12 px-6 rounded-3xl shadow-2xl space-y-8 mb-20">
        <div className="absolute inset-0 bg-black/60 rounded-3xl z-0" />

        <div className="relative z-10">
          <motion.div
            className="text-center mt-2 mb-10"
            data-aos="zoom-in"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-400 to-cyan-300 animate-fade-in drop-shadow-2xl mb-10 leading-tight tracking-wide text-center">
              Computer Aided Design (CAD)
            </h1>

            <div className="overflow-visible">
              <motion.p className="text-xl md:text-2xl italic font-bold bg-gradient-to-r from-green-300 via-cyan-200 to-gray-300 bg-clip-text text-transparent flex flex-wrap justify-center gap-1 mt-6 leading-[1.5] whitespace-pre-wrap">
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="hover:underline transition duration-200 font-bold"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="text-lg font-semibold text-gray-200 leading-relaxed mt-6 text-center md:text-left"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            At <span className="font-bold text-white">ERAYA</span>, our
            Computer-Aided Design (CAD) Division is at the forefront of digital
            design. We specialize in precision engineering and delivering
            detailed, accurate, and efficient CAD solutions that transform ideas
            into tangible results—serving industries like architecture,
            manufacturing, engineering, rail, aerospace, automobile,
            construction, and product design.
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-10 mt-10 items-center justify-center text-center md:text-left"
            data-aos="fade-up"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Section
              title={
                <>
                  <span className="text-orange-300">🧪</span> Product Design &
                  Prototyping
                </>
              }
              data={[
                "Concept-to-CAD modeling",
                "Reverse engineering",
                "FEA & simulation",
                "SolidWorks & Fusion 360",
                "STL files for 3D printing",
              ]}
            />
            <Section
              title={
                <>
                  <span className="text-blue-300">⚡</span> Electrical & MEP
                  Drafting
                </>
              }
              data={[
                "Schematics & wiring diagrams",
                "MEP coordination",
                "Panel layouts & circuit planning",
              ]}
            />
            <Section
              title={
                <>
                  <span className="text-pink-300">💻</span> Software Proficiency
                </>
              }
              data={[
                "AutoCAD / AutoCAD MEP",
                "SolidWorks",
                "Autodesk Revit",
                "CATIA / NX",
              ]}
            />
          </motion.div>

          <div
            className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-6 mt-16 transition-transform duration-300 hover:scale-[1.01] hover:bg-white/5 rounded-xl p-4 w-full"
            data-aos="fade-up"
          >
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-3 transition duration-300">
                <span className="text-yellow-300 mr-2">📦</span>
                <span className="bg-gradient-to-r from-green-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                  Deliverables
                </span>
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg font-semibold">
                {[
                  "DWG, DXF, STL, STEP, and PDF file formats",
                  "3D models, exploded views, and assembly instructions",
                  "Complete technical drawings with GD&T",
                  "Cloud-based file sharing & collaboration",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-cyan-400 hover:scale-[1.02] transform origin-left transition duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {["/assets/cad-5.png", "/assets/cad-6.png"].map((src, i) => (
              <div
                key={i}
                className="w-full md:w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`Deliverable ${i + 1}`}
                  className="rounded-2xl shadow-xl object-cover w-full h-48 md:h-56"
                />
              </div>
            ))}
          </div>

          <div
            className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-6 mt-16 transition-transform duration-300 hover:scale-[1.01] hover:bg-white/5 rounded-xl p-4 w-full"
            data-aos="fade-up"
          >
            {["/assets/cad-7.png", "/assets/cad-8.png"].map((src, i) => (
              <div
                key={i}
                className="w-full md:w-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`Why Choose Us ${i + 1}`}
                  className="rounded-2xl shadow-xl object-cover w-full h-auto"
                />
              </div>
            ))}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-3 transition duration-300">
                <span className="text-purple-300 mr-2">🌟</span>
                <span className="bg-gradient-to-r from-green-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                  Why Choose Us?
                </span>
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg font-semibold">
                {[
                  "High Accuracy & Industry Standards",
                  "Fast Turnaround Times",
                  "Experienced CAD Designers & Engineers",
                  "Scalable for Projects of All Sizes",
                  "Integration with Manufacturing & Construction",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-cyan-400 hover:scale-[1.02] transform origin-left transition duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center overflow-y-auto"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

interface SectionProps {
  title: React.ReactNode;
  data: string[];
}

const Section: React.FC<SectionProps> = ({ title, data }) => {
  return (
    <div className="space-y-3 group hover:scale-105 transition duration-300 ease-in-out text-center md:text-left">
      <h3 className="text-xl font-bold bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-400 transition duration-300">
        <span className="bg-gradient-to-r from-green-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
          {title}
        </span>
      </h3>
      <ul className="list-disc list-inside pl-2 text-gray-300 text-base md:text-lg font-semibold space-y-2">
        {data.map((item, i) => (
          <li key={i} className="hover:text-cyan-400 transition duration-200">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CAD;
