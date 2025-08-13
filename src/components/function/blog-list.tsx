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
  const postEndpoint = process.env.NEXT_PUBLIC_ALL_POSTS_ENDPOINT;
  const postLimit = process.env.NEXT_PUBLIC_POSTS_LIMIT;

  useEffect(() => {
    setLoading(true);
    getBlogs(url)
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, [url]);

  console.log(url);
  const totalPages = posts?.results.length ? Math.ceil((posts.count ?? 0) / posts.results.length) : 0;
  if (loading || !posts) return <p>loading...</p>;
  // TODO 
  // work on number pagination navigation


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
          Array.from({ length: totalPages }).map((_, index) => {
            return (
              <Button
                key={index}
                className="w-fit h-fit rounded-4xl mr-1 z-10"
                onClick={
                  () => setUrl(
                    `${postEndpoint}?limit=${postLimit}&offset=${(index) * Number(postLimit)}`
                  )
                }
              >{index + 1}</Button>)
          })
        }
        {
          <Button className="mr-2 z-10" disabled={posts.next ? false : true} variant={posts.next ? "default" : "ghost"} onClick={() => setUrl(posts.next)}>Next</Button>
        }

      </div>
    </div >
  )
}
