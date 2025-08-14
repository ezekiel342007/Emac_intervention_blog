'use client';

import { Card, CardDescription, CardHeader } from "../ui/card";
import Image from "next/image";
import { Post } from "@/types/Posts";
import { Suspense } from "react";
import ImagePlaceholder from "./image-placeholder";
import Link from "next/link";

interface BlogCardProps {
  postDetail: Post;
}

export default function BlogCard({ postDetail }: BlogCardProps) {

  return (
    <Link className="w-fit mb-2" href={`blogs/${postDetail.id}`}>
      <Card className="py-0 w-fit h-[250] mb-12 hover:bg-gray-300">
        <div className="grid grid-rows-2 h-[100%]">
          <Suspense fallback={<ImagePlaceholder width={350} height={150} />}>
            <Image
              src={postDetail.image_url}
              alt={postDetail.descripttion ? `${postDetail.descripttion}` : ""}
              width={350}
              height={150}
              className="h-45 rounded-tl-2xl rounded-tr-2xl"
            />
          </Suspense>
          <div className="mt-[50] py-3 h-fit">
            <CardHeader className="flex justify-center">{postDetail.title}</CardHeader>
            <CardDescription className="flex justify-center">{postDetail.body.slice(0, 36) + "..."}</CardDescription>
          </div>
        </div>
      </Card>
    </Link>
  )
}
