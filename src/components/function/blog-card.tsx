'use client';

import { Card, CardDescription, CardHeader } from "../ui/card";
import Image from "next/image";
import { Post } from "@/types/Posts";

interface BlogCardProps {
  postDetail: Post;
}

export default function BlogCard({ postDetail }: BlogCardProps) {
  return (
    <Card>
      <div className="grid grid-cols-2">
        <div>
          <CardHeader>{postDetail.title}</CardHeader>
        </div>
        <Image
          src={postDetail.imageUrl}
          alt={postDetail.descripttion ? postDetail.descripttion : postDetail.title}
          width={200}
          height={100}
        />
      </div>
    </Card>
  )
}
