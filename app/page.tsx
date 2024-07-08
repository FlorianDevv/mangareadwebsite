"use client";
import ButtonNumorphism from "@/components/buttonNumorphism";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
	return (
		<ParallaxProvider>
			<div className="min-h-screen overflow-x-hidden">
				{/* Hero Section */}
				<Parallax
					translateY={[-50, 50]}
					className="h-screen flex flex-col items-center justify-center"
				>
					<BlurFade delay={0.25} inView>
						<h1 className="text-6xl font-bold text-center">Manga Read</h1>
					</BlurFade>
					<BlurFade delay={0.35} inView>
						<p className="text-2xl text-center mt-4">Working Progress</p>
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
				</Parallax>

				{/* Feature Section with Zoom and Slide Effect */}
				<Parallax
					scale={[1, 2]}
					translateY={[-30, -20]}
					className="h-screen flex items-center justify-center"
				>
					<Image
						src="/home.webp"
						alt="Bienvenue"
						fill
						className=" object-contain"
					/>
				</Parallax>

				{/* Text Reveal Section */}
				<Parallax
					opacity={[0, 1]}
					className="h-screen flex items-center justify-center"
				>
					<p className="text-2xl text-center max-w-2xl px-4">
						Working Progress
					</p>
				</Parallax>

				{/* Additional sections can be added here */}
			</div>
		</ParallaxProvider>
	);
}
