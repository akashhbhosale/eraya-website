import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function EMFTesting() {
  return (
    <ServiceLayout
      title="Electromagnetic Field (EMF) Testing"
      quote="Invisible but impactful ERAYA validates electromagnetic compliance for safety, performance, and global readiness."
      intro="At ERAYA, our Electromagnetic Field (EMF) Testing Division focuses on ensuring that products operate safely in environments with electromagnetic interference (EMI) and emit within acceptable electromagnetic radiation limits. Whether you're designing medical devices, consumer electronics or industrial systems, we help ensure EMC compliance and performance."
      backgroundImage="/assets/EmfTesing-bg.png"
      sections={[
        {
          title: "EMC & EMI Compliance Testing",
          data: [
            "Radiated and conducted emission testing",
            "Susceptibility and immunity evaluation",
            "Shielding effectiveness assessment",
            "Precompliance and fullcompliance certification support",
          ],
        },
        {
          title: "Magnetic Field Measurement",
          data: [
            "Low frequency and static magnetic field analysis",
            "AC/DC field measurement near power electronics",
            "Environmental EMF exposure evaluations",
            "Comparative benchmarking and hotspot identification",
          ],
        },
        {
          title: "Advanced Testing Tools",
          data: [
            "EMI test chambers and spectrum analyzers",
            "Near field probes and antennas",
            "CISPR, IEC, MIL-STD standards",
            "Simulation based pre-analysis with CST/ANSYS HFSS",
          ],
        },
      ]}
      deliverables={[
        "EMC/EMI compliance report",
        "Field intensity maps and exposure zones",
        "Recommendations for shielding and layout",
        "Ready to submit documentation for certifications",
      ]}
      deliverableImages={["/assets/EmfTesing-1.png", "/assets/EmfTesing-2.png"]}
      whyChooseUs={[
        "Comprehensive in-house and collaboration with test labs for EMF test infrastructure",
        "Comprehensive inhouse EMF test infrastructure",
        "Support for global compliance (FCC, CE, IEC)",
        "Electromagnetic safe design consultation",
        "Precision in high and low frequency evaluation",
        "Fast report turnaround and corrective guidance",
      ]}
      whyChooseUsImages={["/assets/EmfTesing-3.png", "/assets/EmfTesing-4.png"]}
    />
  );
}
