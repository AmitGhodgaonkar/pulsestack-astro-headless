import { homeContent } from "../content/home";
import { featuresContent } from "../content/features";
import { pricingContent } from "../content/pricing";
import { faqContent } from "../content/faq";

export type HomeContent = typeof homeContent;
export type FeaturesContent = typeof featuresContent;
export type PricingContent = typeof pricingContent;
export type FaqContent = typeof faqContent;

export const getHomeContent = async () => homeContent;
export const getFeaturesContent = async () => featuresContent;
export const getPricingContent = async () => pricingContent;
export const getFaqContent = async () => faqContent;
