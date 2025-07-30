import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function ConceptDevelopment() {
  return (
    <ServiceLayout
      title="Concept Development"
      quote="Every innovation begins with a concept ERAYA refines raw ideas into clear, actionable blueprints."
      intro="At ERAYA, Concept Development is where creativity meets strategy. We help clients convert early stage ideas into well-defined, value-driven concepts that are ready for design, prototyping and validation. Whether you're solving a problem, launching a product or exploring new opportunities, we make sure your vision is feasible, functional and impactful."
      backgroundImage="/assets/conceptdesign-bg.png"
      sections={[
        {
          title: "Research & Discovery",
          data: [
            "Trend analysis and competitive benchmarking",
            "Stakeholder and user interviews",
            "Problem framing and opportunity mapping",
            "Technical and market feasibility studies",
          ],
        },
        {
          title: "Ideation & Visualization",
          data: [
            "Idea generation workshops and mind-mapping",
            "Low fidelity sketches and wireframes",
            "Digital concept boards and mockups",
            "Crossfunctional feedback loops",
          ],
        },
        {
          title: "Function & Feasibility Testing",
          data: [
            "Initial CAD layouts and simulations",
            "Conceptual prototyping (mockups, 3D print)",
            "Design requirement definition",
            "Iteration based on early testing feedback",
          ],
        },
      ]}
      deliverables={[
        "Defined product concept brief",
        "Early CAD models and visual assets",
        "Feasibility and design alignment summary",
        "Innovation roadmap with next step milestones",
      ]}
      deliverableImages={[
        "/assets/conceptdesign-1.png",
        "/assets/conceptdesign-2.png",
      ]}
      whyChooseUs={[
        "Structured creative to technical translation",
        "Deep design thinking and market insight",
        "Flexible engagement: from workshop to full concept",
        "Co-creation with clients at every step",
        "Experienced team of strategists, designers and engineers",
      ]}
      whyChooseUsImages={[
        "/assets/conceptdesign-3.png",
        "/assets/conceptdesign-4.png",
      ]}
    />
  );
}
