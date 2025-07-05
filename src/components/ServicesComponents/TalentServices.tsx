import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function TalentServices() {
  return (
    <ServiceLayout
      title="Talent Services"
      quote="Engineering talent when and where you need it — ERAYA connects expertise to execution."
      intro="At ERAYA, our Talent Services division specializes in deploying skilled engineering professionals across CAD, CAM, FEA, testing, and structural domains. Whether augmenting your in-house team or leading independent projects, our vetted engineers bring speed, accuracy, and innovation to your workflows."
      backgroundImage="/assets/TalentServices-bg.png"
      sections={[
        {
          title: "Design & Drafting Talent",
          data: [
            "CAD Engineers proficient in SolidWorks, AutoCAD, CATIA",
            "Drafting Technicians for mechanical and MEP drawings",
            "Drafting Engineers for GD&T-compliant outputs",
          ],
        },
        {
          title: "Engineering Specialists",
          data: [
            "CAM Engineers for CNC programming and tooling",
            "FEA Engineers for stress, thermal, and modal analysis",
            "Structural Engineers for static and dynamic design validation",
          ],
        },
        {
          title: "Testing & Simulation Experts",
          data: [
            "Testing Engineers with lab and simulation experience",
            "Field test support for acoustic, vibration, and crash testing",
            "Compliance documentation and test reports",
          ],
        },
      ]}
      deliverables={[
        "Dedicated engineering resources (remote/on-site)",
        "Quick deployment and flexible contracts",
        "Skill-matched professionals with tool-specific expertise",
        "Weekly reports, timesheets, and performance tracking",
      ]}
      deliverableImages={[
        "/assets/TalentServices-2.png",
        "/assets/TalentServices-3.png",
      ]}
      whyChooseUs={[
        "Access to pre-vetted engineering professionals",
        "Flexible hiring: contract, full-time, or project-based",
        "Experts across CAD, CAM, FEA, and Testing domains",
        "Project-ready talent trained on industry software",
        "Proven reliability and performance feedback loop",
      ]}
      whyChooseUsImages={[
        "/assets/TalentServices-1.png",
        "/assets/TalentServices-4.png",
      ]}
    />
  );
}
