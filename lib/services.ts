import {
  Bot,
  BrainCircuit,
  Code2,
  GraduationCap,
  Megaphone,
  PanelsTopLeft,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "ai-software-systems",
    title: "AI Software Systems Development",
    shortDescription:
      "Custom intelligent platforms that streamline operations, analyse information and support better decisions.",
    description:
      "We design and build intelligent software systems around your organisation’s data, processes and users. These platforms can analyse information, automate actions, generate insights and improve continuously.",
    icon: BrainCircuit,
    capabilities: [
      "AI-powered management systems",
      "Intelligent dashboards",
      "Document processing platforms",
      "Decision-support systems",
      "Recommendation systems",
      "Internal knowledge assistants",
    ],
    outcomes: [
      "Faster access to useful information",
      "Improved decision-making",
      "Reduced repetitive work",
      "More consistent service delivery",
    ],
  },
  {
    slug: "ai-agents-automation",
    title: "AI Agents & Automation",
    shortDescription:
      "Smart agents and automated workflows that handle repetitive tasks, enquiries and internal processes.",
    description:
      "We create AI agents and workflow automation systems that respond to customers, process information, route tasks and support staff across different communication channels.",
    icon: Bot,
    capabilities: [
      "WhatsApp AI assistants",
      "Customer-support agents",
      "Internal staff assistants",
      "Lead qualification systems",
      "Email and task automation",
      "Appointment and enquiry systems",
    ],
    outcomes: [
      "Faster customer responses",
      "Lower operational workload",
      "Consistent communication",
      "Better workflow visibility",
    ],
  },
  {
    slug: "web-development",
    title: "Website & Web Application Development",
    shortDescription:
      "Modern websites and web applications built for performance, usability and growth.",
    description:
      "We build professional corporate websites, digital platforms and web applications using modern technologies such as Next.js, TypeScript and headless content systems.",
    icon: PanelsTopLeft,
    capabilities: [
      "Corporate websites",
      "Government platforms",
      "Business portals",
      "Dashboards",
      "Job and recruitment platforms",
      "Headless WordPress websites",
    ],
    outcomes: [
      "Stronger digital credibility",
      "Better user experience",
      "Faster website performance",
      "Scalable online services",
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    shortDescription:
      "Business systems, dashboards and digital tools designed around your organisation’s exact needs.",
    description:
      "We develop custom software that reflects how your organisation actually works instead of forcing your team to adapt to generic systems.",
    icon: Code2,
    capabilities: [
      "Business management systems",
      "Inventory platforms",
      "HR and staff systems",
      "Reporting dashboards",
      "Data collection systems",
      "Internal workflow platforms",
    ],
    outcomes: [
      "Connected operations",
      "Reduced manual processes",
      "Improved reporting",
      "Greater control over business data",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & Growth",
    shortDescription:
      "Data-driven strategies that improve visibility, strengthen brands and support measurable growth.",
    description:
      "We help organisations build a stronger digital presence through strategy, content, campaigns and modern marketing systems.",
    icon: Megaphone,
    capabilities: [
      "Digital marketing strategy",
      "Social media management",
      "Search visibility",
      "Online advertising",
      "Content systems",
      "Campaign analytics",
    ],
    outcomes: [
      "Greater online visibility",
      "Stronger brand positioning",
      "More qualified enquiries",
      "Better campaign measurement",
    ],
  },
  {
    slug: "ai-consulting-training",
    title: "AI Consulting & Training",
    shortDescription:
      "Practical AI strategy, implementation guidance and hands-on training for organisations and teams.",
    description:
      "We guide organisations through responsible AI adoption, helping leaders and teams understand where artificial intelligence can create practical value.",
    icon: GraduationCap,
    capabilities: [
      "AI-readiness assessments",
      "Organisational AI strategy",
      "Staff AI training",
      "Workflow analysis",
      "Responsible AI implementation",
      "AI adoption roadmaps",
    ],
    outcomes: [
      "Confident AI adoption",
      "Improved staff capability",
      "Clear implementation priorities",
      "Reduced technology uncertainty",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}