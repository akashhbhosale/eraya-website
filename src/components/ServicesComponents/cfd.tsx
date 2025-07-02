"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FallingStarsBackground1 from "@/components/ui/falling-stars-background-1";
import { motion } from "framer-motion";

const CFD = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const quote =
    "Precision in design is the foundation of innovation and we build it right from the blueprint.";

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white bg-black py-6 px-6 mt-0">
      <FallingStarsBackground1 />

      <div className="relative z-10 max-w-[90rem] w-full mx-auto bg-[url('/assets/cad-bg-1.png')] bg-cover bg-center bg-no-repeat backdrop-blur-xl border border-white/10 pt-6 pb-12 px-6 rounded-3xl shadow-2xl space-y-8 mb-20">
        <div className="absolute inset-0 bg-black/60 rounded-3xl z-0" />

        <div className="relative z-10">
          <motion.div
            className="text-center mt-2 mb-10"
            data-aos="zoom-in"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-2xl mb-10 leading-tight tracking-wide text-center">
              Computer Aided Design (CAD)
            </h1>

            <motion.p
              className="text-xl md:text-2xl italic font-bold text-blue-400 mt-6 leading-relaxed text-center px-4"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {quote}
            </motion.p>
          </motion.div>

          <motion.div
            className="text-xl font-semibold text-white leading-relaxed mt-6 text-justify md:text-justify"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            At <span className="font-bold text-white">ERAYA</span>, our
            Computer-Aided Design (CAD) Division is at the forefront of digital
            design. We specialize in precision engineering and delivering
            detailed, accurate and efficient CAD solutions that transform ideas
            into tangible results serving industries like architecture,
            manufacturing, engineering, rail, aerospace, automobile,
            construction, and product design.
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-8 mt-10 items-stretch w-full overflow-visible"
            data-aos="fade-up"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Section
              title={"Product Design & Prototyping"}
              data={[
                "Concept-to-CAD modeling",
                "Reverse engineering",
                "FEA & simulation",
                "SolidWorks & Fusion 360",
                "STL files for 3D printing",
              ]}
            />
            <Section
              title={"Electrical & MEP Drafting"}
              data={[
                "Schematics & wiring diagrams",
                "MEP coordination",
                "Panel layouts & circuit planning",
              ]}
            />
            <Section
              title={"Software Proficiency"}
              data={[
                "AutoCAD / AutoCAD MEP",
                "SolidWorks",
                "Autodesk Revit",
                "CATIA / NX",
              ]}
            />
          </motion.div>

          {/* Deliverables */}

          {/* Deliverables Section */}
          <div
            className="flex flex-col md:flex-row items-stretch justify-between gap-6 mt-16 w-full"
            data-aos="fade-up"
          >
            {/* TEXT BOX */}
            <div className="w-full md:w-1/3 flex flex-col justify-start border border-blue-400 rounded-xl p-6 bg-[#0c0c0c]">
              <h3 className="text-2xl font-bold text-blue-400 transition duration-300">
                Deliverables
              </h3>
              <ul className="list-disc list-outside pl-6 space-y-2 mt-2 text-gray-300 text-base md:text-lg font-semibold">
                {[
                  "DWG, DXF, STL, STEP, and PDF file formats",
                  "3D models, exploded views, and assembly instructions",
                  "Complete technical drawings with GD&T",
                  "Cloud-based file sharing & collaboration",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-yellow-400 hover:scale-[1.02] transform origin-left transition duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* IMAGE 1 - Vertical (No Border) */}
            <div
              className="w-full md:w-1/3 flex flex-col cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none active:outline-none rounded-xl overflow-hidden"
              onClick={() => setSelectedImage("/assets/cad-5.png")}
              tabIndex={-1}
            >
              <div className="flex-grow h-full w-full">
                <img
                  src="/assets/cad-5.png"
                  alt="Deliverable 1"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* IMAGE 2 - Landscape (No Border) */}
            <div
              className="w-full md:w-1/3 flex flex-col cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none active:outline-none rounded-xl overflow-hidden"
              onClick={() => setSelectedImage("/assets/cad-6.png")}
              tabIndex={-1}
            >
              <div className="flex-grow h-full w-full">
                <img
                  src="/assets/cad-6.png"
                  alt="Deliverable 2"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div
            className="flex flex-col md:flex-row items-stretch justify-center gap-6 mt-16 w-full"
            data-aos="fade-up"
          >
            {/* IMAGE 1 */}
            <div
              className="w-full md:w-1/3 flex flex-col cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none active:outline-none"
              onClick={() => setSelectedImage("/assets/cad-7.png")}
              tabIndex={-1}
            >
              <img
                src="/assets/cad-7.png"
                alt="Why Choose Us 1"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* IMAGE 2 */}
            <div
              className="w-full md:w-1/3 flex flex-col cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none active:outline-none"
              onClick={() => setSelectedImage("/assets/cad-8.png")}
              tabIndex={-1}
            >
              <img
                src="/assets/cad-8.png"
                alt="Why Choose Us 2"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* TEXT BOX */}
            <div className="w-full md:w-1/3 flex flex-col justify-start border border-blue-400 rounded-xl p-6 bg-[#0c0c0c]">
              <h3 className="text-2xl font-bold text-blue-400 transition duration-300">
                Why Choose Us?
              </h3>
              <ul className="list-disc list-outside pl-6 space-y-2 mt-2 text-gray-300 text-base md:text-lg font-semibold">
                {[
                  "High Accuracy & Industry Standards",
                  "Fast Turnaround Times",
                  "Experienced CAD Designers & Engineers",
                  "Scalable for Projects of All Sizes",
                  "Integration with Manufacturing & Construction",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-yellow-400 hover:scale-[1.02] transform origin-left transition duration-300"
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
  title: string;
  data: string[];
}

const Section: React.FC<SectionProps> = ({ title, data }) => {
  return (
    <div className="flex flex-col h-full px-4 py-4 border border-blue-400 rounded-2xl group hover:scale-105 transition duration-300 ease-in-out transform-gpu will-change-transform bg-black text-center">
      <h3 className="text-2xl font-bold mb-2 text-blue-400">{title}</h3>
      <ul className="list-disc list-outside pl-6 text-gray-300 text-base md:text-lg font-semibold space-y-2 text-justify w-full max-w-[90%] mx-auto">
        {data.map((item, i) => (
          <li key={i} className="hover:text-red-400 transition duration-200">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CFD;
