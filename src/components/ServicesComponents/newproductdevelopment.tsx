import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function NPD() {
  return (
    <ServiceLayout
      title="New Product Development (NPD)"
      quote="Innovation is only as strong as its execution — ERAYA transforms bold ideas into real-world solutions."
      intro="ERAYA’s New Product Development (NPD) team collaborates with innovators, startups, and enterprises to bring breakthrough products from concept to market. We support every stage of development — from ideation and feasibility to design, prototyping, and production — ensuring speed, quality, and strategic alignment."
      backgroundImage="/assets/npd-bg.png"
      sections={[
        {
          title: "Ideation & Innovation Strategy",
          data: [
            "Market and user research",
            "Problem-solution validation",
            "Product definition and benchmarking",
            "Innovation workshops and concept scoring",
          ],
        },
        {
          title: "Design, Simulation & Testing",
          data: [
            "Detailed CAD and industrial design",
            "Prototyping (3D printing, machining, soft tooling)",
            "FEA/CFD simulations for design validation",
            "Usability and functionality testing",
          ],
        },
        {
          title: "Business-Aligned Engineering",
          data: [
            "Product-market fit analysis",
            "Cost modeling and design for manufacturing",
            "Compliance and safety checks",
            "Preparation for scaling and commercialization",
          ],
        },
      ]}
      deliverables={[
        "End-to-end product development roadmap",
        "Validated prototypes and test reports",
        "Manufacturing-ready design documentation",
        "Strategic launch and production support pack",
      ]}
      deliverableImages={["/assets/npd-2.png", "/assets/npd-3.png"]}
      whyChooseUs={[
        "Cross-functional innovation teams",
        "Proven track record in fast-paced NPD cycles",
        "User-driven design with engineering precision",
        "Seamless handoff from R&D to manufacturing",
        "Flexible engagement for MVPs or full-scale launches",
      ]}
      whyChooseUsImages={["/assets/npd-5.png", "/assets/npd-6.png"]}
    />
  );
}
