import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function DesignOptimization() {
  return (
    <ServiceLayout
      title="Design Optimization"
      quote="Better design is not just about function it's about finding the perfect balance. ERAYA optimizes every detail."
      intro="At ERAYA, , our Design Optimization Division helps clients enhance performance, reduce weight and improve manufacturability of their products. We use advanced techniques to identify ideal design parameters while balancing structural integrity, material usage, cost and aesthetic value."
      backgroundImage="/assets/CFD-bg.png" // Update this path if you have a custom background for design optimization
      sections={[
        {
          title: "Performance driven Optimization",
          data: [
            "Topology optimization for lightweight design",
            "Parametric sensitivity analysis",
            "Material and geometry trade off studies",
            "Design for manufacturability (DFM) strategies",
          ],
        },
        {
          title: "Simulation Integrated Redesign",
          data: [
            "FEA informed stress/strain targeting",
            "CFD guided fluid channel improvements",
            "Thermal behavior tuning",
            "Multi objective optimization workflows",
          ],
        },
        {
          title: "Software Proficiency",
          data: [
            "ANSYS DesignXplorer ",
            "Altair OptiStruct / Inspire",
            "SolidWorks Optimization Tools",
            "COMSOL Multiphysics",
            "Fusion 360 Generative Design",
          ],
        },
      ]}
      deliverables={[
        "Optimization CAD geometry",
        "Iteration comparisons and trade off charts",
        "Performance reports and simulation backed insights",
        "Cost efficiency improvement recommendations",
      ]}
      deliverableImages={["/assets/desopt-3.png", "/assets/desopt-4.png"]}
      whyChooseUs={[
        "Deep simulation led design experience",
        "Customized optimization goals (weight, cost, safety)",
        "Integration with existing CAD/CAE pipelines",
        "Expertise in generative and evolutionary design",
        "End to end support from concept to prototype",
      ]}
      whyChooseUsImages={["/assets/desopt-7.png", "/assets/desopt-8.png"]}
    />
  );
}
