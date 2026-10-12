export type Project = {
  slug: string;
  name: string;
  category: string;
  title: string;
  description: string;
  url: string;
  logo: string;
  color: string;
  audience: string;
  story: string;
  features: string[];
};
// Include released products only. URLs and brand assets verified 11 October 2026.
export const projects: Project[] = [
  {
    slug: "gulako",
    name: "Gulako",
    category: "Commerce PWA",
    title: "A storefront built for small business.",
    description:
      "A mobile-first commerce platform that helps Ugandan sellers showcase products, receive customer orders and manage their online shop.",
    url: "https://gulako.site/",
    logo: "/projects/gulako.svg",
    color: "#8b5cf6",
    audience: "Small businesses and independent sellers in Uganda",
    story:
      "Gulako gives local sellers a simple way to take their shop online. Customers can browse a seller's storefront and place orders, while sellers manage products and incoming business from one mobile-friendly workspace. The progressive web app is designed to feel at home on phones, where many small businesses serve their customers.",
    features: [
      "Branded online storefronts for individual sellers",
      "Product catalog and order management",
      "Customer-friendly cart and checkout flows",
      "Installable progressive web app for mobile",
      "Seller order notifications",
    ],
  },
  {
    slug: "nile-graphics",
    name: "Nile Graphics",
    category: "AI & design",
    title: "Your brand. Beautifully designed.",
    description:
      "A brand-aware design studio for business flyers, with free design tools and AI-powered visuals.",
    url: "https://graphics.nileai.solutions",
    logo: "/projects/nile-graphics.svg",
    color: "#b69af8",
    audience: "Business owners, marketers and creators",
    story:
      "Small businesses need consistent marketing without starting every design from scratch. Nile Graphics brings business flyer creation and AI-powered visuals into one focused design workspace.",
    features: [
      "Business flyer design",
      "Brand-aware creative workspace",
      "AI-powered image generation",
      "Free and paid design options",
    ],
  },
  {
    slug: "nilestock",
    name: "NileStock",
    category: "Business systems",
    title: "A clearer view of every sale.",
    description:
      "An offline-ready point-of-sale and inventory system for shops, minimarts and growing retailers.",
    url: "https://nilestock.shop",
    logo: "/projects/nilestock.png",
    color: "#74d6bd",
    audience: "Shops, minimarts and retail businesses",
    story:
      "Retailers need to keep selling while staying on top of stock. NileStock brings sales, receipts and inventory into a practical workspace that works on a phone, tablet or computer.",
    features: [
      "Point of sale and inventory",
      "Receipts, barcodes and QR codes",
      "Business reports",
      "Offline-ready retail workflows",
    ],
  },
  {
    slug: "applypilot",
    name: "ApplyPilot",
    category: "AI & recruitment",
    title: "Better applications. Clearer shortlists.",
    description:
      "AI CV analysis for job seekers and evidence-based candidate comparison for recruiters.",
    url: "https://apply-pilot.site",
    logo: "/projects/applypilot.svg",
    color: "#a7bff8",
    audience: "Job seekers, recruiters and hiring teams",
    story:
      "A strong application should connect experience to the role. ApplyPilot helps job seekers tailor CVs to job descriptions and gives recruiters a structured way to compare candidate evidence, with people making the final hiring decisions.",
    features: [
      "CV and job-description analysis",
      "Application tailoring",
      "Candidate CV comparison",
      "Evidence-based AI ranking",
    ],
  },
  {
    slug: "bizdocs-ai",
    name: "BizDocs AI",
    category: "Business systems",
    title: "Business paperwork, beautifully simple.",
    description:
      "Create professional invoices, quotations, receipts and business documents in one place.",
    url: "https://invoice.nileai.solutions",
    logo: "/projects/bizdocs.svg",
    color: "#f1c993",
    audience: "Freelancers, service businesses and small teams",
    story:
      "Professional paperwork helps a business present itself clearly. BizDocs AI provides a dedicated workspace for the everyday documents that move a sale from a quotation to an invoice and receipt.",
    features: [
      "Professional invoices",
      "Customer quotations",
      "Payment receipts",
      "Business document creation",
    ],
  },
  {
    slug: "nileschools",
    name: "NileSchools",
    category: "Education",
    title: "School operations, in order.",
    description:
      "A school management system for students, results, report cards, attendance, fees and circulars.",
    url: "https://nileschools.nileai.solutions",
    logo: "/projects/nileschools.svg",
    color: "#a1c7ed",
    audience: "School administrators and teaching teams",
    story:
      "School administration spans student records, academic results and day-to-day operations. NileSchools brings these tasks into one system so school teams can organise information and prepare essential reports.",
    features: [
      "Student records and attendance",
      "Results, rankings and report cards",
      "School fee management",
      "Circulars and school communication",
    ],
  },
  {
    slug: "zabuni-ai",
    name: "Zabuni AI",
    category: "AI & procurement",
    title: "From opportunity to a prepared bid.",
    description:
      "AI-powered tender discovery, compliance analysis and bid preparation for African businesses.",
    url: "https://zabuni.nileai.solutions",
    logo: "/projects/zabuni.svg",
    color: "#c1d99a",
    audience: "Suppliers, contractors and bid teams",
    story:
      "Tender opportunities come with detailed requirements. Zabuni AI helps businesses discover opportunities, review compliance and prepare bid materials, keeping the final review and submission with the business.",
    features: [
      "Tender opportunity discovery",
      "AI-assisted compliance analysis",
      "Bid preparation support",
      "A dedicated procurement workspace",
    ],
  },
  {
    slug: "nile-rush",
    name: "Nile Rush",
    category: "Games & PWAs",
    title: "Open your browser. Chase the horizon.",
    description:
      "An offline-ready 3D arcade racing game with multiple routes, cars and difficulty settings.",
    url: "https://games.nileai.solutions",
    logo: "/projects/nile-rush.svg",
    color: "#efa993",
    audience: "Players on phones and desktop computers",
    story:
      "Nile Rush explores what a browser can do beyond business software. The arcade racer brings routes, vehicle choices and responsive controls into an installable progressive web app.",
    features: [
      "Seven racing routes",
      "Nine cars and credit-based unlocks",
      "Touch and keyboard controls",
      "Difficulty settings and offline play",
    ],
  },
];
export const contactUrl =
  "https://wa.me/256753523529?text=" +
  encodeURIComponent(
    "Hello Nile AI Solutions. I would like a premium website or custom business system.",
  );
export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
