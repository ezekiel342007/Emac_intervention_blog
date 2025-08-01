import BlogCard from "@/components/function/blog-card";
import { Post } from "@/types/Posts";

async function getMostTrendingPost(): Promise<any> {
  const TRENDINGPOSTURL = process.env.LATEST_POSTS_ENDPOINT;
  const res: Response = await fetch(`${TRENDINGPOSTURL}`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

export default async function Home() {
  const mostTrendingPosts = await getMostTrendingPost();

  return (
    <div className="m-12">
      <div className="flex justify-center">
        <h1 className="text-3xl mb-3">Connect and Learn</h1>
      </div>
      {
        mostTrendingPosts.map((post: Post) => {
          return <BlogCard key={post.id} postDetail={post} />
        })
      }
    </div>
  )

}
