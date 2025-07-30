import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function AdhesionTesting() {
  return (
    <ServiceLayout
      title="Adhesion Testing"
      quote="Bond strength defines reliability ERAYA ensures surfaces stick, stay, and perform under pressure."
      intro="At ERAYA, our Adhesion Testing Division validates the bonding strength of coatings, films, adhesives and surface treatments across a wide range of industries. From aerospace composites to automotive coatings and biomedical adhesives, we evaluate the durability and performance of bonds under various loading and environmental conditions."
      backgroundImage="/assets/AdhesionTesing-bg.png"
      sections={[
        {
          title: "Mechanical Adhesion Testing",
          data: [
            "Pull off (tensile) adhesion testing",
            "Peel and shear strength evaluation",
            "Scratch resistance and delamination studies",
            "Surface roughness and pretreatment analysis",
          ],
        },
        {
          title: "Environmental Conditioning",
          data: [
            "Thermal cycling and humidity exposure",
            "Salt spray and corrosion resistance validation",
            "Aging simulations for longterm adhesion behavior",
          ],
        },
        {
          title: "Material & Interface Characterization",
          data: [
            "SEM imaging of failure zones",
            "Cross sectional bond line analysis",
            "Failure mode categorization (cohesive vs adhesive)",
            "Quantitative strength data and failure thresholds",
          ],
        },
      ]}
      deliverables={[
        "Adhesion strength reports with load-displacement curves",
        "Images of bond interface and fracture analysis",
        "Surface preparation and treatment recommendations",
        "Pass/fail criteria based on standards (ASTM D4541, ISO 4624, etc.)",
        "Bonding procedures for industrial applications",
      ]}
      deliverableImages={[
        "/assets/AdhesionTesing-1.png",
        "/assets/AdhesionTesing-3.png",
      ]}
      whyChooseUs={[
        "Comprehensive bonding evaluation methods",
        "Simulation of real world stress and environment",
        "High precision measurement and analysis tools",
        "Applicable across coatings, adhesives and composites",
        "Expert recommendations for better surface bonding",
        "Detailed support in bonding document preparation and team training",
      ]}
      whyChooseUsImages={[
        "/assets/AdhesionTesing-4.png",
        "/assets/AdhesionTesing-2.png",
      ]}
    />
  );
}
