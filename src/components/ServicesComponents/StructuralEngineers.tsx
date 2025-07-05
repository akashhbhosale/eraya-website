import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function StructuralEngineers() {
  return (
    <ServiceLayout
      title="Structural Engineers"
      quote="Structural integrity is the backbone of design — ERAYA ensures it through expert structural engineering solutions."
      intro="At ERAYA, our Structural Engineers deliver safe, efficient, and innovative structural designs across various industries. From conceptual frameworks to detailed engineering analysis, our team ensures that every structure meets the demands of performance, compliance, and sustainability."
      backgroundImage="/assets/StructuralEngineers-bg.png"
      sections={[
        {
          title: "Structural Design & Analysis",
          data: [
            "Load-bearing structure design",
            "Concrete, steel, and composite frameworks",
            "Seismic, wind, and vibration assessments",
            "Retrofitting and rehabilitation solutions",
          ],
        },
        {
          title: "Compliance & Detailing",
          data: [
            "Code-compliant designs (IS, AISC, Eurocode)",
            "GA drawings and connection details",
            "Construction documentation and rebar schedules",
            "BOQ and material estimation",
          ],
        },
        {
          title: "Software Proficiency",
          data: [
            "STAAD.Pro / ETABS / SAFE",
            "Tekla Structures",
            "AutoCAD / Revit Structure",
            "SAP2000 / RISA / IDEA StatiCa",
          ],
        },
      ]}
      deliverables={[
        "Complete structural analysis reports",
        "Detailing drawings and GA plans",
        "Safety compliance documentation",
        "Optimized design iterations",
      ]}
      deliverableImages={[
        "/assets/StructuralEngineers-1.png",
        "/assets/StructuralEngineers-2.png",
      ]}
      whyChooseUs={[
        "Experienced in complex industrial structures",
        "Precise calculations with code compliance",
        "Integrated BIM workflows",
        "Rapid delivery and iterative collaboration",
        "Solutions tailored for cost and safety",
      ]}
      whyChooseUsImages={[
        "/assets/StructuralEngineers-3.png",
        "/assets/StructuralEngineers-4.png",
      ]}
    />
  );
}
