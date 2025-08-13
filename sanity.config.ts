"use client";

import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { defineType, defineField } from "sanity";

const post = defineType({
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title" },
    }),
    defineField({ name: "coverImage", type: "image", title: "Cover Image" }),
  ],
});

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  title: "My Sanity Studio",
  schema: { types: [post] },
  basePath: "/studio",
  // Desk yapısını özelleştir
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Posts")
              .child(
                S.documentTypeList("post")
                  .title("Posts")
                  .defaultOrdering([{ field: "_createdAt", direction: "desc" }])
              ),
          ]),
    }),
    visionTool(),
  ],
});
