import { Post } from "@/types/Posts";
import Image from "next/image";
import Link from "next/link";

type PostPageProps = {
  id: string;
}

export default async function Page({ params }: { params: PostPageProps }) {
  const id = params;

  async function getBlogPost(url: string): Promise<Post> {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch `);
    }
    return res.json();
  }

  const post = await getBlogPost(`${process.env.NEXT_PUBLIC_ALL_POSTS_ENDPOINT}${id}`);
  const postDate = new Date(post.posted_on);

  return (
    <div className="m-12">
      <div className="flex flex-row">
        <h1 className="text-4xl mb-4">{post.title}</h1>
      </div>
      <div className="flex flex-row">
        <span className="mr-2">by @<Link href={""}>{post.author.user_username}</Link></span><span>on {postDate.toDateString()}</span>
      </div>
      <h3 className="text-2xl mb-4">{post.descripttion}</h3>
      <div className="w-full mb-6">
        <Image
          className="rounded-3xl"
          src={post.image_url}
          alt={post.title}
          width={1000}
          height={300}
        />
      </div>
      <div className="w-3xl mb-6">
        <p className="">{post.body}</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold">Comments</h3>
      </div>
    </div>
  )
}
