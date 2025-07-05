import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function InjectionMolded() {
  return (
    <ServiceLayout
      title="Injection Molded Components"
      quote="Precision in every shot — ERAYA’s injection molding delivers repeatability, strength, and product perfection."
      intro="ERAYA offers end-to-end injection molding services for both prototyping and mass production. With expertise in material selection, mold design, and process optimization, we create high-precision plastic components that meet performance, appearance, and regulatory demands across diverse industries."
      backgroundImage="/assets/InjectionMoulded-bg.png"
      sections={[
        {
          title: "Capabilities & Materials",
          data: [
            "Thermoplastics, thermosets, and bioplastics",
            "Custom color and finish options",
            "Multi-cavity and family molds",
            "Insert molding and overmolding capabilities",
          ],
        },
        {
          title: "Tooling & Mold Engineering",
          data: [
            "Steel & aluminum mold manufacturing",
            "DFM (Design for Manufacturing) support",
            "Rapid tooling for prototyping",
            "Tool life optimization and maintenance",
          ],
        },
        {
          title: "Application Areas",
          data: [
            "Consumer products and packaging",
            "Medical devices and enclosures",
            "Automotive clips, housings, and interior parts",
            "Industrial and electronics applications",
          ],
        },
      ]}
      deliverables={[
        "Molded components to spec with surface finish",
        "Mold flow and cooling analysis reports",
        "Tooling drawings and maintenance documentation",
        "Material certifications and RoHS compliance",
      ]}
      deliverableImages={[
        "/assets/InjectionMoulded-2.png",
        "/assets/InjectionMoulded-3.png",
      ]}
      whyChooseUs={[
        "In-house mold design and production support",
        "Quick-turn prototyping to scalable volumes",
        "High repeatability and tight tolerances",
        "Wide material and texture options",
        "Support from concept to post-processing",
      ]}
      whyChooseUsImages={[
        "/assets/InjectionMoulded-1.png",
        "/assets/InjectionMoulded-4.png",
      ]}
    />
  );
}
