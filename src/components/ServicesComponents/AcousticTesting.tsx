import ServiceLayout from "@/components/ServicesComponents/ServiceLayout";

export default function AcousticTesting() {
  return (
    <ServiceLayout
      title="Acoustic Testing"
      quote="Silence speaks volumes ERAYA ensures your products meet the highest standards in sound performance."
      intro="At ERAYA, our Acoustic Testing services assess how materials and products perform in terms of sound insulation, absorption and transmission. We help manufacturers and designers validate acoustic performance across industries including automotive, construction, electronics and consumer products."
      backgroundImage="/assets/acoustictesting-bg.png"
      sections={[
        {
          title: "Sound Transmission Testing",
          data: [
            "Measure sound transmission class (STC)",
            "Evaluate airborne and impact noise performance",
            "Determine material barriers to sound leakage",
          ],
        },
        {
          title: "Sound Absorption Testing",
          data: [
            "Noise reduction coefficient (NRC) evaluation",
            "Room reverberation and echo analysis",
            "Acoustic insulation optimization",
          ],
        },
        {
          title: "Product Acoustic Profiling & Building Acoustics",
          data: [
            "Loudness and tone testing for consumer devices",
            "Frequency response and distortion assessment",
            "Sound branding and comfort evaluation",
          ],
        },
      ]}
      deliverables={[
        "STC and NRC test reports",
        "Acoustic material certification documents",
        "Graphs and charts for sound absorption/transmission",
        "Engineering recommendations for improvements",
      ]}
      deliverableImages={[
        "/assets/acoustictesting-2.png",
        "/assets/acoustictesting-4.png",
      ]}
      whyChooseUs={[
        "Advanced acoustic chambers and tools",
        "Multidisciplinary collaboration with design teams",
        "Precise, replicable test methodology",
        "Proven success in noise-sensitive product sectors",
        "End to end documentation and compliance support",
      ]}
      whyChooseUsImages={[
        "/assets/acoustictesting-5.png",
        "/assets/acoustictesting-8.png",
      ]}
    />
  );
}
