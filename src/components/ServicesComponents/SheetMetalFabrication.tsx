import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function SheetMetalFabrication() {
  return (
    <ServiceLayout
      title="Sheet Metal Fabrication"
      quote="Precision in every bend — ERAYA engineers functional strength through expert sheet metal craftsmanship."
      intro="At ERAYA, our Sheet Metal Fabrication division delivers high-quality formed, cut, and welded components with tight tolerances and durable finishes. From enclosures and brackets to structural frames and custom panels, we support industries like automotive, aerospace, electronics, and infrastructure with end-to-end sheet metal solutions."
      backgroundImage="/assets/SheetMetalFabrication-bg.png"
      sections={[
        {
          title: "Cutting, Bending & Forming",
          data: [
            "Laser, plasma, and waterjet cutting up to 25mm thickness",
            "Brake press bending for complex geometries",
            "Roll forming and deep draw operations",
            "Automated turret punching",
          ],
        },
        {
          title: "Welding & Assembly",
          data: [
            "MIG, TIG, and spot welding",
            "Welding to BS EN 15085",
            "Weld fixture design and batch fabrication",
            "Hardware insertion, clinching, and fastening",
            "Custom assembly of subcomponents and housings",
          ],
        },
        {
          title: "Surface Finish & Quality Control",
          data: [
            "Powder coating, plating, and anodizing",
            "Deburring, polishing, and bead blasting",
            "Dimensional and flatness inspection",
            "Material traceability and batch reporting",
          ],
        },
      ]}
      deliverables={[
        "Precision-cut and formed metal parts",
        "Fully assembled and finished sheet metal products",
        "Fabrication drawings and quality reports",
        "Material certificates and compliance documentation",
      ]}
      deliverableImages={[
        "/assets/SheetMetalFabrication-2.png",
        "/assets/SheetMetalFabrication-3.png",
      ]}
      whyChooseUs={[
        "Comprehensive in-house fabrication capabilities",
        "Skilled welders and certified technicians",
        "ISO-standard quality assurance",
        "Prototyping to batch production support",
        "Fast turnaround with design integration",
      ]}
      whyChooseUsImages={[
        "/assets/SheetMetalFabrication-1.png",
        "/assets/SheetMetalFabrication-4.png",
      ]}
    />
  );
}
