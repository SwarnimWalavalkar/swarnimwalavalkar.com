import rss from "@astrojs/rss";
import type { APIContext } from "astro";

import { sortPostsByDate } from "../lib/date";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const posts = sortPostsByDate(
    await getCollection("posts", ({ data }) => data.isDraft !== true),
  );

  return rss({
    title: "swarnim's blog",
    description:
      "swarnim's musings on computers... and maybe other things too.",
    site: new URL(context.site ?? "swarnimwalavalkar.com"),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/posts/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body)),
    })),
  });
}
