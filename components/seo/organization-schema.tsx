import { site } from "@/lib/site";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": "https://nileai.solutions/#organization",
    name: site.name,
    alternateName: site.alternateNames,
    url: site.url,
    logo: "https://nileai.solutions/icon.svg",
    description:
      site.description,
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
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
