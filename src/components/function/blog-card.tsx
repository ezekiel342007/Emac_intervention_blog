'use client';

import { Card, CardDescription, CardHeader } from "../ui/card";
import Image from "next/image";
import { Post } from "@/types/Posts";
import { Suspense } from "react";
import ImagePlaceholder from "./image-placeholder";

interface BlogCardProps {
  postDetail: Post;
}

export default function BlogCard({ postDetail }: BlogCardProps) {
  console.log(postDetail.image_url);

  return (
    <Card className="py-0 w-fit h-[250] mb-12">
      <div className="grid grid-rows-2">
        <Suspense fallback={<ImagePlaceholder width={350} height={150} />}>
          <Image
            src={postDetail.image_url}
            alt={postDetail.descripttion ? `${postDetail.descripttion}` : ""}
            width={350}
            height={150}
            className="h-45 rounded-tl-2xl rounded-tr-2xl"
          />
        </Suspense>
        <div className="py-3">
          <CardHeader className="flex justify-center">{postDetail.title}</CardHeader>
          <CardDescription className="flex justify-center">{postDetail.body.slice(0, 36) + "..."}</CardDescription>
        </div>
      </div>
    </Card>
  )
}
