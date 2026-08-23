import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().default("canplane"),
    lang: z.enum(["en", "ko"]).optional(),
    categories: z
      .string()
      .transform((val) => val.split(" ").filter(Boolean)),
  }),
});

export const collections = { blog };
