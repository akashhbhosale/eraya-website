import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function FireTesting() {
  return (
    <ServiceLayout
      title="Fire Testing"
      quote="In the heat of the moment, reliability matters ERAYA tests your materials to withstand the flames."
      intro="At ERAYA, our Fire Testing services are designed to evaluate how materials, components and assemblies perform under extreme heat and flame exposure. We assess fire resistance, flammability, thermal degradation and safety compliance, ensuring your product meets stringent regulatory and industrial standards."
      backgroundImage="/assets/firetesting-bg.png"
      sections={[
        {
          title: "Fire Resistance Testing",
          data: [
            "Duration based burn resistance evaluation",
            "Load bearing fire performance",
            "Post exposure structural integrity analysis",
          ],
        },
        {
          title: "Flammability & Ignition Testing",
          data: [
            "Material ignition temperature analysis",
            "Flame spread rate determination",
            "Smoke generation and toxicity testing",
          ],
        },
        {
          title: "Thermal Degradation & Compliance",
          data: [
            "Surface cracking and melting points",
            "Residual strength after fire exposure",
            "Thermal conductivity and insulation failure points",
            "NFPA, ISO, ASTM and BIS standard testing",
          ],
        },
      ]}
      deliverables={[
        "Fire test procedure documentation",
        "Fire Test reports against various specific world wide standards",
        "Real time thermal response data",
        "Flammability classification report",
        "Visual and technical inspection summaries",
      ]}
      deliverableImages={[
        "/assets/firetesting-1.png",
        "/assets/firetesting-3.png",
      ]}
      whyChooseUs={[
        "Comprehensive fire testing setups for various materials",
        "Collaboration with Fire Test Labs in various countries including UK, Europe, US & Asia",
        "Design/Product improvements for fire compliance",
        "Real time monitoring and post test reporting",
        "Alignment with international fire safety standards",
        "Collaboration with design and safety engineering teams",
        "Assurance of safe and certified end use applications",
      ]}
      whyChooseUsImages={[
        "/assets/firetesting-5.png",
        "/assets/firetesting-7.png",
      ]}
    />
  );
}
