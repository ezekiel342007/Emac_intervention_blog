"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Suspense, useRef, JSX } from "react";
import ImagePlaceholder from "@/components/function/image-placeholder";

export default function BackgroundCarousel(): JSX.Element {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      plugins={[plugin.current]}
      className="mb-5"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
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
  )
}
