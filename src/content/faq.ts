import type { FaqContent } from "../lib/cms";

export const faqContent: FaqContent = {
  seo: {
    title: "PulseStack FAQ – Answers for Product Teams",
    description: "Common questions about PulseStack, security, setup, and pricing.",
  },
  hero: {
    title: "Questions, meet answers.",
    subtitle:
      "Still unsure if PulseStack is the right fit for your team? Here are the questions we hear most often.",
  },
  faqs: [
    {
      q: "How does PulseStack connect to our tools?",
      a: "We support native integrations with Jira, Linear, HubSpot, Intercom, and more. You can also use our API for custom data sources.",
    },
    {
      q: "Is my customer data secure?",
      a: "Yes. Data is encrypted in transit and at rest. We follow industry best practices for access control and are SOC 2 ready.",
    },
    {
      q: "How long does it take to see value?",
      a: "Most teams connect their tools and start seeing prioritized insights within the first 30 minutes.",
    },
    {
      q: "Can I try it before paying?",
      a: "Absolutely. We offer a 14-day free trial with full access to all features and no credit card required.",
    },
  ],
  finalCta: {
    title: "Ready to see PulseStack with your own data?",
    body: "Start a free trial or book a live walkthrough with our team. We’ll help you connect your tools and get your first insights.",
    ctaLabel: "Get started free",
  },
};
