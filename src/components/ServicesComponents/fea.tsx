import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function FEA() {
  return (
    <ServiceLayout
      title="Finite Element Analysis (FEA)"
      quote="Engineering confidence begins with analysis — ERAYA delivers precision through simulation before fabrication."
      intro="At ERAYA, our Finite Element Analysis (FEA) Division ensures your designs meet strength, safety, and performance standards. We use simulation-based engineering to validate concepts, predict real-world behavior, and reduce costly physical prototyping across multiple industries."
      backgroundImage="/assets/FEA-bg.png" // ✅ Background image specific to FEA
      sections={[
        {
          title: "Structural & Thermal Analysis",
          data: [
            "Static & dynamic loading",
            "Fatigue & vibration analysis",
            "Thermal distribution & heat flux",
            "Buckling and impact assessment",
          ],
        },
        {
          title: "Material & Simulation Expertise",
          data: [
            "Linear & non-linear materials",
            "Composites and metals",
            "Contact and assembly simulations",
            "Result interpretation & optimization",
          ],
        },
        {
          title: "Software Proficiency",
          data: [
            "ANSYS Workbench",
            "SolidWorks Simulation",
            "ABAQUS",
            "Fusion 360 Simulation",
            "SimScale (Cloud-based)",
          ],
        },
      ]}
      deliverables={[
        "Simulation reports with annotated results",
        "Deformation and stress contour plots",
        "Safety factor analysis",
        "Recommendations for design refinement",
      ]}
      deliverableImages={["/assets/FEA-1.png", "/assets/FEA-2.png"]}
      whyChooseUs={[
        "Accurate, simulation-driven decision making",
        "Early failure prediction & risk minimization",
        "Experienced FEA engineers & domain specialists",
        "Cost-effective virtual testing",
        "Industry-compliant reports and documentation",
      ]}
      whyChooseUsImages={["/assets/FEA-3.png", "/assets/FEA-8.png"]}
    />
  );
}
