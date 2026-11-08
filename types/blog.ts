export type BlogCategory =
  | "Web Development"
  | "Mobile Development"
  | "Artificial Intelligence"
  | "AI Automation"
  | "Software Engineering";

export type ArticleBlock =
  | { type: "heading"; id: string; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  featuredImage: string;
  featuredImageAlt: string;
  featured?: boolean;
  tags: string[];
  serviceSlug: string;
  content: ArticleBlock[];
}
