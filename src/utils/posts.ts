import { getCollection, type CollectionEntry } from "astro:content";
import type { MarkdownHeading } from "astro";

export type Post = CollectionEntry<"blog">;

export interface TocNode extends MarkdownHeading {
  children: TocNode[];
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await getCollection("blog");
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date): string {
  return `${date.getUTCFullYear()}. ${date.getUTCMonth() + 1}. ${date.getUTCDate()}.`;
}

export function getUniqueCategories(posts: Post[]): string[] {
  const categorySet = new Set<string>();
  posts.forEach(({ data }) => data.categories.forEach((c) => categorySet.add(c)));
  return [...categorySet].sort((a, b) => {
    if (a === "featured") return -1;
    if (b === "featured") return 1;
    return 0;
  });
}

export function buildToc(headings: MarkdownHeading[]): TocNode[] {
  const root: TocNode[] = [];
  const stack: TocNode[] = [];
  headings
    .filter((h) => h.depth >= 2 && h.depth <= 6)
    .forEach((heading) => {
      const node: TocNode = { ...heading, children: [] };
      while (stack.length && stack[stack.length - 1].depth >= node.depth) {
        stack.pop();
      }
      (stack.length ? stack[stack.length - 1].children : root).push(node);
      stack.push(node);
    });
  return root;
}
