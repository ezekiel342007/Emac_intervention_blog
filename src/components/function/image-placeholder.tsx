"use client";

interface ImagePlaceholderProps {
  width: number;
  height: number;
}

export default function ImagePlaceholder({ width, height }: ImagePlaceholderProps) {
  return (
    <div className={`w-[${width}] h-[${height}] bg-gray-600 rounded-bl-2xl rounded-tl-2xl m-4`}>

    </div>
  )
}
