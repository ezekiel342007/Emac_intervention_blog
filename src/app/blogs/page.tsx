import BlogList from "@/components/function/blog-list";
import Link from "next/link";
import { JSX } from "react";

export default function Page(): JSX.Element {
  const url = process.env.NEXT_PUBLIC_PAGINATED_ALL_POSTS_ENDPOINT;

  return (
    <div className="m-12">
      <div className="mb-5 flex justify-between w-full">
        <Link href="/blogs/">All Posts</Link>
        <ul className="flex space-x-4 relative left-0">
          <li><Link href="/blogs/trending/">Trending</Link></li>
          <li><Link href="/blogs/read/">Read</Link></li>
          <li><Link href="/blogs/unread/">Unread</Link></li>
          <li><Link href="/blogs/latest/">Latest</Link></li>
        </ul>
      </div>
      <BlogList fetchUrl={`${url}`} />
    </div >
  )
}
