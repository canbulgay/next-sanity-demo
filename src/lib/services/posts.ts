// lib/services/posts.ts
import { groq } from "next-sanity";
import { client } from "../sanity.client";

export type Post = {
  _id: string;
  title: string;
  slug: string;
  coverImage?: any;
};

export const postsQuery = groq`*[_type == "post"] | order(_createdAt desc){
  _id,
  title,
  "slug": slug.current,
  coverImage
}`;

export async function getPosts(): Promise<Post[]> {
  return client.fetch(
    postsQuery,
    {},
    {
      next: { tags: ["posts"] },
    }
  );
}
