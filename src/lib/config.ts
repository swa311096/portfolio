import site from "../../content/site.json";
import categories from "../../content/categories.json";

export type SocialLink = {
  id: string;
  label: string;
  url: string;
  icon: string;
};

export type SubstackPost = {
  title: string;
  url: string;
  date: string;
  excerpt?: string;
};

export type Category = {
  id: string;
  name: string;
  description?: string;
  posts: SubstackPost[];
};

export type SiteConfig = {
  name: string;
  about: string;
  social: SocialLink[];
};

export function getSiteConfig(): SiteConfig {
  return site as SiteConfig;
}

export function getCategories(): Category[] {
  return categories as Category[];
}

export function getCategoryById(id: string): Category | undefined {
  return getCategories().find((c) => c.id === id);
}
