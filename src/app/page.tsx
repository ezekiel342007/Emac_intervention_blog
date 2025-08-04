import BlogCard from "@/components/function/blog-card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Suspense } from "react";
import { Post } from "@/types/Posts";
import ImagePlaceholder from "@/components/function/image-placeholder";
import Link from "next/link";

async function getMostTrendingPost(): Promise<any> {
  const TRENDINGPOSTURL = process.env.LATEST_POSTS_ENDPOINT;
  const res: Response = await fetch(`${TRENDINGPOSTURL}`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

export default async function Home() {
  const mostTrendingPosts = await getMostTrendingPost();

  return (
    <div className="m-12">
      <Carousel opts={{ loop: true }} className="mb-5">
        <CarouselContent>
          <CarouselItem key={1}>
            <div className="relative flex justify-center w-full h-80 mb-6">
              <Suspense fallback={<ImagePlaceholder width={500} height={250} />}>
                <Image
                  className="-z-10 object-cover rounded-2xl"
                  src={"/images/backgrounds/5068978.jpg"}
                  alt="connection background"
                  fill
                />
              </Suspense>
              <div className="relative z-10 flex h-full items-center justify-center text-white">
                <h1 className="text-3xl mb-3">Connect and Learn</h1>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem key={2}>
            <div className="relative flex justify-center w-full h-80 mb-6">
              <Image
                className="-z-10 object-cover rounded-2xl"
                src={"/images/backgrounds/Vector_2646.jpg"}
                alt="connection background"
                fill
              />
              <div className="relative left-70 z-10 flex h-full items-center justify-center text-white">
                <h1 className="text-3xl mb-3">Be a part of something bigger</h1>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem key={3}>
            <div className="relative flex justify-center w-full h-80 mb-6">
              <Image
                className="-z-10 object-cover rounded-2xl"
                src={"/images/backgrounds/30755.jpg"}
                alt="connection background"
                fill
              />
              <div className="relative z-10 flex h-full items-center justify-center text-white">
                <h1 className="text-3xl mb-3">Reach out</h1>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem key={4}>
            <div className="relative flex justify-center w-full h-80 mb-6">
              <Image
                className="-z-10 object-cover rounded-2xl"
                src={"/images/backgrounds/Lovepik_com-500561162-multimedia-connection-technology.jpg"}
                alt="connection background"
                fill
              />
              <div className="relative z-10 bottom-20 flex h-full items-center justify-center text-white">
                <h1 className="text-3xl mb-3">We can accomplish greater together</h1>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
      <div className="grid grid-cols-3 w-full">
        {
          mostTrendingPosts.map((post: Post) => {
            return <BlogCard key={post.id} postDetail={post} />
          })
        }
      </div>

      {/* <Link className="w-10 h-10 p-1 rounded-3xl bg-white fixed bottom-32 right-32" href={"/write_blog"}> */}
      {/*   <Image src={"/images/blogging_1069159.png"} alt="blogging icon" width={30} height={30} /> */}
      {/* </Link> */}
    </div >
  )
}
