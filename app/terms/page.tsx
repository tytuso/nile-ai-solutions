import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Website Terms",
  description:
    "Terms governing use of the Nile AI Solutions website and public product demonstrations.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    title: "Using this website",
    paragraphs: [
      "You may use this website to learn about Nile AI Solutions, explore our public materials and contact us about products or services. You must not use the site to break the law, interfere with its operation, attempt unauthorised access or harm another person or organisation.",
    ],
  },
  {
    title: "Information and availability",
    paragraphs: [
      "We aim to keep website information accurate and useful, but content may change and may not always be complete or current. Product features, trials, pricing and availability can change as our systems develop.",
      "Public website content does not create a client relationship or replace a signed project, subscription or service agreement. Where a separate agreement applies, that agreement controls the relevant service.",
    ],
  },
  {
    title: "Public AI demonstrations",
    paragraphs: [
      "AI-generated responses can be incomplete or incorrect. You are responsible for reviewing a response before relying on it or using it to make an important decision. Do not use a public demonstration for emergencies, professional advice or confidential information.",
      "We may limit, suspend or remove access to a demonstration where necessary to protect users, systems or service reliability.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "The Nile AI Solutions name, brand assets, website design, original text, software demonstrations and other materials belong to Nile AI Solutions or their respective licensors. You may view and share links to public pages, but you may not copy, resell or misrepresent our materials without permission.",
    ],
  },
  {
    title: "Third-party services",
    paragraphs: [
      "The website may link to or rely on third-party platforms, including hosting, communications and product services. Their own terms and privacy practices apply when you use those services. We are not responsible for third-party services outside our control.",
    ],
  },
  {
    title: "Responsibility and limitations",
    paragraphs: [
      "The public website is provided on an as-available basis. To the extent permitted by applicable law, Nile AI Solutions is not responsible for indirect losses arising solely from use of, or inability to use, this public website. Nothing in these terms excludes a responsibility that cannot legally be excluded.",
    ],
  },
  {
    title: "Changes and applicable law",
    paragraphs: [
      "We may update these terms as the website and our products change. The effective date identifies the current version. These website terms are interpreted under laws applicable in Uganda, while any separate client agreement may state its own governing terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Website use"
      title="Website Terms"
      introduction="These terms set out the basic rules for using the Nile AI Solutions website and public product demonstrations. Separate contracts govern paid projects, subscriptions and client deployments."
      sections={sections}
    />
  );
}
