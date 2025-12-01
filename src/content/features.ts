import type { FeaturesContent } from "../lib/cms";

export const featuresContent: FeaturesContent = {
  seo: {
    title: "PulseStack Features – AI-Powered Insight",
    description: "Explore how PulseStack turns raw feedback into a prioritized roadmap.",
  },
  hero: {
    title: "All your customer signal, finally working together.",
    subtitle:
      "PulseStack ingests every piece of feedback, finds the patterns using AI, and surfaces exactly what deserves your team’s attention.",
  },
  featureCards: [
    {
      title: "AI-powered insight clustering",
      body: "Automatically groups similar feedback across tools, detects emerging topics, and scores them by estimated revenue and churn impact.",
    },
    {
      title: "Unified feedback hub",
      body: "Support tickets, churn reasons, NPS responses, sales notes, and app reviews in one, queryable workspace built for product teams.",
    },
    {
      title: "Roadmap impact simulation",
      body: "Run scenarios to see how shipping specific initiatives is likely to move NPS, expansion revenue, and churn over time.",
    },
  ],
  howItWorks: {
    title: "From raw noise to a roadmap your team can trust.",
    subtitle:
      "PulseStack connects to the tools you already use and turns unstructured feedback into clear, prioritized initiatives.",
    steps: [
      {
        title: "Connect your existing stack",
        body: "One-click integrations with tools like Zendesk, Intercom, HubSpot, Linear, and Segment — plus API access for anything custom.",
      },
      {
        title: "Let AI analyze the signal",
        body: "Our models detect themes, sentiments, and impact drivers, then continuously update as new feedback streams in.",
      },
      {
        title: "Align your roadmap and ship",
        body: "Share insight boards with stakeholders, export initiatives into your delivery tools, and track impact over time.",
      },
    ],
  },
};
