import ButtonNumorphism from "@/components/buttonNumorphism";

// import { BorderBeam } from "@/components/magicui/border-beam";
import { Book, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import ParallaxWrapper from "@/components/parallaxWrapper";

export default function Home() {
	return (
		<div className="overflow-x-hidden">
			{/* Hero Section */}
			<ParallaxWrapper
				translateY={[-50, 50]}
				className="h-screen flex flex-col items-center justify-center min-h-screen overflow-x-hidden"
			>
				<BlurFade delay={0.25} inView>
					<h1 className="text-6xl font-bold text-center">Manga Read</h1>
				</BlurFade>
				<BlurFade delay={0.35} inView>
					<p className="text-2xl text-center mt-4">
						A self-hosted website for reading local manga and watching anime
						videos.
					</p>
					<p className="text-2xl text-center mt-4">🚧 Working Progress 🚧</p>
					<div className="flex justify-center mt-8 space-x-2">
						<Link href="/docs/installation">
							<ButtonNumorphism>Get Started</ButtonNumorphism>
						</Link>
						<Link href="/docs">
							<ButtonNumorphism>Doc</ButtonNumorphism>
						</Link>
					</div>
				</BlurFade>

				<div className="w-full h-1/2 mt-10" />
			</ParallaxWrapper>

			{/* Feature Section with Zoom and Slide Effect */}
			<BlurFade delay={0.5}>
				<ParallaxWrapper
					scale={[1, 2]}
					translateY={[-30, -20]}
					className="h-screen flex items-center justify-center"
				>
					<div className="relative h-full w-full max-w-4xl ">
						<Image src="/home.webp" alt="Bienvenue" fill />
						<div className="absolute -bottom-2 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-black filter opacity-95 blur-sm" />
						<BorderBeam />
					</div>
				</ParallaxWrapper>
			</BlurFade>

			{/* Text Reveal Section */}
			<ParallaxWrapper
				opacity={[0, 1]}
				className="h-screen flex items-center justify-center"
			>
				<p className="text-2xl text-center max-w-2xl px-4">
					🚧 Working Progress 🚧
				</p>
			</ParallaxWrapper>

			<div className="h-screen flex items-center justify-center text-center flex-col space-y-10">
				<div className="h-10 w-10 rounded-sm bg-[var(--from-color)] flex items-center justify-center shadow-lg backdrop-blur-sm">
					<Book />
				</div>
				<h1 className="font-bold mt-6 mx-auto md:max-w-none lg:mx-0 leading-tight text-4xl sm:text-5xl">
					<span className=" bg-clip-text bg-gradient-to-r from-[var(--from-color)] to-[var(--to-color)]">
						Open Source.
					</span>
					<br />
					<span className="inline-block text-soft mt-2 text-[2rem] sm:mt-3 sm:text-5xl">
						Built transparently.
					</span>
				</h1>
				<a
					href="https://github.com/FlorianDevv/MangaRead"
					target="_blank"
					rel="noreferrer"
				>
					<ButtonNumorphism>
						See Github <Github />
					</ButtonNumorphism>
				</a>
				<a
					href="https://github.com/FlorianDevv/MangaRead"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="https://github-readme-stats.vercel.app/api/pin/?username=FlorianDevv&repo=MangaRead&theme=swift"
						alt="Github"
					/>
				</a>
			</div>

			{/* Additional sections can be added here */}
		</div>
	);
}
