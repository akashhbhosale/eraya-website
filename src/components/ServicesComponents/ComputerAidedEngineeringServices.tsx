import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function computerAidedEngineeringServices() {
  return (
    <ServiceLayout
      title="Computer Aided Engineering (CAE) Services"
      quote="Simulation, precision, and innovation — ERAYA's CAE services turn engineering concepts into optimized reality."
      intro="At ERAYA, our CAE Division delivers comprehensive digital engineering solutions including CAD, CAM, FEA, CFD, and design optimization. We help transform ideas into reliable, manufacturable, and high-performing products through data-driven simulations and integrated digital workflows."
      backgroundImage="/assets/ComputerAidedEngServices-bg.png"
      sections={[
        {
          title: "Design & Manufacturing Preparation (CAD + CAM)",
          data: [
            "3D and 2D modeling using AutoCAD, SolidWorks, CATIA, Creo, and NX",
            "Assembly drawings, GD&T, layout, and BOM documentation",
            "CNC programming (3-, 4-, 5-axis) and toolpath optimization",
            "CAM tools: Mastercam, SolidCAM, Fusion 360, NX CAM",
          ],
        },
        {
          title: "Structural & Fluid Simulation (FEA + CFD)",
          data: [
            "Static, dynamic, thermal, and fatigue analysis with ANSYS, Abaqus, HyperMesh",
            "Crash, impact, and vibration simulations",
            "CFD simulations for airflow, heat transfer, and HVAC using Fluent, OpenFOAM",
            "Multiphysics correlation with test data for real-world validation",
          ],
        },
        {
          title: "Design Optimization & Validation",
          data: [
            "Topology, shape, and weight optimization strategies",
            "Simulation-led iterative design refinements",
            "FEA/CFD-based performance comparisons",
            "Support for certification and digital twin validation",
          ],
        },
      ]}
      deliverables={[
        "Optimized 3D models, 2D drawings, and NC code files",
        "FEA & CFD simulation reports with dashboards",
        "Toolpath plans and setup sheets",
        "Design validation documentation and improvement recommendations",
      ]}
      deliverableImages={[
        "/assets/ComputerAidedEngServices-1.png",
        "/assets/ComputerAidedEngServices-2.png",
      ]}
      whyChooseUs={[
        "All major CAE services under one expert team",
        "Certified tools and cross-functional engineering support",
        "Digitally integrated CAD–CAM–Simulation workflows",
        "Trusted across automotive, aerospace, and manufacturing",
        "Fast iterations, cost savings, and reduced physical prototyping",
      ]}
      whyChooseUsImages={[
        "/assets/ComputerAidedEngServices-3.png",
        "/assets/ComputerAidedEngServices-4.png",
      ]}
    />
  );
}
