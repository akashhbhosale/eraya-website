import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function CadEngineers() {
  return (
    <ServiceLayout
      title="CAD Engineers"
      quote="Precision in design starts with precision in talent — ERAYA’s CAD engineers bring your ideas to life."
      intro="At ERAYA, our CAD Engineers are experts in turning concepts into detailed digital blueprints. Skilled in leading CAD software and industry standards, they provide the backbone for product development, architecture, and manufacturing. Whether embedded in your team or managing full-cycle design, our CAD experts deliver speed, accuracy, and insight."
      backgroundImage="/assets/CadEngineers-bg.png"
      sections={[
        {
          title: "Core Competencies",
          data: [
            "3D modeling and 2D drafting",
            "Assembly and exploded views",
            "GD&T and tolerance analysis",
            "Layout, elevation, and section drawings",
          ],
        },
        {
          title: "Software Proficiency",
          data: [
            "AutoCAD, SolidWorks, CATIA",
            "Autodesk Inventor, Creo",
            "Revit MEP and BIM tools",
            "Fusion 360 and Siemens NX",
          ],
        },
        {
          title: "Industry Applications",
          data: [
            "Mechanical and automotive design",
            "Architecture and construction drafting",
            "Consumer product design",
            "Manufacturing documentation",
          ],
        },
      ]}
      deliverables={[
        "Fully annotated CAD drawings",
        "Industry-compliant design documentation",
        "Revisions, optimizations, and version control",
        "Cloud-shared native and exportable file formats",
      ]}
      deliverableImages={[
        "/assets/CadEngineers-1.png",
        "/assets/CadEngineers-2.png",
      ]}
      whyChooseUs={[
        "Experienced in multi-platform CAD tools",
        "Quick onboarding and adaptation to your standards",
        "Precision-focused with manufacturing alignment",
        "Flexible engagement from hourly to full-time",
        "Backed by ERAYA’s design and review support",
      ]}
      whyChooseUsImages={[
        "/assets/CadEngineers-3.png",
        "/assets/CadEngineers-4.png",
      ]}
    />
  );
}
