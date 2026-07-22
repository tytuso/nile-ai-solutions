export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": "https://nileai.solutions/#organization",
    name: "Nile Ai Solutions",
    url: "https://nileai.solutions",
    logo: "https://nileai.solutions/icon-512.png",
    description:
      "Nile Ai Solutions develops AI-powered software, automation systems, websites, web applications and digital solutions for organisations in Uganda and across Africa.",
    email: "hello@nileai.solutions",
    telephone: "+256753523529",
    areaServed: [
      {
        "@type": "Country",
        name: "Uganda",
      },
      {
        "@type": "Place",
        name: "Africa",
      },
    ],
    knowsAbout: [
      "Artificial intelligence",
      "AI software development",
      "AI agents",
      "Business automation",
      "Custom software development",
      "Web application development",
      "Digital transformation",
      "AI consulting",
      "AI training",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+256753523529",
      email: "hello@nileai.solutions",
      contactType: "customer service",
      areaServed: ["UG", "Africa"],
      availableLanguage: ["English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}