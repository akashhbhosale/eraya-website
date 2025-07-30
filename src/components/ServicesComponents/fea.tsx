import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function FEA() {
  return (
    <ServiceLayout
      title="Finite Element Analysis (FEA)"
      quote="Engineering confidence begins with analysis ERAYA delivers precision through simulation before production."
      intro="At ERAYA, our Finite Element Analysis (FEA) Division ensures your designs meet strength, safety and performance standards. We use simulation based engineering to validate concepts, predict real-world behavior and reduce costly physical testing/ prototyping across multiple industries."
      backgroundImage="/assets/FEA-bg.png" // ✅ Background image specific to FEA
      sections={[
        {
          title: "Structural & Thermal Analysis",
          data: [
            "Static & dynamic loading",
            "Crash with dummy integrated analysis",
            "Fatigue & vibration analysis",
            "Thermal distribution & heat flux",
            "Buckling and impact assessment",
          ],
        },
        {
          title: "Material & Simulation Expertise",
          data: [
            "Linear & non linear materials",
            "Composites and metals",
            "Contact and assembly simulations",
            "Correlation Study",
            "Result interpretation & optimization suggestions",
          ],
        },
        {
          title: "Software Proficiency",
          data: [
            "ANSYS Workbench",
            "SolidWorks Simulation",
            "LS DYNA",
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
        "Injury analysis",
        "Recommendations for design refinement",
      ]}
      deliverableImages={["/assets/FEA-1.png", "/assets/FEA-2.png"]}
      whyChooseUs={[
        "Accurate, simulation driven decision making",
        "Early failure prediction & risk minimization",
        "Highly experienced FEA engineers & domain specialists",
        "High-tech software’s to support FEA analysis",
        "Cost-effective virtual testing",
        "Industry compliant reports and documentation",
      ]}
      whyChooseUsImages={["/assets/FEA-3.png", "/assets/FEA-8.png"]}
    />
  );
}
