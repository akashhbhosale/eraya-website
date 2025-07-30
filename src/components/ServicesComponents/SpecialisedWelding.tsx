import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function SpecialisedWelding() {
  return (
    <ServiceLayout
      title="Specialised Welding (BS EN 15085)"
      quote="Welding that meets the highest safety standards ERAYA delivers certified precision for critical applications."
      intro="ERAYA offers Specialised Welding services conforming to BS EN 15085 standards, particularly focused on safety-critical applications in railway vehicle construction and general heavy industries. Our certified welding experts ensure top-tier quality, traceability and strength in every joint."
      backgroundImage="/assets/SpecialisedWelding-bg.png"
      sections={[
        {
          title: "Welding Capabilities",
          data: [
            "MIG, TIG and arc welding for various alloys",
            "Fillet, butt and complex joint configurations",
            "Automated and semi automated welding stations",
            "Welding in accordance with WPS/PQR documentation",
            "Welding in accordance with WPS/WPQR documentation",
          ],
        },
        {
          title: "Compliance & Standards",
          data: [
            "BS EN 15085 certified procedures",
            "Weld traceability and documentation",
            "Qualified welders and inspectors",
            "NDT (Non-Destructive Testing) options: RT, UT, PT, MT",
          ],
        },
        {
          title: "Applications & Materials",
          data: [
            "Rail vehicle structures and bogies",
            "Heavy machinery frames and housings",
            "Pressure vessels and steel fabrications",
            "Stainless steel, mild steel, aluminum components",
          ],
        },
      ]}
      deliverables={[
        "Welded assemblies with BS EN 15085 compliance",
        "Welding procedure specification (WPS) documents",
        "Visual and non destructive testing reports",
        "Material traceability and inspection logs",
      ]}
      deliverableImages={[
        "/assets/SpecialisedWelding-2.png",
        "/assets/SpecialisedWelding-3.png",
      ]}
      whyChooseUs={[
        "BS EN 15085 certified welders and QA process",
        "Proven track record in rail and critical sectors",
        "Advanced equipment for precision and quality",
        "Full welding documentation and audit support",
        "Inhouse inspection and NDT capabilities",
      ]}
      whyChooseUsImages={[
        "/assets/SpecialisedWelding-1.png",
        "/assets/SpecialisedWelding-4.png",
      ]}
    />
  );
}
