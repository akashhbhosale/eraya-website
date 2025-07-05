import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function CrashTesting() {
  return (
    <ServiceLayout
      title="Crash Testing"
      quote="Safety is engineered, not assumed — ERAYA ensures impact resilience through advanced crash testing simulations and analysis."
      intro="At ERAYA, our Crash Testing Division specializes in simulating and analyzing the structural response of components and systems under impact conditions. From automotive structures to aerospace parts and protective gear, we help clients design for safety, compliance, and performance by uncovering how products behave under real-world crash forces."
      backgroundImage="/assets/crashtesting-7.png"
      sections={[
        {
          title: "Automotive Crash Simulations",
          data: [
            "Frontal, side, rear impact simulations",
            "Occupant safety and airbag deployment modeling",
            "Pedestrian protection scenarios",
            "Euro NCAP, FMVSS, and GTR standard compliance support",
          ],
        },
        {
          title: "Structural Impact Testing",
          data: [
            "Drop tests and collision impact studies",
            "High-speed deformation modeling",
            "Energy absorption and crumple zone analysis",
            "Lightweight structure integrity validation",
          ],
        },
        {
          title: "Advanced CAE Crash Tools",
          data: [
            "LS-DYNA crash and impact simulations",
            "ANSYS Autodyn for blast/impact",
            "HyperMesh and Radioss preprocessing",
            "Human injury prediction using dummy models (HIII, THOR)",
          ],
        },
      ]}
      deliverables={[
        "Full crash simulation reports",
        "Time-history data and comparative analysis",
        "Animation and visual output of crash events",
        "Safety improvement roadmap",
      ]}
      deliverableImages={[
        "/assets/crashtesting-1.png",
        "/assets/crashtesting-2.png",
      ]}
      whyChooseUs={[
        "Expertise in crash simulation and safety engineering",
        "Access to industry-standard software and models",
        "Accurate prediction of material and human response",
        "Proven track record in crash compliance validation",
        "Integration with product design and optimization workflows",
      ]}
      whyChooseUsImages={[
        "/assets/crashtesting-5.png",
        "/assets/crashtesting-6.png",
      ]}
    />
  );
}
