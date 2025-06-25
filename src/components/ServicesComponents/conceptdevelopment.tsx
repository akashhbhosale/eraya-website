"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FallingStarsBackground1 from "@/components/ui/falling-stars-background-1";
import { motion } from "framer-motion";

const ConceptDevelopment = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const quote =
    "Every innovation begins with a concept — ERAYA refines raw ideas into clear, actionable blueprints.";
  const words = quote.split(" ");

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white bg-black py-6 px-6 mt-0">
      <FallingStarsBackground1 />

      <div className="relative z-10 max-w-[90rem] w-full mx-auto bg-[url('/assets/conceptdesign-bg.png')] bg-cover bg-center bg-no-repeat backdrop-blur-xl border border-white/10 pt-6 pb-12 px-6 rounded-3xl shadow-2xl space-y-8 mb-20">
        <div className="absolute inset-0 bg-black/60 rounded-3xl z-0" />

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mt-2 mb-10"
            data-aos="zoom-in"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-400 to-cyan-300 animate-fade-in drop-shadow-2xl mb-10 leading-tight tracking-wide text-center">
              Concept Development
            </h1>
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
          </motion.div>

          {/* Description */}
          <motion.div
            className="text-lg font-semibold text-gray-200 leading-relaxed mt-6 text-center md:text-left"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            At <span className="font-bold text-white">ERAYA</span>, Concept
            Development is where creativity meets strategy. We help clients
            convert early-stage ideas into well-defined, value-driven concepts
            that are ready for design, prototyping, and validation. Whether
            you're solving a problem, launching a product, or exploring new
            opportunities, we make sure your vision is feasible, functional, and
            impactful.
          </motion.div>

          {/* Services Grid */}
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
                  <span className="text-orange-300">🧠</span> Research &
                  Discovery
                </>
              }
              data={[
                "Trend analysis and competitive benchmarking",
                "Stakeholder and user interviews",
                "Problem framing and opportunity mapping",
                "Technical and market feasibility studies",
              ]}
            />
            <Section
              title={
                <>
                  <span className="text-pink-300">🎨</span> Ideation &
                  Visualization
                </>
              }
              data={[
                "Idea generation workshops and mind-mapping",
                "Low-fidelity sketches and wireframes",
                "Digital concept boards and mockups",
                "Cross-functional feedback loops",
              ]}
            />
            <Section
              title={
                <>
                  <span className="text-blue-300">🛠️</span> Function &
                  Feasibility Testing
                </>
              }
              data={[
                "Initial CAD layouts and simulations",
                "Conceptual prototyping (mockups, 3D print)",
                "Design requirement definition",
                "Iteration based on early testing feedback",
              ]}
            />
          </motion.div>

          {/* Deliverables */}
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
                  "Defined product concept brief",
                  "Early CAD models and visual assets",
                  "Feasibility and design alignment summary",
                  "Innovation roadmap with next-step milestones",
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
            {["/assets/conceptdesign-1.png", "/assets/conceptdesign-2.png"].map(
              (src, i) => (
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
              )
            )}
          </div>

          {/* Why Choose Us */}
          <div
            className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-6 mt-16 transition-transform duration-300 hover:scale-[1.01] hover:bg-white/5 rounded-xl p-4 w-full"
            data-aos="fade-up"
          >
            {["/assets/conceptdesign-3.png", "/assets/conceptdesign-4.png"].map(
              (src, i) => (
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
              )
            )}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-3 transition duration-300">
                <span className="text-purple-300 mr-2">🌟</span>
                <span className="bg-gradient-to-r from-green-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                  Why Choose Us?
                </span>
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg font-semibold">
                {[
                  "Structured creative-to-technical translation",
                  "Deep design thinking and market insight",
                  "Flexible engagement: from workshop to full concept",
                  "Co-creation with clients at every step",
                  "Experienced team of strategists, designers, and engineers",
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

      {/* Image Viewer */}
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

export default ConceptDevelopment;
