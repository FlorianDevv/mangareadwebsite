"use client";
import { Parallax } from "react-scroll-parallax";

interface ParallaxWrapperProps {
	children: React.ReactNode;
	translateY?: [number, number];
	scale?: [number, number];
	opacity?: [number, number];
	className?: string;
}

const ParallaxWrapper = ({
	children,
	translateY,
	scale,
	opacity,
	className,
}: ParallaxWrapperProps) => {
	return (
		<Parallax
			translateY={translateY}
			scale={scale}
			opacity={opacity}
			className={className}
		>
			{children}
		</Parallax>
	);
};

export default ParallaxWrapper;
