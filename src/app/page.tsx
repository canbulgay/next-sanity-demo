import { getPosts, type Post } from "@/lib/services/posts";
import { urlFor } from "@/lib/sanity.image";
import Image from "next/image";

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <div className="font-sans min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Blog Posts</h1>

        {posts.length === 0 ? (
          <p className="text-gray-600 text-center">No posts found.</p>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <article key={post._id} className="max-w-sm mx-auto">
                {post.coverImage && (
                  <div>
                    <Image
                      src={urlFor(post.coverImage).url()}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="mt-3">
                      <h2 className="text-lg font-semibold mb-1">
                        {post.title}
                      </h2>
                      <p className="text-sm">Slug: {post.slug}</p>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
