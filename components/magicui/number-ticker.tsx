"use client";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export default function NumberTicker({
	value,
	direction = "up",
	className,
	delay = 0,
}: {
	value: number;
	direction?: "up" | "down";
	className?: string;
	delay?: number; // delay in s
}) {
	const ref = useRef<HTMLSpanElement>(null);
	const motionValue = useMotionValue(direction === "down" ? value : 0);

	const config = {
		damping: value < 10 ? 80 : 60,
		stiffness: value < 10 ? 50 : 100,
	};

	const springValue = useSpring(motionValue, config);
	const isInView = useInView(ref, { once: true, margin: "0px" });

	useEffect(() => {
		if (isInView) {
			setTimeout(() => {
				motionValue.set(direction === "down" ? 0 : value);
			}, delay * 1000);
		}
	}, [motionValue, isInView, delay, value, direction]);

	useEffect(() => {
		const unsubscribe = springValue.on("change", (latest) => {
			if (ref.current) {
				ref.current.textContent = Intl.NumberFormat("en-US").format(
					Math.round(latest),
				);
			}
		});

		return () => unsubscribe();
	}, [springValue]);

	return (
		<span
			className={cn(
				"inline-block tabular-nums text-black dark:text-white tracking-wider",
				className,
			)}
			ref={ref}
		/>
	);
}
