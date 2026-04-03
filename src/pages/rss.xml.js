import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("posts")).filter((post) =>
    post.id.startsWith("en/"),
  );
  return rss({
    title: "Leszek Pomianowski lepo.co RSS Feed",
    description: "A terminal-inspired theme for Astro",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id.replace("en/", "")}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
