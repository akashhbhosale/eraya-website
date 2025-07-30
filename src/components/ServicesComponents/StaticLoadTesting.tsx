"use client";

import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function StaticLoadTesting() {
  return (
    <ServiceLayout
      title="Static Load Testing"
      quote="Strength is measured in stillness   ERAYA ensures your product can bear the load before it moves."
      intro="At ERAYA, our Static Load Testing services are designed to validate structural integrity, performance, and compliance under sustained loading conditions. Whether it's a building component, vehicle part or mechanical assembly, we help determine how much load your system can handle safely without deformation or failure."
      backgroundImage="/assets/staticloadtesting-bg.png"
      sections={[
        {
          title: "Structural Load Testing",
          data: [
            "Load bearing capacity analysis and physical testing",
            "Beam, joint and frame evaluations",
            "Deflection and stress distribution monitoring",
            "Material deformation assessment",
          ],
        },
        {
          title: "Component & Assembly Testing",
          data: [
            "Mechanical part strength validation through FEA and physical testing",
            "Bolted and welded joint inspections",
            "Long duration stress tests",
            "Weight resistance of brackets, housings, mounts",
          ],
        },
        {
          title: "Fixtures, Jigs & Instrumentation",
          data: [
            "Custom test rig design and production",
            "Hydraulic and mechanical loading setups",
            "Load cells, strain gauges and displacement sensors",
            "Real time data acquisition systems",
          ],
        },
      ]}
      deliverables={[
        "Static load test procedure & setup documentation",
        "Real time and recorded measurement data",
        "Physical Static Load Testing in house and with Certified Test Labs",
        "Pass/fail results with stress/strain summaries",
        "Recommendations for load driven design improvements",
        "Onsite support by our qualified and experienced engineers",
      ]}
      deliverableImages={[
        "/assets/staticloadtesting-1.png",
        "/assets/staticloadtesting-6.png",
      ]}
      whyChooseUs={[
        "Extensive experience in static testing for diverse industries",
        "In house test rig design and setup capabilities",
        "Integration with simulation and design teams",
        "Precise data acquisition and result reporting",
        "Safety focused testing protocols",
      ]}
      whyChooseUsImages={[
        "/assets/staticloadtesting-7.png",
        "/assets/staticloadtesting-8.png",
      ]}
    />
  );
}
