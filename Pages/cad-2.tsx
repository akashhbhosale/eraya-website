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
            "Precision in design is the foundation of innovation and we build it
            right from the blueprint."
          </p>
          s
          <p className="text-lg leading-relaxed text-gray-200">
            At <span className="font-semibold text-white">ERAYA</span>, our
            Computer-Aided Design (CAD) Division is at the forefront of{" "}
            <span className="text-cyan-300">precision engineering </span>and{" "}
            <span className="text-cyan-300">digital design </span> . We
            specialize in delivering{" "}
            <span className="text-cyan-300">detailed</span> ,{" "}
            <span className="text-cyan-300">accurate </span>, and{" "}
            <span className="text-cyan-300">efficient CAD solutions</span> that
            transform ideas into tangible results—serving industries like
            architecture, manufacturing, engineering, rail, aerospace,
            automobile, construction, and product design.
          </p>
          {/*Our Expertise*/}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-cyan-300 mb-1">
              Our Expertise
            </h3>

            <ul className="list-disc list-inside text-gray-200 space-y-3 mt-0">
              <p>
                <span className="font-medium">
                  🏛️ Architectural Drafting & BIM
                </span>
                <ul className="list-disc list-inside pl-5 text-gray-400 mt-1">
                  <li> 2D and 3D floor plans</li>
                  <li>Building Information Modeling (BIM) using Revit</li>
                  <li>Site planning and elevation drawings</li>
                  <li> Construction documentation</li>
                </ul>
              </p>

              <p>
                <span className="font-medium">
                  ⚙️ Mechanical & Industrial Design
                </span>
                <ul className="list-disc list-inside pl-5 text-gray-400 mt-1">
                  <li> Mechanical part and assembly modeling</li>
                  <li> Sheet metal design and fabrication drawings</li>
                  <li> Finite element analysis (FEA) and simulation</li>
                  <li> Tooling, jigs, and fixture design</li>
                </ul>
              </p>

              <p>
                <span className="font-medium">
                  🧪 Product Design & Prototyping
                </span>
                <ul className="list-disc list-inside pl-5 text-gray-400 mt-1">
                  <li> Concept-to-CAD 3D modeling</li>
                  <li>Reverse engineering and digital twins</li>
                  <li> Finite element analysis (FEA) and simulation</li>
                  <li> Parametric design with SolidWorks and Fusion 360</li>
                  <li> STL files for 3D printing and prototyping</li>
                </ul>
              </p>

              <p>
                <span className="font-medium">
                  ⚡ Electrical & MEP Drafting
                </span>
                <ul className="list-disc list-inside pl-5 text-gray-400 mt-1">
                  <li> Schematics and wiring diagrams</li>
                  <li> MEP coordination using AutoCAD MEP and Revit</li>
                  <li> Panel layouts and circuit planning</li>
                </ul>
              </p>
            </ul>
          </div>
          {/*Software Proficiency*/}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-cyan-300 mb-2">
              💻 Software Proficiency
            </h3>

            <p>We use industry-leading CAD tools:</p>

            <ul className="list-disc list-inside text-gray-200 space-y-3">
              <li>
                <span className="font-medium text-white">
                  AutoCAD / AutoCAD MEP
                </span>{" "}
              </li>
              <li>
                <span className="font-medium text-white">SolidWorks</span>{" "}
              </li>
              <li>
                <span className="font-medium text-white">Autodesk Revit</span>{" "}
              </li>
              <li>
                <span className="font-medium text-white">CATIA / NX</span>{" "}
              </li>
            </ul>
          </div>
          {/* 📦 Deliverables */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              📦 Deliverables
            </h3>
            <p> We provide: </p>

            <ul className="list-disc list-inside text-gray-200 space-y-3">
              <li>
                <span className="font-medium text-white">
                  {" "}
                  DWG, DXF, STL, STEP, and PDF file formats
                </span>{" "}
              </li>
              <li>
                <span className="font-medium text-white">
                  3D models, exploded views, and assembly instructions
                </span>{" "}
              </li>
              <li>
                <span className="font-medium text-white">
                  Complete technical drawings with tolerances and GD&T
                </span>{" "}
              </li>
              <li>
                <span className="font-medium text-white">
                  Cloud-based file sharing or integrated project collaboration
                </span>{" "}
              </li>
            </ul>
          </div>
          {/* Why Choose Us */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-cyan-300 mb-2">
              🌟 Why Choose Us ?
            </h3>

            <ul className="list-disc list-inside text-gray-200 space-y-3">
              <li>
                <span className="font-medium text-white">
                  High Accuracy & Industry Standards
                </span>{" "}
              </li>
              <li>
                <span className="font-medium text-white">
                  Fast Turnaround Times
                </span>{" "}
              </li>
              <li>
                <span className="font-medium text-white">
                  Experienced Cad Designers and Engineers
                </span>{" "}
              </li>
              <li>
                <span className="font-medium text-white">
                  Scalable for Projects of All Sizes
                </span>{" "}
              </li>
              <li>
                <span className="font-medium text-white">
                  Integration with Manufacturing & Construction Teams
                </span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CAD;
