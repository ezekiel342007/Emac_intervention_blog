import BackgroundCarousel from "@/components/function/background-carousel";
import BlogCard from "@/components/function/blog-card";
import { Post } from "@/types/Posts";
import { JSX } from "react";

async function getMostTrendingPost(): Promise<any> {
  const TRENDINGPOSTURL = process.env.NEXT_PUBLIC_LATEST_POSTS_ENDPOINT;
  const res: Response = await fetch(`${TRENDINGPOSTURL}`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

export default async function Home(): Promise<JSX.Element> {
  const mostTrendingPosts = await getMostTrendingPost();

  return (
    <div className="m-12">
      <BackgroundCarousel />
      <div className="grid grid-cols-3 w-full">
        {
          mostTrendingPosts.map((post: Post): JSX.Element => {
            return <BlogCard key={post.id} postDetail={post} />
          })
        }
      </div>
    </div >
  )
}
