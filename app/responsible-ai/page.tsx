import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Responsible AI",
  description:
    "The principles Nile AI Solutions applies when designing and deploying practical artificial intelligence systems.",
  alternates: {
    canonical: "/responsible-ai",
  },
};

const sections = [
  {
    title: "Purpose before novelty",
    paragraphs: [
      "We use artificial intelligence when it creates a clear practical benefit. A system should make work easier, information more useful or services more effective—not add AI simply for appearance.",
    ],
  },
  {
    title: "Grounded and understandable outputs",
    paragraphs: [
      "Where appropriate, we design AI assistants to work from approved organisational knowledge and make the source or limits of a response understandable. We avoid presenting generated output as guaranteed fact.",
    ],
  },
  {
    title: "Human oversight",
    paragraphs: [
      "People should remain able to review, correct, escalate or override AI-assisted work, especially where an output could materially affect a customer, employee or community. The required level of oversight depends on the use case and risk.",
    ],
  },
  {
    title: "Privacy and security",
    paragraphs: [
      "We aim to minimise unnecessary data collection, control access and design systems around the information genuinely required for the task. Client deployments should include clear responsibilities for data, users, retention and incident response.",
    ],
  },
  {
    title: "Fairness and accessibility",
    paragraphs: [
      "We consider who may be excluded, misunderstood or disadvantaged by a system. We work to make interfaces understandable and to test important workflows with the people and contexts they are designed to serve.",
    ],
  },
  {
    title: "Continuous evaluation",
    paragraphs: [
      "AI behaviour can change as models, data and real-world usage change. We support monitoring, feedback and improvement so that a system can remain useful, safe and aligned with its intended purpose.",
    ],
  },
  {
    title: "Shared responsibility",
    paragraphs: [
      "Responsible deployment is a partnership. Nile AI Solutions provides technical guidance and safeguards, while each organisation remains responsible for its policies, authorised knowledge, user access and final decisions made through its systems.",
    ],
  },
];

export default function ResponsibleAiPage() {
  return (
    <LegalPage
      eyebrow="How we build"
      title="Responsible AI"
      introduction="Artificial intelligence should earn trust through useful design, clear limits and responsible operation. These principles guide how Nile AI Solutions approaches AI products and client systems."
      sections={sections}
    />
  );
}
