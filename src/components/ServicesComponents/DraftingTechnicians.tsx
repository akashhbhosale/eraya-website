import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function DraftingTechnicians() {
  return (
    <ServiceLayout
      title="Drafting Technicians"
      quote="Details define design — ERAYA’s Drafting Technicians ensure every line meets precision and purpose."
      intro="At ERAYA, our Drafting Technicians deliver accurate and industry-standard technical drawings that bring engineering concepts to life. They specialize in translating design intent into clear, detailed documentation used for manufacturing, construction, and fabrication. Our drafters support multiple engineering domains with CAD precision, attention to detail, and compliance with global standards."
      backgroundImage="/assets/DraftingTechnicians-bg.png"
      sections={[
        {
          title: "Core Drafting Capabilities",
          data: [
            "2D technical drawings and schematics",
            "Shop drawings, layouts, and site plans",
            "Architectural and mechanical detailing",
            "Drawing conversions and redline updates",
          ],
        },
        {
          title: "Software Proficiency",
          data: [
            "AutoCAD and AutoCAD Mechanical",
            "Revit and BIM drafting",
            "SolidWorks Drafting module",
            "MicroStation and DraftSight",
          ],
        },
        {
          title: "Supported Disciplines",
          data: [
            "Civil, Mechanical, Electrical & Structural Drafting",
            "Fabrication and workshop drawings",
            "Panel layouts and piping isometrics",
            "Permit, approval, and construction sets",
          ],
        },
      ]}
      deliverables={[
        "Dimensioned and annotated CAD drawings",
        "DXF, DWG, and PDF export formats",
        "Layered files ready for manufacturing or construction",
        "Standard-compliant documentation (ASME, ISO, etc.)",
      ]}
      deliverableImages={[
        "/assets/DraftingTechnicians-1.png",
        "/assets/DraftingTechnicians-2.png",
      ]}
      whyChooseUs={[
        "Skilled in multiple industry drafting standards",
        "Fast, accurate turnaround on redlines and revisions",
        "Integrated with engineering and design workflows",
        "Available for remote or embedded support",
        "Quality reviewed by senior ERAYA engineers",
      ]}
      whyChooseUsImages={[
        "/assets/DraftingTechnicians-3.png",
        "/assets/DraftingTechnicians-4.png",
      ]}
    />
  );
}
