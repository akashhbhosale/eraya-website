import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function LifeCycleTesting() {
  return (
    <ServiceLayout
      title="Life Cycle Testing"
      quote="Durability defines reliability ERAYA puts your product through time so it stands strong in the real world."
      intro="At ERAYA, our Life Cycle Testing Division validates the longevity, durability and failure thresholds of components and systems under repetitive use and environmental conditions. From mechanical endurance to environmental fatigue, our tests replicate real world usage patterns to ensure performance, reliability and compliance over a product's operational lifespan."
      backgroundImage="/assets/LifeCycleTesing-bg.png"
      sections={[
        {
          title: "Mechanical Fatigue & Endurance",
          data: [
            "Repeated stress/load application testing",
            "Wear and tear simulation under motion",
            "Joint, seal and hinge fatigue evaluation",
            "High cycle and low cycle fatigue programs",
          ],
        },
        {
          title: "Environmental Life Cycle Simulation",
          data: [
            "Thermal cycling and humidity testing",
            "Salt spray and corrosion resistance",
            "UV and weather aging tests",
            "Combined environmental stress profiles",
          ],
        },
        {
          title: "Test Equipment & Monitoring",
          data: [
            "Servo hydraulic and electrodynamic machines",
            "Accelerated life test rigs",
            "Sensor based failure detection",
            "Real time monitoring and test automation",
          ],
        },
      ]}
      deliverables={[
        "Life cycle performance reports",
        "Fatigue failure graphs and data logs",
        "Maintenance interval recommendations",
        "Design refinement and material guidance",
      ]}
      deliverableImages={[
        "/assets/LifeCycleTesing-1.png",
        "/assets/LifeCycleTesing-2.png",
      ]}
      whyChooseUs={[
        "Precision controlled testing environment",
        "Custom life cycle protocols per product use case",
        "Deep insights into fatigue and degradation trends",
        "Support for regulatory and industry standards",
        "Proven experience across materials and industries",
      ]}
      whyChooseUsImages={[
        "/assets/LifeCycleTesing-3.png",
        "/assets/LifeCycleTesing-4.png",
      ]}
    />
  );
}
