import { site } from "@/lib/site";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  alternateName: site.alternateNames,
  url: site.url,
  description: site.description,
  publisher: { "@id": `${site.url}/#organization` },
};

export function WebsiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
