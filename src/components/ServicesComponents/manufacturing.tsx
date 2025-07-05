import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function Manufacturing() {
  return (
    <ServiceLayout
      title="Manufacturing"
      quote="From concept to creation — ERAYA delivers precision-manufactured solutions across materials and industries."
      intro="At ERAYA, our Manufacturing Division brings ideas to life through cutting-edge production technologies and material expertise. Whether you're developing a prototype or scaling for volume production, we offer custom manufacturing processes backed by international standards and multidisciplinary precision."
      backgroundImage="/assets/manufacturing-bg.png"
      sections={[
        {
          title: "Custom Manufacturing Capabilities",
          data: [
            "Tailor-made solutions for complex components",
            "Multi-material and hybrid process integration",
            "Prototype to low-volume production scalability",
          ],
        },
        {
          title: "Core Processes & Techniques",
          data: [
            "CNC machining (Wood + Metal)",
            "Sheet metal fabrication & bending",
            "Casting for metals & industrial polymers",
            "Injection molded parts (functional & aesthetic)",
          ],
        },
        {
          title: "Standards & Specialized Techniques",
          data: [
            "Specialised bonding to EN 17460 standards",
            "High-quality welding to BS EN 15085 (Rail/Industrial)",
            "Assembly-ready manufacturing integration",
            "Quality assurance and dimensional verification",
          ],
        },
      ]}
      deliverables={[
        "Manufactured components as per specification",
        "Precision-verified assemblies",
        "Conformance to EN and BS standards",
        "Documentation for compliance & traceability",
      ]}
      deliverableImages={[
        "/assets/manufacturing-1.png",
        "/assets/manufacturing-2.png",
      ]}
      whyChooseUs={[
        "Precision manufacturing with rapid turnaround",
        "Multi-material expertise: metal, plastic, wood",
        "Compliance with international standards",
        "Integrated with CAD, testing, and optimization",
        "Client-focused from prototype to production",
      ]}
      whyChooseUsImages={[
        "/assets/manufacturing-3.png",
        "/assets/manufacturing-4.png",
      ]}
    />
  );
}
