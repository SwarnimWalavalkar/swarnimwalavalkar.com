import { defineCollection } from "astro:content";
import { z } from "zod";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    isDraft: z.boolean().optional().default(false),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    date: z.string().transform((str: string) => new Date(str)),
  }),
});

export const collections = { posts };
