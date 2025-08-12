import BlogCard from "@/components/function/blog-card";
import BlogList from "@/components/function/blog-list";
import { Post } from "@/types/Posts";
import { JSX } from "react";

export default async function Page(): Promise<JSX.Element> {
  const url = process.env.ALL_POSTS_ENDPOINT;

  return (
    <div className="m-12">
      <div className="mb-5 text-3xl">
        <h1>All Posts</h1>
      </div>
      <BlogList fetchUrl={`${url}`} />
    </div>
  )
}
