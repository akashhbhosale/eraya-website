"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      {/* Main About Section */}
      <div className="pt-20 pb-6 sm:w-full bg-black bg-dot-white/[0.2] relative flex flex-col items-center justify-start space-y-8 px-4">
        {/* About Us Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            About Us
          </h2>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative bg-black rounded-2xl border-2 border-primary p-6 shadow-lg max-w-5xl w-full mx-auto"
          >
            <p className="text-2xl font-extrabold italic uppercase text-center tracking-widest text-white">
              <span className="text-primary">Eraya</span>: Defining What’s Next
              in
              <span className="text-blue-400">
                {" "}
                Engineering Excellence, Manufacturing, Precision and Talent
                Services.
              </span>
            </p>
          </motion.div>
        </div>

        {/* Executive Summary */}
        <div className="max-w-5xl text-gray-300 leading-relaxed text-2xl text-justify">
          <p>
            <strong>" </strong>At <strong>ERAYA</strong>, our foundation is
            built on more than just engineering it's built on principles that
            shape how we <strong>work, lead, and grow</strong>. We innovate{" "}
            <strong>fearlessly</strong>, deliver with <strong>integrity</strong>
            , and perfect every detail with <strong>precision</strong>. From
            sustainable practices to lifelong learning, from collaborative
            teamwork to putting people first we don’t just promise{" "}
            <strong>excellence</strong>; we live it. Every partnership, every
            project, every breakthrough is driven by our unwavering values
            crafted to create{" "}
            <strong>smarter solutions and a better future</strong>.{" "}
            <strong>"</strong>
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="max-w-full py-10 bg-black bg-dot-white/[0.2] flex flex-col items-center px-2">
        <section className="text-center w-full max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12 text-gray-300">
            {/* Mission */}
            <div className="bg-black border-2 border-primary rounded-2xl p-6 shadow-lg min-h-[320px]">
              <h3 className="text-3xl font-extrabold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-xl leading-relaxed text-center">
                To deliver innovative and intelligent engineering,
                manufacturing, and talent solutions that empower our clients to
                build better, faster and smarter. We are committed to precision,
                performance and partnership in every project we undertake.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-black border-2 border-primary rounded-2xl p-6 shadow-lg min-h-[320px]">
              <h3 className="text-3xl font-extrabold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-xl leading-relaxed text-center">
                To be a globally trusted brand in engineering, manufacturing and
                talent innovation setting benchmarks for design, engineering,
                manufacturing excellence and workforce transformation across
                industries.
              </p>
            </div>

            {/* Values */}
            <div className="bg-black border-2 border-primary rounded-2xl p-6 shadow-lg min-h-[320px]">
              <h3 className="text-3xl font-extrabold text-white mb-4">
                Our Values
              </h3>
              <p className="text-xl leading-relaxed text-center">
                We are driven by integrity, fueled by innovation and anchored in
                collaboration. At ERAYA, we uphold a culture of excellence,
                accountability, and continuous learning empowering our people,
                delighting our clients and delivering purposeful impact through
                everything we do.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Global Offices - Separate Section with Same Background */}
      <div className="w-full py-10 bg-black bg-dot-white/[0.2] flex flex-col items-center px-4">
        <section className="text-center w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">
            Our Global Presence
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-60 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Noida, India
              </h3>
              <p>
                ERAYA Limited
                <br />
                X-13, Sector 12,
                <br />
                Noida, Uttar Pradesh
                <br />
                India - 201301
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Telford, UK
              </h3>
              <p>
                ERAYA Limited
                <br />
                25 Peregrine Way, Apley,
                <br />
                Telford, Shropshire,
                <br />
                United Kingdom TF1 6TH
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Delhi, India
              </h3>
              <p>
                ERAYA Limited
                <br />
                68-C, Sector 11,
                <br />
                Rohini, Delhi <br />
                India -110085
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
