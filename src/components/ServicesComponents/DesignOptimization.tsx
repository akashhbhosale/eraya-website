import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function DesignOptimization() {
  return (
    <ServiceLayout
      title="Design Optimization"
      quote="Optimization isn't guesswork — it's engineering refined through intelligence. ERAYA drives smarter design outcomes."
      intro="At ERAYA, we engineer smarter products through structured design optimization. From weight reduction and material efficiency to performance tuning, our simulation-driven approach ensures every design is the best version of itself."
      backgroundImage="/assets/CFD-bg.png" // Update this path if you have a custom background for design optimization
      sections={[
        {
          title: "Optimization Techniques",
          data: [
            "Topology & shape optimization",
            "Weight minimization",
            "Multi-objective optimization",
            "Parametric studies",
          ],
        },
        {
          title: "Design Exploration",
          data: [
            "Sensitivity analysis",
            "Design space mapping",
            "DOE (Design of Experiments)",
            "Trade-off analysis",
          ],
        },
        {
          title: "Software Proficiency",
          data: [
            "ANSYS DesignXplorer ",
            "Altair OptiStruct / Inspire",
            "SolidWorks Simulation",
            "Altair HyperStudy",
            "MATLAB Optimization Toolbox",
          ],
        },
      ]}
      deliverables={[
        "Optimization reports",
        "CAD-ready refined geometries",
        "Performance plots & charts",
        "Comparison matrices",
      ]}
      deliverableImages={["/assets/desopt-3.png", "/assets/desopt-4.png"]}
      whyChooseUs={[
        "Simulation-driven design insights",
        "Efficient and lean product outcomes",
        "Reduced trial-and-error cycles",
        "Quantitative decision-making support",
        "Engineers with multi-domain expertise",
      ]}
      whyChooseUsImages={["/assets/desopt-7.png", "/assets/desopt-8.png"]}
    />
  );
}
