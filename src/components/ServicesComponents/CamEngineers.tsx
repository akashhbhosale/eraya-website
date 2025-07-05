import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function CamEngineers() {
  return (
    <ServiceLayout
      title="CAM Engineers"
      quote="Precision is programmed — ERAYA's CAM Engineers ensure your designs are production-ready with optimized machining strategies."
      intro="At ERAYA, our CAM (Computer-Aided Manufacturing) Engineers specialize in transforming complex CAD models into efficient and accurate machine instructions. With expertise across CNC programming, tooling paths, and G-code optimization, our engineers deliver seamless integration between design and production, minimizing time and material waste."
      backgroundImage="/assets/CamEngineers-bg.png"
      sections={[
        {
          title: "CNC Programming Expertise",
          data: [
            "3-axis, 4-axis, and 5-axis CNC programming",
            "Toolpath optimization and cycle time reduction",
            "Post-processor development for multiple machines",
            "Simulation of tool paths for collision avoidance",
          ],
        },
        {
          title: "Manufacturing Integration",
          data: [
            "Machinability and process feasibility checks",
            "Fixture design and workholding planning",
            "Material selection consultation",
            "CAM data linked to MRP and PLM systems",
          ],
        },
        {
          title: "Software Proficiency",
          data: [
            "Mastercam",
            "Fusion 360 CAM",
            "SolidCAM",
            "NX CAM",
            "HyperMILL",
          ],
        },
      ]}
      deliverables={[
        "Verified NC code and simulation files",
        "Setup sheets and tooling instructions",
        "Optimized machining strategy documentation",
        "Support for pilot production and operator training",
      ]}
      deliverableImages={[
        "/assets/CamEngineers-1.png",
        "/assets/CamEngineers-2.png",
      ]}
      whyChooseUs={[
        "Expert CAM talent with real-world shop floor experience",
        "Ability to handle complex geometries and tight tolerances",
        "Strong focus on manufacturability and efficiency",
        "Quick adaptation to new machine tools and software",
        "Close collaboration with design and production teams",
      ]}
      whyChooseUsImages={[
        "/assets/CamEngineers-3.png",
        "/assets/CamEngineers-4.png",
      ]}
    />
  );
}
