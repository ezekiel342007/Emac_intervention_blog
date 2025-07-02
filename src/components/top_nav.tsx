'use client';

import Link from "next/link";
import Button from "./button";
import Image from "next/image";

export default function TopNav() {
	return (
		<div className="flex flex-row justify-around mt-4 items-center">
			<Image
				src="/Gemini_Generated_Image_4mfn2k4mfn2k4mfn-removebg-preview(1).png"
				alt="logo"
				width={30}
				height={30}
				className=""
			/>

			<div className="w-fit flex justify-around gap-4">
				<Link href={""}>Topics</Link>
				<Link href={""}>Watching</Link>
				<Link href={""}>Write</Link>
			</div>
			<div className="w-fit">
				<Button text="Log in" />
			</div>
		</div>
	);
}
