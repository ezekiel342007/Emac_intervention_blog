"use client";

import BlogCard from "@/components/function/blog-card";
import { Post, PostResponse } from "@/types/Posts";
import { JSX, useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

async function getBlogs(url: string): Promise<PostResponse> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("failed to fetch");
  }
  return res.json();
}

interface BlogListProps {
  fetchUrl: string;
}

export default function BlogList({ fetchUrl }: BlogListProps): JSX.Element {
  const [url, setUrl] = useState(fetchUrl);
  const [posts, setPosts] = useState<PostResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getBlogs(url)
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, [url]);
  if (loading || !posts) return <p>loading...</p>;


  return (
    <div>
      <div className="grid grid-cols-3 w-full">
        {
          posts.results.map((post: Post): JSX.Element => {
            return <BlogCard key={post.id} postDetail={post} />
          })
        }
      </div>
      <div>
        {
          <Button className="mr-2 z-10" disabled={posts.previous ? false : true} variant={posts.previous ? "default" : "ghost"} onClick={() => setUrl(posts.previous)}>Previous</Button>
        }
        {
          Array.from({ length: Math.ceil(posts.count / posts.results.length) }).map((_, index) => {
            return (<Button key={index} className="w-fit h-fit rounded-4xl mr-1 z-10">{index + 1}</Button>)
          })
        }
        {
          <Button className="mr-2 z-10" disabled={posts.next ? false : true} variant={posts.next ? "default" : "ghost"} onClick={() => setUrl(posts.next)}>Next</Button>
        }

      </div>
    </div >
  )
}
