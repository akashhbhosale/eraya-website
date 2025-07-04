"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import FallingStarsBackground1 from "@/components/ui/falling-stars-background-1";

interface SectionData {
  title: string;
  data: string[];
}

interface ServiceLayoutProps {
  title: string;
  quote: string;
  intro: string;
  sections: SectionData[];
  deliverables: string[];
  deliverableImages: string[];
  whyChooseUs: string[];
  whyChooseUsImages: string[];
  backgroundImage?: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  quote,
  intro,
  sections,
  deliverables,
  deliverableImages,
  whyChooseUs,
  whyChooseUsImages,
  backgroundImage = "/assets/default-bg.png",
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white bg-black py-6 px-4 sm:px-6 md:px-10 lg:px-16">
      <FallingStarsBackground1 />

      <div
        className="relative z-10 max-w-[90rem] mx-auto bg-cover bg-center bg-no-repeat backdrop-blur-xl border border-white/10 pt-6 pb-12 px-4 sm:px-6 md:px-10 rounded-3xl shadow-2xl space-y-8 mb-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-[#0c0c0c]/60 rounded-3xl z-0" />

        <div className="relative z-10">
          <motion.div
            className="text-center mt-2 mb-10"
            data-aos="zoom-in"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-2xl mb-10 leading-tight tracking-wide text-center">
              {title}
            </h1>

            <motion.p
              className="text-xl md:text-2xl italic font-bold text-blue-400 mt-6 leading-relaxed text-center px-4"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {quote}
            </motion.p>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-justify"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {intro}
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 items-stretch"
            data-aos="fade-up"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {sections.map((section, index) => (
              <Section key={index} title={section.title} data={section.data} />
            ))}
          </motion.div>

          <div
            className="flex flex-col md:flex-row items-stretch justify-between gap-6 mt-16"
            data-aos="fade-up"
          >
            <div className="w-full md:w-1/3 border border-blue-400 rounded-xl p-6 bg-[#0c0c0c]">
              <h3 className="text-2xl font-bold text-blue-400">Deliverables</h3>
              <ul className="list-disc list-outside pl-5 mt-3 space-y-2 text-gray-300 text-base sm:text-lg font-semibold">
                {deliverables.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-white transition-all duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {deliverableImages.map((img, i) => (
              <div
                key={i}
                className="w-full md:w-1/3 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Deliverable ${i + 1}`}
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            ))}
          </div>

          <div
            className="flex flex-col md:flex-row items-stretch justify-center gap-6 mt-16"
            data-aos="fade-up"
          >
            {whyChooseUsImages.map((img, i) => (
              <div
                key={i}
                className="w-full md:w-1/3 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Why Choose Us ${i + 1}`}
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            ))}

            <div className="w-full md:w-1/3 border border-blue-400 rounded-xl p-6 bg-[#0c0c0c]">
              <h3 className="text-2xl font-bold text-blue-400">
                Why Choose Us?
              </h3>
              <ul className="list-disc list-outside pl-5 mt-3 space-y-2 text-gray-300 text-base sm:text-lg font-semibold">
                {whyChooseUs.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-white transition-all duration-300"
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
    </div>
  );
};

interface SectionProps {
  title: string;
  data: string[];
}

const Section: React.FC<SectionProps> = ({ title, data }) => (
  <div className="flex flex-col h-full px-4 py-4 border border-blue-400 rounded-2xl group hover:scale-105 transition duration-300 ease-in-out bg-[#0c0c0c] text-center">
    <h3 className="text-2xl font-bold mb-3 text-blue-400">{title}</h3>
    <ul className="list-disc list-outside pl-6 text-gray-300 text-base sm:text-lg font-semibold space-y-2 text-justify max-w-[95%] mx-auto">
      {data.map((item, i) => (
        <li key={i} className="hover:text-white transition duration-200">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default ServiceLayout;
