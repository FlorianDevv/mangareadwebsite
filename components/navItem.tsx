"use client";
// components/NavItem.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

interface NavItemProps {
	href: string;
	children: React.ReactNode;
	className?: string;
}

export default function NavItem({ href, children, className }: NavItemProps) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link href={href}>
			<Button
				variant="ghost"
				className={`transition-colors hover:text-foreground/80 ${
					isActive ? "text-foreground" : "text-foreground/60"
				} ${className}`}
			>
				{children}
			</Button>
		</Link>
	);
}
