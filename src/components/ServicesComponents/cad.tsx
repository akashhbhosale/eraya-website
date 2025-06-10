"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FallingStarsBackground1 from "@/components/ui/falling-stars-background-1";
import { motion } from "framer-motion";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

const CAD = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const quote =
    "Precision in design is the foundation of innovation and we build it right from the blueprint.";
  const words = quote.split(" ");

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white bg-black py-16 px-6">
      <Navigation />
      <FallingStarsBackground1 />

      <div className="relative z-10 max-w-[90rem] w-full mx-auto bg-[url('/assets/cad-bg.png')] bg-cover bg-center bg-no-repeat backdrop-blur-xl border border-white/10 pt-6 pb-12 px-6 rounded-3xl shadow-2xl space-y-12">
        <div className="absolute inset-0 bg-black/60 rounded-3xl z-0" />

        <div className="relative z-10">
          <motion.div
            className="text-center mt-2 mb-10"
            data-aos="zoom-in"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-fade-in drop-shadow-lg mb-6 leading-tight tracking-wide">
              Computer Aided Design (CAD)
            </h1>
            <motion.p className="text-lg italic text-gray-100 flex flex-wrap justify-center gap-1">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent hover:underline transition duration-200"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <motion.div
            className="text-lg text-gray-200 leading-relaxed mt-6"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            At <span className="font-semibold text-white">ERAYA</span>, our
            Computer-Aided Design (CAD) Division is at the forefront of{" "}
            <span className="font-semibold text-white">digital design</span>. We
            specialize in{" "}
            <span className="text-bfont-semibold text-white">
              precision engineering
            </span>{" "}
            and delivering{" "}
            <span className="font-semibold text-white">detailed</span>,{" "}
            <span className="font-semibold text-white">accurate</span>, and{" "}
            <span className="font-semibold text-white">
              efficient CAD solutions
            </span>{" "}
            that transform ideas into tangible results—serving industries like
            architecture, manufacturing, engineering, rail, aerospace,
            automobile, construction, and product design.
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-10 mt-10"
            data-aos="fade-up"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
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
          </motion.div>

          <div
            className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-16 transition-transform duration-300 hover:scale-[1.01] hover:bg-white/5 rounded-xl p-4"
            data-aos="fade-up"
          >
            <div className="w-full md:w-1/2 self-center">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent mb-3 transition duration-300">
                📦 Deliverables
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg">
                {[
                  "DWG, DXF, STL, STEP, and PDF file formats",
                  "3D models, exploded views, and assembly instructions",
                  "Complete technical drawings with GD&T",
                  "Cloud-based file sharing & collaboration",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-blue-400 hover:scale-[1.02] transform origin-left transition duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {["/assets/cad-8.png", "/assets/cad-6.png"].map((src, i) => (
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
            className="flex flex-col md:flex-row items-start gap-6 mt-16 transition-transform duration-300 hover:scale-[1.01] hover:bg-white/5 rounded-xl p-4"
            data-aos="fade-up"
          >
            {["/assets/cad-5.png", "/assets/cad-7.png"].map((src, i) => (
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
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent mb-3 transition duration-300">
                🌟 Why Choose Us?
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg">
                {[
                  "High Accuracy & Industry Standards",
                  "Fast Turnaround Times",
                  "Experienced CAD Designers & Engineers",
                  "Scalable for Projects of All Sizes",
                  "Integration with Manufacturing & Construction",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-blue-400 hover:scale-[1.02] transform origin-left transition duration-300"
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
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

interface SectionProps {
  title: string;
  data: string[];
}

const Section: React.FC<SectionProps> = ({ title, data }) => {
  return (
    <div className="space-y-3 group hover:scale-105 transition duration-300 ease-in-out">
      <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-cyan-400 transition duration-300">
        {title}
      </h3>
      <ul className="list-disc list-inside pl-2 text-gray-300 space-y-1">
        {data.map((item, i) => (
          <li key={i} className="hover:text-blue-400 transition duration-200">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CAD;
