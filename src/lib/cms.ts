const BASE = import.meta.env.PUBLIC_CMS_BASE_URL;

if (!BASE) {
  throw new Error("PUBLIC_CMS_BASE_URL is not set – define it in .env and Cloudflare Pages env vars.");
}

async function getJson<T>(slug: string): Promise<T> {
  const url = `${BASE.replace(/\/$/, "")}/${slug}`; // ensure no trailing slash issues
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to load content for ${slug}: ${res.status} ${res.statusText}`);
  }

  return (await res.json()) as T;
}

export const getHomeContent = () => getJson<HomeContent>("home");
export const getFeaturesContent = () => getJson<FeaturesContent>("features");
export const getPricingContent = () => getJson<PricingContent>("pricing");
export const getFaqContent = () => getJson<FaqContent>("faq");
