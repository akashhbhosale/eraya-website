const CAD = () => {
  return (
    <div className="min-h-screen bg-[url('/assets/cad-bg.png')] bg-cover bg-center bg-no-repeat bg-black/70 text-white py-16 px-6 flex justify-center">
      {/* ✅ Glass-like background wrapper */}
      <div className="max-w-5xl w-full bg-black/70 backdrop-blur-sm p-10 rounded-lg space-y-6">
      <div className="max-w-5xl w-full space-y-6">

        <h1 className="text-4xl font-bold text-cyan-400 text-center">
          Computer Aided Design (CAD)
        </h1>

        <p className="text-lg text-center text-gray-400 italic mt-5">
          "Precision in design is the foundation of innovation — and we build it right from the blueprint."
        </p>

        <p className="text-lg leading-relaxed text-gray-200">
          At <span className="font-semibold text-white">ERAYA</span>, we specialize in precision-driven CAD design and drafting services
          for <span className="text-cyan-300">mechanical engineering</span>, <span className="text-cyan-300">product development</span>,
          and <span className="text-cyan-300">industrial applications</span>.
          Leveraging cutting-edge software and deep industry expertise, we transform concepts into detailed,
          manufacturable designs while ensuring compliance with global standards.
        </p>

{/*Core CAD Services*/}
        <div className="mt-8">
  <h3 className="text-2xl font-semibold text-cyan-300 mb-1">
    Core CAD Services
  </h3>

  <ul className="list-disc list-inside text-gray-200 space-y-3 mt-0">
    <li>
      <span className="font-medium">3D Modeling & Simulation</span>
      <ul className="list-disc list-inside pl-5 text-gray-400 mt-1">
        <li>Parametric modeling for complex assemblies.</li>
      </ul>
    </li>

    <li>
      <span className="font-medium">2D Drafting & Technical Drawings</span>
      <ul className="list-disc list-inside pl-5 text-gray-400 mt-1">
        <li>GD&T-compliant blueprints, schematics, and shop drawings.</li>
      </ul>
    </li>

    <li>
      <span className="font-medium">Reverse Engineering</span>
      <ul className="list-disc list-inside pl-5 text-gray-400 mt-1">
        <li>3D scanning and CAD reconstruction from physical prototypes.</li>
      </ul>
    </li>
  </ul>
</div>

{/*Industries & Applications*/}
<div className="mt-12">
  <h3 className="text-2xl font-semibold text-cyan-300 mb-2">
    Industries & Applications
  </h3>

   <ul className="list-disc list-inside text-gray-200 space-y-3">
    <li>
      <span className="font-medium text-white">Automotive & Aerospace:</span> Engine components, chassis design, and aerodynamic optimization.
    </li>
    <li>
      <span className="font-medium text-white">Industrial Machinery:</span> Custom tooling, conveyor systems, and heavy equipment.
    </li>
    <li>
      <span className="font-medium text-white">Consumer Products:</span> Ergonomics-driven product design and DFM (Design for Manufacturing).
    </li>
    <li>
      <span className="font-medium text-white">Energy & HVAC:</span> Piping systems, turbine design, and sustainable energy solutions.
    </li>
  </ul>
</div>

{/* Software & Tools*/}
<div className="mt-12">
  <h3 className="text-2xl font-bold text-cyan-400 mb-4">
    Software & Tools
  </h3>

  <ul className="list-disc list-inside text-gray-200 space-y-3">
    <li>
      <span className="font-medium text-white">Primary Tools:</span> SolidWorks, AutoCAD, CATIA, Siemens NX, Creo Parametric, Inventor.
    </li>
    <li>
      <span className="font-medium text-white">Specialized Add-ons:</span> ANSYS for simulation, Mastercam for CAM, or KeyShot for rendering.
    </li>
  </ul>
</div>

<div className="mt-12">
  <h3 className="text-2xl font-semibold text-cyan-300 mb-2">
    Unique Selling Points (USPs)
  </h3>

  <ul className="list-disc list-inside text-gray-200 space-y-3">
    <li>
      <span className="font-medium text-white">Fast Turnaround:</span> “48-hour drafting services for urgent revisions.”
    </li>
    <li>
      <span className="font-medium text-white">Collaborative Process:</span> “Real-time updates and client feedback integration.”
    </li>
    <li>
      <span className="font-medium text-white">Cost Savings:</span> “Reduce prototyping costs by 30% with error-free CAD models.”
    </li>
    <li>
      <span className="font-medium text-white">Certifications:</span> “ISO 9001-certified workflows for quality assurance.”
    </li>
  </ul>
</div>
</div>
     
      </div>
    </div>
  );
};

export default CAD;
