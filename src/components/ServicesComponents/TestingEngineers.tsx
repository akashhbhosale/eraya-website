import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function TestingEngineers() {
  return (
    <ServiceLayout
      title="Testing Engineers"
      quote="Validation isn't optional — ERAYA's Testing Engineers ensure every product meets performance, safety, and compliance standards."
      intro="At ERAYA, our Testing Engineers specialize in validating products and systems through advanced physical and simulated testing methods. Whether in automotive, aerospace, manufacturing, or electronics, we deliver data-driven insights to reduce risk, improve quality, and ensure compliance with international standards."
      backgroundImage="/assets/TestingEngineers-bg.png"
      sections={[
        {
          title: "Mechanical & Environmental Testing",
          data: [
            "Vibration and fatigue testing",
            "Thermal, humidity & corrosion testing",
            "Drop, impact & shock resistance evaluations",
            "Ingress Protection (IP) & environmental sealing tests",
          ],
        },
        {
          title: "Performance & Safety Testing",
          data: [
            "Crash and structural impact simulations",
            "Load, stress & pressure testing",
            "Material property & aging assessments",
            "Compliance with ISO, ASTM, BIS, and EN standards",
          ],
        },
        {
          title: "Software & Tools Expertise",
          data: [
            "Data acquisition systems (DAQ)",
            "LabVIEW, MATLAB & Simulink",
            "High-speed cameras & sensors",
            "FEA, CFD & multiphysics simulation correlation",
          ],
        },
      ]}
      deliverables={[
        "Test procedures and protocol documentation",
        "Performance graphs, plots, and summaries",
        "Failure analysis and root cause reports",
        "Conformance certification and improvement roadmap",
      ]}
      deliverableImages={[
        "/assets/TestingEngineers-1.png",
        "/assets/TestingEngineers-2.png",
      ]}
      whyChooseUs={[
        "End-to-end product validation expertise",
        "Custom test rigs and instrumentation",
        "Precision testing with real-time analysis",
        "Strong focus on safety and regulatory standards",
        "Experienced engineers across industry domains",
      ]}
      whyChooseUsImages={[
        "/assets/TestingEngineers-3.png",
        "/assets/TestingEngineers-4.png",
      ]}
    />
  );
}
