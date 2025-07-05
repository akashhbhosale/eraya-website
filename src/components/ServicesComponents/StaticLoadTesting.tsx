"use client";

import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function StaticLoadTesting() {
  return (
    <ServiceLayout
      title="Static Load Testing"
      quote="Strength is measured in stillness — ERAYA ensures your product can bear the load before it moves."
      intro="At ERAYA, our Static Load Testing services are designed to validate structural integrity, performance, and compliance under sustained loading conditions. Whether it's a building component, vehicle part, or mechanical assembly, we help determine how much load your system can handle safely without deformation or failure."
      backgroundImage="/assets/staticloadtesting-bg.png"
      sections={[
        {
          title: "Structural Load Testing",
          data: [
            "Load-bearing capacity analysis",
            "Beam, joint, and frame evaluations",
            "Deflection and stress distribution monitoring",
            "Material deformation assessment",
          ],
        },
        {
          title: "Component & Assembly Testing",
          data: [
            "Mechanical part strength validation",
            "Bolted and welded joint inspections",
            "Long-duration stress tests",
            "Weight resistance of brackets, housings, mounts",
          ],
        },
        {
          title: "Simulation + Testing Integration",
          data: [
            "FEA model correlation",
            "Validation of static analysis results",
            "Failure point identification",
            "Load case optimization for design feedback",
          ],
        },
      ]}
      deliverables={[
        "Static load test procedure & setup documentation",
        "Real-time and recorded measurement data",
        "Pass/fail results with stress/strain summaries",
        "Recommendations for load-driven design improvements",
      ]}
      deliverableImages={[
        "/assets/staticloadtesting-1.png",
        "/assets/staticloadtesting-6.png",
      ]}
      whyChooseUs={[
        "Extensive experience in static testing for diverse industries",
        "In-house test rig design and setup capabilities",
        "Integration with simulation and design teams",
        "Precise data acquisition and result reporting",
        "Safety-focused testing protocols",
      ]}
      whyChooseUsImages={[
        "/assets/staticloadtesting-7.png",
        "/assets/staticloadtesting-8.png",
      ]}
    />
  );
}
