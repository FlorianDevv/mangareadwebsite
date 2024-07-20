import ButtonNumorphism from "@/components/buttonNumorphism";

import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import ParallaxWrapper from "@/components/parallaxWrapper";
import homeImage from "@/public/home.webp";
// import { BorderBeam } from "@/components/magicui/border-beam";
import { Book, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
	return (
		<div className="overflow-x-hidden ">
			{/* Hero Section */}
			<ParallaxWrapper
				translateY={[-50, 50]}
				className="h-screen flex flex-col items-center justify-center min-h-screen overflow-x-hidden -mb-96"
			>
				<BlurFade delay={0.25} inView>
					<h1 className="md:text-6xl text-4xl font-bold text-center">
						Manga Read
					</h1>
				</BlurFade>
				<BlurFade delay={0.35} inView>
					<p className="md:text-2xl text-lg text-center mt-4 mx-8">
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
					scale={[1, 2.5]}
					className="min-h-screen flex items-center justify-center px-6"
				>
					<div className="relative w-full max-w-2xl">
						<Image
							src={homeImage}
							alt="Bienvenue"
							className="rounded-lg object-contain"
							placeholder="blur"
						/>
						<BorderBeam />
						<div className="absolute inset-x-0 bottom-0 h-2/4 bg-gradient-to-b from-transparent to-black opacity-80" />
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
						className="dark:hidden block"
					/>
					<img
						src="https://github-readme-stats.vercel.app/api/pin/?username=FlorianDevv&repo=MangaRead&theme=github_dark"
						alt="Github"
						className="hidden dark:block"
					/>
				</a>
			</div>

			{/* Additional sections can be added here */}
		</div>
	);
}
