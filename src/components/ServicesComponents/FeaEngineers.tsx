import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function FeaEngineers() {
  return (
    <ServiceLayout
      title="FEA Engineers"
      quote="Precision through simulation — ERAYA's FEA Engineers ensure your design thrives under real-world forces."
      intro="Our FEA Engineers at ERAYA provide advanced Finite Element Analysis (FEA) services to evaluate structural performance, durability, and safety. We help optimize product designs through in-depth simulations that save costs, reduce material use, and validate real-world resilience before physical prototyping."
      backgroundImage="/assets/FeaEngineers-bg.png"
      sections={[
        {
          title: "Structural & Thermal Analysis",
          data: [
            "Static and dynamic stress analysis",
            "Thermal loading and heat transfer",
            "Fatigue and life-cycle prediction",
            "Impact and crash simulation",
          ],
        },
        {
          title: "Optimization & Validation",
          data: [
            "Design for weight and material efficiency",
            "Modal, buckling, and vibration analysis",
            "FEA-based design validation for certification",
            "Comparative evaluation of design alternatives",
          ],
        },
        {
          title: "Software Proficiency",
          data: [
            "ANSYS Mechanical / Workbench",
            "Abaqus / HyperMesh",
            "SolidWorks Simulation",
            "Altair OptiStruct / Radioss",
          ],
        },
      ]}
      deliverables={[
        "Complete FEA simulation reports",
        "CAD-ready optimized geometries",
        "Design validation documentation",
        "Performance comparison dashboards",
      ]}
      deliverableImages={[
        "/assets/FeaEngineers-1.png",
        "/assets/FeaEngineers-2.png",
      ]}
      whyChooseUs={[
        "Experts in multi-physics simulation",
        "Certified tools and experienced analysts",
        "Realistic conditions and failure prediction",
        "Design decisions backed by data",
        "Fast iterations with detailed insights",
      ]}
      whyChooseUsImages={[
        "/assets/FeaEngineers-3.png",
        "/assets/FeaEngineers-4.png",
      ]}
    />
  );
}
