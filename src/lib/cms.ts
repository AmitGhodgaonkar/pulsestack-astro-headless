const BASE = import.meta.env.PUBLIC_SITE_URL;

if (!BASE) {
  throw new Error(
    "PUBLIC_SITE_URL is not set. Set it in Cloudflare Pages environment variables."
  );
}

async function getJson<T>(slug: string): Promise<T> {
  const url = `${BASE}/api/${slug}.json`;
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to load content for ${slug} — ${res.status}`);
  }

  return (await res.json()) as T;
}

export const getHomeContent = () => getJson("home");
export const getFeaturesContent = () => getJson("features");
export const getPricingContent = () => getJson("pricing");
export const getFaqContent = () => getJson("faq");
