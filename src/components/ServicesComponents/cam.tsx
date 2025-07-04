import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function CAM() {
  return (
    <ServiceLayout
      title="Computer Aided Manufacturing (CAM)"
      quote="Smart programming turns precision into performance — ERAYA makes it real through advanced CAM integration."
      intro="At ERAYA, our Computer-Aided Manufacturing (CAM) Division transforms digital designs into precise, machine-ready outputs. We specialize in CNC programming, toolpath optimization, and machining simulation to deliver intelligent, efficient manufacturing outcomes."
      backgroundImage="/assets/cam-bg.png" // ✅ Add your CAM-specific background image here
      sections={[
        {
          title: "CNC Programming & Simulation",
          data: [
            "2.5D, 3-axis, 5-axis programming",
            "Toolpath strategy & optimization",
            "Post-processor customization",
            "Tool wear analysis",
          ],
        },
        {
          title: "CAD-CAM Integration",
          data: [
            "Direct import of CAD geometry",
            "Simulation & verification",
            "Process planning and sequencing",
          ],
        },
        {
          title: "Software Proficiency",
          data: [
            "Mastercam, SolidCAM",
            "Fusion 360 Manufacturing",
            "PowerMill, Siemens NX CAM",
            "CATIA NC Programming",
          ],
        },
      ]}
      deliverables={[
        "G-code for CNC machines",
        "Optimized toolpaths with reports",
        "3D machining simulations",
        "Setup sheets & documentation",
      ]}
      deliverableImages={["/assets/cam-3.jpg", "/assets/cam-5.jpg"]}
      whyChooseUs={[
        "Expert CNC and CAM Engineers",
        "Error-free simulation & validation",
        "Faster turnaround times",
        "Fully integrated with CAD pipelines",
        "Customized tooling & workflows",
      ]}
      whyChooseUsImages={["/assets/cam-4.jpg", "/assets/cam-1.jpg"]}
    />
  );
}
