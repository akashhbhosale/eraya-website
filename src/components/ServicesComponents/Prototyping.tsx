import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function Prototyping() {
  return (
    <ServiceLayout
      title="Prototyping"
      quote="Build to learn, test to improve ERAYA prototypes ideas into experiences you can touch, test and refine."
      intro="At ERAYA, prototyping is an essential part of our innovation process. We transform concepts and CAD designs into functional, tangible models that help clients evaluate form, fit, function and performance.Whether you're developing hardware, systems, or user interfaces, our prototyping services shorten your iteration cycles and accelerate product readiness."
      backgroundImage="/assets/prototyping-bg.png"
      sections={[
        {
          title: "Rapid Physical Prototyping",
          data: [
            "3D printing (FDM, SLA, SLS)",
            "CNC machining and laser cutting",
            "Sheet metal and assembly mockups",
            "Basic electronic enclosures and fixtures",
          ],
        },
        {
          title: "Functional & Engineering Prototypes",
          data: [
            "Performance testing models",
            "Working prototypes with moving parts",
            "Sensor integrated testing rigs",
            "Thermal and mechanical validation setups",
          ],
        },
        {
          title: "Visual & UI/UX Prototypes",
          data: [
            "Aesthetic mockups and industrial models",
            "UI click through and screen flows",
            "Human factor evaluation samples",
            "Low/high fidelity experience walkthroughs",
          ],
        },
      ]}
      deliverables={[
        "Functional physical prototypes",
        "Test ready assemblies and fit models",
        "User interaction mockups",
        "Technical feedback and iteration reports",
      ]}
      deliverableImages={[
        "/assets/prototyping-2.png",
        "/assets/prototyping-4.png",
      ]}
      whyChooseUs={[
        "Fast turnaround and precision output",
        "Cross functional prototyping expertise",
        "In house tools and collaborative design",
        "Iterative cycles tailored to feedback",
        "Scalable to low volume or pilot production",
      ]}
      whyChooseUsImages={[
        "/assets/prototyping-5.png",
        "/assets/prototyping-7.png",
      ]}
    />
  );
}
