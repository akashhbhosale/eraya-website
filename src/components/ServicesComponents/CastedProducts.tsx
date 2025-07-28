import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function CastedProducts() {
  return (
    <ServiceLayout
      title="Casted Products"
      quote="From molten metal to precision forms — ERAYA delivers quality castings built for strength and performance."
      intro="At ERAYA, we specialize in precision casting solutions across ferrous and non-ferrous alloys. Whether for industrial machinery, automotive components, or architectural fittings, our casting process ensures durability, dimensional accuracy, and performance under pressure. We offer end-to-end services including tooling, pattern design, casting, post-processing, and finishing."
      backgroundImage="/assets/CastedProducts-bg.png"
      sections={[
        {
          title: "Casting Processes & Capabilities",
          data: [
            "Sand casting, investment casting, and gravity die casting",
            "Aluminum and Steel Castings",
            "Tooling and pattern development",
            "Low-volume prototyping to high-volume production",
          ],
        },
        {
          title: "Post-Processing & Finishing",
          data: [
            "Heat treatment and stress relieving",
            "Machining and surface grinding",
            "Shot blasting, polishing, painting",
            "Dimensional inspection and non-destructive testing (NDT)",
          ],
        },
        {
          title: "Industry Applications",
          data: [
            "Automotive – housings, brackets, manifolds",
            "Industrial machinery – gears, base plates, arms",
            "Architecture – ornate and custom decorative castings",
            "Defense, railways, and agriculture sectors",
          ],
        },
      ]}
      deliverables={[
        "Custom-cast components with dimensional accuracy",
        "Material certificates and test reports",
        "Machined and surface-finished parts",
        "Casting simulation and pattern design support",
      ]}
      deliverableImages={[
        "/assets/CastedProducts-2.png",
        "/assets/CastedProducts-3.png",
      ]}
      whyChooseUs={[
        "Expertise in multiple casting methods",
        "Design-to-delivery solution with machining",
        "High-quality, defect-minimized castings",
        "Flexible support for prototypes & production",
        "Adherence to ASTM and DIN standards",
      ]}
      whyChooseUsImages={[
        "/assets/CastedProducts-1.png",
        "/assets/CastedProducts-4.png",
      ]}
    />
  );
}
