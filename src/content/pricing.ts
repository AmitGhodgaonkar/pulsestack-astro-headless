import type { PricingContent } from "../lib/cms";

export const pricingContent: PricingContent = {
  seo: {
    title: "PulseStack Pricing – Simple, Usage-Based Plans",
    description: "Start free, then scale PulseStack as your team and customer signal grow.",
  },
  hero: {
    title: "Simple, usage-based pricing.",
    subtitle:
      "Start with a free trial. When you’re ready, choose a plan that fits your stage — without annual lock-in or surprise overages.",
  },
  primaryPlan: {
    labelBadge: "Growth",
    price: "$99",
    period: "/month",
    description:
      "For SaaS product teams that want AI-powered insight across 3–5 core tools.",
    bullets: [
      "Up to 5 data sources",
      "50k feedback items analyzed / month",
      "Impact simulation reports",
      "Slack + email alerts",
      "Priority chat support",
    ],
    ctaLabel: "Start free trial",
  },
  enterprise: {
    title: "Need enterprise features?",
    body: "We offer dedicated SLAs, SSO/SAML, advanced permissions, and deployment options for regulated industries.",
    linkLabel: "Learn more and talk to sales →",
    linkHref: "/faq",
  },
};
