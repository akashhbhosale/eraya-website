import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function CAD() {
  return (
    <ServiceLayout
      title="Computer Aided Design (CAD)"
      quote="Precision in design is the foundation of innovation and we build it right from the blueprint."
      intro="At ERAYA, our Computer-Aided Design (CAD) Division is at the forefront of digital design. We specialize in precision engineering and delivering detailed, accurate and efficient CAD solutions that transform ideas into tangible results serving industries like architecture, manufacturing, engineering, rail, aerospace, automobile, construction, and product design."
      backgroundImage="/assets/cad-bg-1.png" // ✅ Custom background for CAD page
      sections={[
        {
          title: "Product Design & Prototyping",
          data: [
            "Concept-to-CAD modeling",
            "Reverse engineering",
            "FEA & simulation",
            "SolidWorks & Fusion 360",
            "STL files for 3D printing",
          ],
        },
        {
          title: "Electrical & MEP Drafting",
          data: [
            "Schematics & wiring diagrams",
            "MEP coordination",
            "Panel layouts & circuit planning",
          ],
        },
        {
          title: "Software Proficiency",
          data: [
            "AutoCAD / AutoCAD MEP",
            "SolidWorks",
            "Autodesk Revit",
            "CATIA / NX",
          ],
        },
      ]}
      deliverables={[
        "DWG, DXF, STL, STEP, and PDF file formats",
        "3D models, exploded views, and assembly instructions",
        "Complete technical drawings with GD&T",
        "Cloud-based file sharing & collaboration",
      ]}
      deliverableImages={["/assets/cad-5.png", "/assets/cad-6.png"]}
      whyChooseUs={[
        "High Accuracy & Industry Standards",
        "Fast Turnaround Times",
        "Experienced CAD Designers & Engineers",
        "Scalable for Projects of All Sizes",
        "Integration with Manufacturing & Construction",
      ]}
      whyChooseUsImages={["/assets/cad-7.png", "/assets/cad-8.png"]}
    />
  );
}
