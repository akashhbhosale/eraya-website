import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function CFD() {
  return (
    <ServiceLayout
      title="Computational Fluid Dynamics (CFD)"
      quote="Flow visualization reveals the unseen ERAYA empowers design with fluid intelligence."
      intro="At ERAYA, our Computational Fluid Dynamics (CFD) Division simulates the behavior of gases and liquids interacting with surfaces, helping you design more efficient, safe and optimized systems. We specialize in simulating airflow, heat transfer, pressure distribution and turbulence across industries like aerospace, HVAC, marine, automotive and process engineering."
      backgroundImage="/assets/CFD-bg.png" // ✅ Background image specific to CFD
      sections={[
        {
          title: "Flow & Heat Transfer Analysis",
          data: [
            "Internal and external flow simulations",
            "Pressure drop and velocity fields",
            "Natural and forced convection studies",
            "Cooling, ventilation and thermal management",
          ],
        },
        {
          title: "Specialized Simulations",
          data: [
            "Turbulence modeling (RANS, LES)",
            "Combustion and multiphase flow",
            "Aerodynamic drag and lift prediction",
            "HVAC duct optimization and performance",
            "Autodesk Moldflow",
          ],
        },
        {
          title: "Software Proficiency",
          data: [
            "ANSYS Fluent / CFX",
            "SimScale CFD",
            "OpenFOAM",
            "SolidWorks Flow Simulation",
            "Autodesk CFD",
          ],
        },
      ]}
      deliverables={[
        "High resolution contour plots and animations",
        "Velocity, pressure and temperature distributions",
        "Simulation summary reports",
        "Design improvement suggestions",
      ]}
      deliverableImages={["/assets/cfd-1.png", "/assets/cfd-5.png"]}
      whyChooseUs={[
        "Industry relevant simulation experience",
        "Cost efficient virtual prototyping",
        "Visual analysis of fluid structure interaction",
        "Enhanced product design performance",
        "Skilled CFD engineers with domain expertise",
      ]}
      whyChooseUsImages={["/assets/cfd-3.png", "/assets/cfd-4.png"]}
    />
  );
}
