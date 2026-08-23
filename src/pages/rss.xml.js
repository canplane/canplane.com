import rss from "@astrojs/rss";
import { getAllPosts } from "../utils/posts";
import { SITE } from "../utils/site";

export async function GET(context) {
  const posts = await getAllPosts();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/${post.slug}/`,
    })),
  });
}
