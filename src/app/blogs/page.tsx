"use client";

import Link from "next/link";
import { JSX, useEffect, useState } from "react";
import BlogCard from "@/components/function/blog-card";
import { Post, PostResponse } from "@/types/Posts";
import { Button } from "../../components/ui/button";

async function getBlogs(url: string): Promise<PostResponse> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("failed to fetch");
  }
  return res.json();
}

export default function Page(): JSX.Element {
  const [url, setUrl] = useState(process.env.NEXT_PUBLIC_PAGINATED_ALL_POSTS_ENDPOINT as string);
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

  const totalPages = posts?.results.length ? Math.ceil((posts.count ?? 0) / posts.results.length) : 0;

  // TODO
  // working on blogs page ui

  return (
    <>
      <div className="fixed left-0 top-12 m-12 w-full">
        <div className="bg-white relative left-9 py-3 flex justify-between w-[86vw]">
          <Button variant={"outline"} onClick={() => setUrl(process.env.NEXT_PUBLIC_PAGINATED_ALL_POSTS_ENDPOINT as string)}>All Posts</Button>
          <ul className="flex space-x-4 relative left-0">
            <li><Button variant={"outline"} onClick={() => setUrl(process.env.NEXT_PUBLIC_LATEST_POSTS_ENDPOINT as string)}>Trending</Button></li>
            <li><Button variant={"outline"}>Read</Button></li>
            <li><Button variant={"outline"}>Unread</Button></li>
            <li><Button variant={"outline"} onClick={() => setUrl(process.env.NEXT_PUBLIC_LATEST_POSTS_ENDPOINT as string)}>Latest</Button></li>
          </ul>
        </div>
      </div>
      <div className="m-12 mt-42">
        <div>
          {
            (loading || !posts) ? <p>loading...</p> :
              <div>
                <div className="grid grid-cols-3 w-full">
                  {
                    posts.results.map((post: Post): JSX.Element => {
                      return <BlogCard key={post.id} postDetail={post} />
                    })
                  }
                </div>
                <div className="flex justify-center">
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
                </div>
              </div >
          }
        </div>
      </div >
    </>
  )
}
