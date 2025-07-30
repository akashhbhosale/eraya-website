import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function DisruptiveInnovation() {
  return (
    <ServiceLayout
      title="Disruptive Innovation"
      quote="True innovation breaks boundaries ERAYA drives the future by building what has never existed before."
      intro="At ERAYA, we empower visionaries to transform industries through Disruptive Innovation. By combining deep technical expertise with bold creative thinking, we help businesses reimagine possibilities, explore breakthrough technologies and create next generation solutions that leap ahead of traditional paradigms."
      backgroundImage="/assets/disinv-bg.png"
      sections={[
        {
          title: "Strategic Innovation Acceleration",
          data: [
            "Emerging tech scouting and feasibility",
            "Business model reinvention support",
            "Disruption mapping and strategic foresight",
            "MVP design for high risk, high impact ideas",
          ],
        },
        {
          title: "Deep Tech R&D & Experimentation",
          data: [
            "Rapid prototyping and fail fast testing",
            "Concept validation through simulation",
            "Experimental hardware/software development",
            "Cross domain innovation blending (AI, IoT, Biomech, etc.)",
          ],
        },
        {
          title: "Creative Ideation & Concepting",
          data: [
            "Design sprint facilitation",
            "Ideation workshops and mind mapping",
            "Futuristic UI/UX exploration",
            "Innovation storytelling and pitching assets",
          ],
        },
      ]}
      deliverables={[
        "Validated disruptive product concept",
        "Prototype or digital twin of innovation",
        "Stakeholder pitch deck and business rationale",
        "Risk/impact map and innovation execution roadmap",
      ]}
      deliverableImages={["/assets/disinv-1.png", "/assets/disinv-3.png"]}
      whyChooseUs={[
        "Bold thinkers with real engineering experience",
        "Proven ability to convert ideas into breakthroughs",
        "Passion for tech + design + market alignment",
        "Innovation lab culture blended with delivery discipline",
        "Confidential and flexible partnership models",
      ]}
      whyChooseUsImages={["/assets/disinv-5.png", "/assets/disinv-7.png"]}
    />
  );
}
