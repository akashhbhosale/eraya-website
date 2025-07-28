import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function Testing() {
  return (
    <ServiceLayout
      title="Testing"
      quote="Every detail counts — ERAYA ensures your product performs flawlessly through rigorous testing and validation."
      intro="At ERAYA, our Testing Division is dedicated to validating product functionality, performance, safety, and compliance. From prototypes to production-ready models, we conduct both physical and virtual tests to identify flaws early, reduce risk, and ensure market readiness. Our testing services are critical to reducing time-to-market and increasing confidence in design decisions."
      backgroundImage="/assets/testing-bg.png"
      sections={[
        {
          title: "Mechanical & Physical Testing",
          data: [
            "Load, stress, and strain testing",
            "Impact and fatigue analysis",
            "Material hardness and durability tests",
            "Vibration and shock validation",
          ],
        },
        {
          title: "Environmental & Thermal Testing",
          data: [
            "Thermal cycling and heat resistance",
            "Humidity, corrosion, and salt spray",
            "UV exposure and weatherproof testing",
            "IP rating (dust & water ingress) evaluation",
          ],
        },
        {
          title: "Electrical & Functional Testing",
          data: [
            "Continuity and insulation tests",
            "Functional behavior of electronic systems",
            "Sensor accuracy and response time validation",
            "EMI/EMC pre-compliance testing",
          ],
        },
        {
          title: "Simulation-Driven Validation",
          data: [
            "Virtual testing using FEA and CFD tools",
            "Fatigue life prediction",
            "Failure mode & effect analysis (FMEA)",
            "Digital twin-based performance modeling",
          ],
        },
      ]}
      deliverables={[
        "Comprehensive test reports",
        "Pass/fail validation documentation",
        "Failure root-cause analysis summaries",
        "Recommendations for design improvements",
      ]}
      deliverableImages={["/assets/testing-1.png", "/assets/testing-2.png"]}
      whyChooseUs={[
        "Extensive in-house and virtual testing capabilities",
        "Customized test protocols per industry standards",
        "Collaboration with Test Labs in UK, Europe, US & Asia for extensive physical testing’s",
        "Experienced QA engineers and technicians",
        "Rapid turnaround with actionable insights",
        "Compliance-ready documentation support",
      ]}
      whyChooseUsImages={["/assets/testing-3.png", "/assets/testing-4.png"]}
    />
  );
}
