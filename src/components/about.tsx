"use client";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 md:px-10 max-w-7xl mx-auto space-y-16">
      {/* Executive Summary */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold text-blue-400 mb-4">
            Executive Summary
          </h1>
          <p className="text-gray-300 leading-relaxed">
            <strong>ERAYA</strong> is a global provider of{" "}
            <strong>Design, Engineering, and Manufacturing Services</strong> to
            industries such as Rail, Aerospace, Automotive, Defence, Industrial
            Equipment, Energy & Utilities, Healthcare & Medical Devices, Heavy
            Machinery, Agriculture & Food processing, Construction &
            Infrastructure, Marine & Offshore, Consumer Goods,
            Telecommunications, and more.
            <br />
            <br />
            Our expertise includes <strong>
              CAD, CAE, FEA, CFD, Testing
            </strong>{" "}
            like Crash, Static, Fire, Acoustic, Shock, Vibration, IEC, EMF, and
            end-to-end Product Development. By leveraging state-of-the-art tools
            and a skilled team, ERAYA aims to deliver innovative, high-quality,
            and cost-effective solutions to clients worldwide.
            <br />
            <br />
            Our short-term goal is to build a diverse customer base, while the
            long-term objective is to expand into new sectors, ensuring
            consistent innovation and quality.
          </p>
        </div>
        <div>
          <img
            src="/assets/ComputerAidedEngiServices-1.png"
            alt="Executive Summary"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Company Description */}
      <section className="bg-[#FF6A00] text-black rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          Company Description
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm md:text-base">
          <div>
            <h3 className="font-semibold text-lg mb-2">Company Name:</h3>
            <p>ERAYA</p>
            <h3 className="font-semibold text-lg mt-4 mb-2">Vision:</h3>
            <p>
              To become a trusted global leader in design, engineering, and
              product development, empowering industries with sustainable and
              efficient solutions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Industry:</h3>
            <p>Design, Engineering and Manufacturing Services</p>
            <h3 className="font-semibold text-lg mt-4 mb-2">Core Values:</h3>
            <p>
              Innovation, Reliability, Quality & Excellence, Sustainability &
              Responsibility, Integrity, Agility & Adaptability, Continuous
              Improvement, Safety & Accountability, and Customer-Centricity.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Mission Statement:</h3>
            <p>
              To deliver innovative, high-quality, and cost-effective solutions
              in design, engineering, and manufacturing, helping our clients to
              transform ideas into market-ready products.
            </p>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">
          Our Global Presence
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-gray-300">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Noida, India
            </h3>
            <p>
              ERAYA Solutions Pvt. Ltd.
              <br />
              D-Block, Sector 63, Noida, Uttar Pradesh - 201301
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Dubai, UAE
            </h3>
            <p>
              ERAYA MENA Office
              <br />
              Unit 201, Business Center, Dubai Silicon Oasis, Dubai, UAE
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              London, UK
            </h3>
            <p>
              ERAYA Engineering UK Ltd.
              <br />
              56 Kingsway, Holborn, London WC2B 6EX, United Kingdom
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
