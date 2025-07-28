import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function SpecialisedBonding() {
  return (
    <ServiceLayout
      title="Specialised Bonding (EN 17460)"
      quote="When welding isn’t an option — ERAYA’s advanced bonding ensures strength, reliability, and safety where it matters most."
      intro="ERAYA’s Specialised Bonding services conform to EN 17460 standards, providing industrial adhesive solutions for structural integrity, durability, and performance. We serve industries where mechanical fastening or welding is not feasible due to material constraints, aesthetics, or vibration sensitivity."
      backgroundImage="/assets/SpecialisedBonding-bg.png"
      sections={[
        {
          title: "Bonding Capabilities",
          data: [
            "Structural adhesive bonding (metal-to-metal, metal-to-composite)",
            "Hybrid bonding with mechanical reinforcements",
            "Multi-surface and dissimilar material bonding",
            "Thermally and chemically resistant bonds",
            "European Adhesive Specialist (EAS) onboard for bonding validation & production support",
          ],
        },
        {
          title: "Material Expertise",
          data: [
            "Aluminum, stainless steel, and titanium bonding",
            "Glass, polycarbonate, carbon fiber substrates",
            "Epoxy, polyurethane, and acrylic adhesives",
            "Surface preparation and treatment processes",
          ],
        },
        {
          title: "Applications & Testing",
          data: [
            "Rail, automotive, and aerospace assemblies",
            "Impact and fatigue resistant joints",
            "Peel, shear, and tensile strength testing",
            "Compliance with EN 17460 and ISO 4587",
          ],
        },
      ]}
      deliverables={[
        "Adhesively bonded assemblies or components",
        "Joint strength validation reports",
        "Adhesive type documentation and cure schedule",
        "EN 17460 compliance declaration",
      ]}
      deliverableImages={[
        "/assets/SpecialisedBonding-2.png",
        "/assets/SpecialisedBonding-3.png",
      ]}
      whyChooseUs={[
        "Certified bonding process as per EN 17460",
        "Certified European Adhesive Specialist (EAS) onboard",
        "Expertise in bonding dissimilar and complex surfaces",
        "Controlled environment for high-performance adhesion",
        "Process traceability and documentation",
        "Ideal for lightweight and safety-critical designs",
      ]}
      whyChooseUsImages={[
        "/assets/SpecialisedBonding-1.png",
        "/assets/SpecialisedBonding-4.png",
      ]}
    />
  );
}
