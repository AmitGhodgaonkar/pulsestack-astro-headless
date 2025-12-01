export type HomeContent = {
  seo: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  socialProof: {
    heading: string;
    logos: string[];
  };
};

export type FeaturesContent = {
  seo: { title: string; description: string };
  hero: { title: string; subtitle: string };
  featureCards: { title: string; body: string }[];
  howItWorks: {
    title: string;
    subtitle: string;
    steps: { title: string; body: string }[];
  };
};

export type PricingContent = {
  seo: { title: string; description: string };
  hero: { title: string; subtitle: string };
  primaryPlan: {
    labelBadge: string;
    price: string;
    period: string;
    description: string;
    bullets: string[];
    ctaLabel: string;
  };
  enterprise: {
    title: string;
    body: string;
    linkLabel: string;
    linkHref: string;
  };
};

export type FaqContent = {
  seo: { title: string; description: string };
  hero: { title: string; subtitle: string };
  faqs: { q: string; a: string }[];
  finalCta: {
    title: string;
    body: string;
    ctaLabel: string;
  };
};

const BASE = import.meta.env.PUBLIC_SITE_URL;

if (!BASE) {
  throw new Error("PUBLIC_SITE_URL is not set. Define it in .env and Cloudflare Pages env vars.");
}

async function getJson<T>(slug: string): Promise<T> {
  const url = new URL(`/api/${slug}.json`, BASE).toString();
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to load content for ${slug}: ${res.status} ${res.statusText}`);
  }

  return (await res.json()) as T;
}

export const getHomeContent = () => getJson<HomeContent>("home");
export const getFeaturesContent = () => getJson<FeaturesContent>("features");
export const getPricingContent = () => getJson<PricingContent>("pricing");
export const getFaqContent = () => getJson<FaqContent>("faq");
