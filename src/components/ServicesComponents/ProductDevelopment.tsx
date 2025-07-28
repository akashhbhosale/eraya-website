import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function ProductDevelopment() {
  return (
    <ServiceLayout
      title="Product Development"
      quote="Every great product starts with an idea — ERAYA turns that idea into reality through engineering excellence."
      intro="At ERAYA, our Product Development Division brings concepts to life through an integrated approach combining design, simulation, prototyping, and manufacturing. We assist startups, innovators, and industries with end-to-end development of functional, market-ready products."
      backgroundImage="/assets/pd-bg.png"
      sections={[
        {
          title: "End-to-End Concept Development",
          data: [
            "Ideation and feasibility analysis",
            "Sketching and 3D concept modeling",
            "User-centric design approach",
            "Design validation through prototyping",
          ],
        },
        {
          title: "Engineering & Prototyping",
          data: [
            "CAD modeling and industrial design",
            "FEA/CFD simulations for design validation",
            "3D printing, CNC machining & functional prototyping",
            "Design iterations based on performance feedback",
          ],
        },
        {
          title: "Software Proficiency",
          data: [
            "SolidWorks / CATIA / NX",
            "Autodesk Fusion 360",
            "ANSYS / LSDYNA / Altair/ SimScale",
            "KeyShot (for rendering & visualization)",
          ],
        },
      ]}
      deliverables={[
        "Complete product cycle support",
        "Final CAD and engineering drawing packages",
        "Functional and aesthetic prototypes",
        "Design validation reports and test results",
        "Manufacturing-ready documentation",
      ]}
      deliverableImages={["/assets/pd-1.png", "/assets/pd-2.png"]}
      whyChooseUs={[
        "Multidisciplinary product development expertise",
        "Agile design methodology and rapid iteration",
        "Strong focus on usability and performance",
        "Full lifecycle support: from idea to launch",
        "Trusted by startups and enterprise clients alike",
      ]}
      whyChooseUsImages={["/assets/pd-3.png", "/assets/pd-4.png"]}
    />
  );
}
