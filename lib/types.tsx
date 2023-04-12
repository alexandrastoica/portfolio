import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Frontmatter = {
  title: string;
  description: string;
  slug: string;
  date: string;
  year: number;
  links: string[];
  keywords: string[];
  context: string[];
  label: string;
  order: number;
};

export type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult | null;
  frontmatter: TFrontmatter | null;
};

export type Collection = 'posts' | 'projects' | 'research';
