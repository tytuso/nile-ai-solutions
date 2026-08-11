import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Nile AI Solutions handles information shared through our website, enquiries and product demonstrations.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "Information we may receive",
    paragraphs: [
      "We may receive information that you choose to share when you contact us by email, WhatsApp, a website form or a product demonstration. This can include your name, contact details, organisation, project needs and the content of your enquiry.",
      "Our website and service providers may also process basic technical information needed to operate and secure the site, such as device and browser information, IP address, request logs and theme preferences.",
    ],
  },
  {
    title: "How we use information",
    paragraphs: [
      "We use information to respond to enquiries, provide requested services, operate product demonstrations, maintain security and reliability, improve our systems and meet applicable legal obligations.",
    ],
    bullets: [
      "To understand and respond to your request.",
      "To prepare proposals, provide support and communicate about a project or product.",
      "To operate, protect and improve our website and AI systems.",
      "To prevent misuse, investigate technical problems and maintain service reliability.",
    ],
  },
  {
    title: "AI product demonstrations",
    paragraphs: [
      "Messages submitted to a Nile AI product demonstration may be processed to generate a response and preserve the conversation context required for that experience. Do not submit passwords, financial details, confidential documents or sensitive personal information through a public demonstration.",
      "A demonstration is not a substitute for a confidential project environment. Data-handling arrangements for a client deployment are defined separately in the relevant project or service agreement.",
    ],
  },
  {
    title: "Service providers and sharing",
    paragraphs: [
      "We may use trusted providers for hosting, infrastructure, communications and other services required to operate the site. They may process limited information on our behalf under their own security and privacy commitments.",
      "We do not sell personal information. We may disclose information when required by applicable law, to protect people or systems, or as part of a legitimate business transfer with appropriate safeguards.",
      "Where a service requires information to be processed or stored outside Uganda, we seek appropriate contractual, technical and organisational safeguards for that processing.",
    ],
  },
  {
    title: "Retention and security",
    paragraphs: [
      "We keep information only for as long as reasonably necessary for the purpose for which it was collected, for security and record-keeping, or to meet applicable obligations. We use practical technical and organisational safeguards, but no online system can guarantee absolute security.",
    ],
  },
  {
    title: "Your choices and rights",
    paragraphs: [
      "Depending on the circumstances and applicable law, you may ask to access, correct or delete personal information associated with you, or object to certain uses. You may also raise a concern with Uganda’s Personal Data Protection Office. Contact us using the address below so we can understand and respond to your request.",
    ],
  },
  {
    title: "Updates to this policy",
    paragraphs: [
      "We may update this policy as our website, products or legal obligations change. The effective date at the top of this page identifies the current version.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Your information"
      title="Privacy Policy"
      introduction="This policy explains how Nile AI Solutions handles information shared through our website, enquiries and public product demonstrations. It is intended to make our practices clear and understandable."
      sections={sections}
    />
  );
}
