import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function EnvironmentalTesting() {
  return (
    <ServiceLayout
      title="Environmental Testing"
      quote="Real conditions reveal true performance — ERAYA tests materials and products against the extremes they must endure."
      intro="At ERAYA, our Environmental Testing Division ensures that materials, components, and products can withstand harsh environmental conditions throughout their lifecycle. We simulate exposure to temperature, humidity, UV, corrosion, vibration, and more, verifying durability and compliance for applications across automotive, aerospace, defense, and consumer goods."
      backgroundImage="/assets/EnvironmentalTesting-bg.png"
      sections={[
        {
          title: "Climatic & Corrosion Testing",
          data: [
            "Thermal cycling and temperature extremes",
            "Humidity and condensation resistance",
            "Salt spray and corrosion chamber testing",
            "Accelerated weathering (UV, ozone, rain)",
          ],
        },
        {
          title: "Mechanical & Vibration Stress Testing",
          data: [
            "Random and sinusoidal vibration testing",
            "Drop, shock, and impact resistance",
            "Packaging and transport simulation",
            "Resonance and fatigue life validation",
          ],
        },
        {
          title: "Regulatory & Industry Compliance",
          data: [
            "Environmental standards (MIL-STD, ASTM, IEC)",
            "Lifecycle testing for product validation",
            "Automotive and aerospace compliance support",
            "Custom test protocols for niche applications",
          ],
        },
      ]}
      deliverables={[
        "Environmental stress test reports with data logs",
        "Failure mode documentation and photo evidence",
        "Lifecycle performance predictions",
        "Recommendations for design and material improvements",
      ]}
      deliverableImages={[
        "/assets/EnvironmentalTesting-1.png",
        "/assets/EnvironmentalTesting-2.png",
      ]}
      whyChooseUs={[
        "Broad testing capabilities under one roof",
        "Simulation of extreme real-world environments",
        "Rapid setup and testing cycles",
        "Support for R&D, QA, and compliance teams",
        "Validated results aligned with global standards",
      ]}
      whyChooseUsImages={[
        "/assets/EnvironmentalTesting-3.png",
        "/assets/EnvironmentalTesting-4.png",
      ]}
    />
  );
}
