import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function CrashTesting() {
  return (
    <ServiceLayout
      title="Crash Testing"
      quote="Safety is engineered, not assumed ERAYA ensures impact resilience through advanced crash testing simulations, analysis and physical testing."
      intro="At ERAYA, our Crash Testing Division specializes in simulating and analyzing the structural response of components and systems under impact conditions. From automotive structures to aerospace parts and protective gear, we help clients design for safety, compliance and performance by uncovering how products behave under real world crash forces. The team then undertakes and supports product physical crash testing by collaborating with certified test labs."
      backgroundImage="/assets/crashtesting-7.png"
      sections={[
        {
          title: "Automotive Crash Simulations and Testing",
          data: [
            "Frontal, side, rear impact simulations and testing's",
            "Occupant safety and airbag deployment modeling and testing",
            "Injury assessment through FEA and physical testing",
            "Pedestrian protection scenarios",
            "Euro NCAP, FMVSS and GTR standard compliance support",
          ],
        },
        {
          title: "Structural Impact Testing",
          data: [
            "Drop tests and collision impact studies and testing",
            "High speed deformation modeling and real life testing",
            "Energy absorption and crumple zone analysis",
            "Lightweight structure integrity validation",
            "Validation and comparison study from physical testing to FEA",
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
        "Full physical crash or FEA simulation reports",
        "Time history data and comparative analysis",
        "Animation and visual output of crash events",
        "Safety improvement roadmap",
        "Physical Crash testing onsite support, including test rig design & production",
      ]}
      deliverableImages={[
        "/assets/crashtesting-1.png",
        "/assets/crashtesting-2.png",
      ]}
      whyChooseUs={[
        "Expertise in crash simulation, safety engineering and physical testing",
        "Access to industry standard software, dummies and test labs",
        "Accurate prediction of material and human response",
        "Proven track record in crash compliance validation",
        "Integration with product design and optimization workflows",
        "Collaboration with certified test labs to undertake crash tests",
      ]}
      whyChooseUsImages={[
        "/assets/crashtesting-5.png",
        "/assets/crashtesting-6.png",
      ]}
    />
  );
}
