import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function CustomManufacturing() {
  return (
    <ServiceLayout
      title="Custom Manufacturing"
      quote="Precision isn’t mass-produced — ERAYA engineers every component with intent, excellence, and adaptability."
      intro="At ERAYA, our Custom Manufacturing Division is built for versatility, precision, and engineering depth. We offer tailor-made solutions for industries requiring component-level customization, prototyping, or compliance-ready fabrication across a range of materials including metals, plastics, and wood."
      backgroundImage="/assets/CustomManufacturing-bg.png"
      sections={[
        {
          title: "Precision CNC Machining",
          data: [
            "3-axis and multi-axis CNC milling for metals and wood",
            "Turning, drilling, and tapping operations with tight tolerances",
            "Surface finishing, chamfering, and threading",
            "CAD-to-part workflows for rapid iteration",
          ],
        },
        {
          title: "Fabrication, Casting & Molding",
          data: [
            "Sheet metal fabrication: cutting, bending, and forming",
            "Investment and sand casting of metal parts",
            "Plastic injection molding (prototypes & production)",
            "Machining of casted and molded components",
          ],
        },
        {
          title: "Specialized Bonding & Welding",
          data: [
            "EN 17460 compliant industrial bonding processes",
            "BS EN 15085 certified welding (Rail & Industrial)",
            "Hybrid assemblies combining metal, wood, and polymer",
            "Structural and cosmetic bonding for assemblies",
          ],
        },
      ]}
      deliverables={[
        "Custom-manufactured parts & subassemblies",
        "Process documentation and quality reports",
        "Compliance-ready fabrication as per EN/BS standards",
        "Packaged components for downstream integration",
      ]}
      deliverableImages={[
        "/assets/CustomManufacturing-2.png",
        "/assets/CustomManufacturing-3.png",
      ]}
      whyChooseUs={[
        "Tailored manufacturing built around your application",
        "Full CAD-to-production traceability",
        "Expertise in hybrid materials and small-batch runs",
        "On-time delivery with precision quality control",
        "Trusted by product developers, architects, and OEMs",
      ]}
      whyChooseUsImages={[
        "/assets/CustomManufacturing-1.png",
        "/assets/CustomManufacturing-4.png",
      ]}
    />
  );
}
