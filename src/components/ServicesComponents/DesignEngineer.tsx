import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function DesignEngineering() {
  return (
    <ServiceLayout
      title="Design And Engineering"
      quote="From concept to reality ERAYA delivers intelligent, robust, and future ready designs."
      intro="ERAYA’s Design Engineering Division is the creative and technical foundation of our product lifecycle. We transform ideas into manufacturable, efficient and high performance designs. By combining domain expertise with cutting edge tools, we ensure every design decision supports quality, functionality and innovation."
      backgroundImage="/assets/DesignEngineer-bg.png"
      sections={[
        {
          title: "CAD and CAE Services",
          data: [
            "3D modeling and 2D drafting using tools like CATIA, SolidWorks, AutoCAD",
            "Reverse engineering and legacy design digitization",
            "Static and dynamic simulations - FEA (Finite Element Analysis)",
            "Computational Fluid Dynamics (CFD) Simulations",
            "BOM generation and manufacturing drawings",
          ],
        },
        {
          title: "Product Development",
          data: [
            "Concept generation and industrial design",
            "Design for Manufacturing (DFM) and Assembly (DFA)",
            "Rapid prototyping and 3D printing support",
            "Multidisciplinary design integration (mechanical, electrical, mechatronics)",
          ],
        },
        {
          title: "Product Testing & Validation",
          data: [
            "Mechanical & Physical Testing: Load, stress, impact, vibration, material tests",
            "Environmental & Thermal Testing: Thermal cycling, corrosion, UV, IP rating",
            "Electrical & Functional Testing: Continuity, sensor validation, EMI/EMC",
            "Simulation Driven Validation: FEA/CFD analysis, fatigue, FMEA, digital twin modeling",
          ],
        },
      ]}
      deliverables={[
        "Fully annotated engineering drawings",
        "CAD models compatible with all major formats",
        "Design validation reports and revision logs",
        "Prototype test data and improvement recommendations",
        "FEA and CFD Simulations",
      ]}
      deliverableImages={[
        "/assets/DesignEngineer-1.png",
        "/assets/DesignEngineer-2.png",
      ]}
      whyChooseUs={[
        "End to end product design capability from concept to testing",
        "Cross functional design teams with domain expertise",
        "State of the art CAD, FEA and CFD simulation infrastructure",
        "Collaboration with global manufacturing partners for prototyping",
        "Iterative design optimization for performance and cost",
        "Adherence to international design and safety standards",
      ]}
      whyChooseUsImages={[
        "/assets/DesignEngineer-3.png",
        "/assets/DesignEngineer-4.png",
      ]}
    />
  );
}
