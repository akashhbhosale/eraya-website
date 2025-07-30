import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function CncMachining() {
  return (
    <ServiceLayout
      title="CNC Machining"
      quote="From wood to metal, ERAYA’s precision machining shapes every detail with engineered perfection."
      intro="At ERAYA, our CNC Machining division delivers high precision components using advanced multi axis CNC systems. Whether it's crafting aesthetic wooden parts or producing functional metal assemblies, we serve diverse sectors with unmatched accuracy, repeatability and finish quality."
      backgroundImage="/assets/CncMachining-bg.png"
      sections={[
        {
          title: "CNC for Wood Components",
          data: [
            "High speed routing for hardwoods, MDF and composites",
            "Custom joinery and decorative milling",
            "Precision shaping for furniture and architectural elements",
            "Dust optimized tool paths and clean edge finishing",
          ],
        },
        {
          title: "CNC for Metal Components",
          data: [
            "3-axis and 5-axis milling for aluminum, steel and brass",
            "Threading, pocketing and surface contouring",
            "Machined prototypes and small batch production",
            "Dimensional tolerances as tight as ±0.01 mm",
          ],
        },
        {
          title: "CAD/CAM Integration & Quality Control",
          data: [
            "Seamless workflow from CAD model to G-code",
            "CAM programming for tool optimization and collision checks",
            "In process and post process dimensional inspection",
            "First article and repeat run validation",
          ],
        },
      ]}
      deliverables={[
        "Machined wooden and metal components",
        "G-code and toolpath simulation reports",
        "First article inspection (FAI) reports",
        "Surface finish and dimensional validation results",
      ]}
      deliverableImages={[
        "/assets/CncMachining-2.png",
        "/assets/CncMachining-4.png",
      ]}
      whyChooseUs={[
        "Dual material CNC expertise (wood + metal)",
        "Tight tolerances with superior surface finish",
        "CAD/CAM integrated quality assurance",
        "Adaptable to one off, prototype or batch runs",
        "Experienced operators and modern CNC infrastructure",
      ]}
      whyChooseUsImages={[
        "/assets/CncMachining-1.png",
        "/assets/CncMachining-3.png",
      ]}
    />
  );
}
