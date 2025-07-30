import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function DraftingEngineers() {
  return (
    <ServiceLayout
      title="Drafting Engineers"
      quote="Engineering clarity begins with precise drafting ERAYA’s Drafting Engineers deliver clarity from concept to construction."
      intro="At ERAYA, our Drafting Engineers provide technical expertise in transforming design ideas into well structured engineering drawings. They bridge the gap between designers and fabricators, ensuring functional, compliant and manufacturable documentation tailored to mechanical, civil and structural disciplines."
      backgroundImage="/assets/DraftingEngineers-bg.png"
      sections={[
        {
          title: "Drafting Expertise",
          data: [
            "Assembly and fabrication drawings",
            "Detailed component & part drawings",
            "Multi view, exploded and section views",
            "Welding, GD&T and tolerance specifications",
          ],
        },
        {
          title: "Software Proficiency",
          data: [
            "AutoCAD, SolidWorks, Inventor",
            "Creo Parametric & CATIA Drafting",
            "Revit (for MEP & structural drafting)",
            "Siemens NX Drafting tools",
          ],
        },
        {
          title: "Engineering Domains Served",
          data: [
            "Mechanical and product engineering",
            "Civil and structural frameworks",
            "Electrical & MEP engineering",
            "Tooling and fixture documentation",
          ],
        },
      ]}
      deliverables={[
        "Manufacturing ready 2D & 3D drawings",
        "Fully annotated engineering documentation",
        "CAD exports in DWG, DXF, STEP formats",
        "Compliant with ASME, ISO, DIN standards",
      ]}
      deliverableImages={[
        "/assets/DraftingEngineers-1.png",
        "/assets/DraftingEngineers-2.png",
      ]}
      whyChooseUs={[
        "Experienced in cross functional drafting support",
        "Advanced use of dimensioning and standards",
        "Seamless collaboration with design engineers",
        "Consistent quality checks and peer reviews",
        "Trusted by global OEMs and suppliers",
      ]}
      whyChooseUsImages={[
        "/assets/DraftingEngineers-3.png",
        "/assets/DraftingEngineers-4.png",
      ]}
    />
  );
}
