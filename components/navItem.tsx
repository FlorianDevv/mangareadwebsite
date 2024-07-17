"use client";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
// components/NavItem.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

interface NavItemProps {
	href: string;
	children: React.ReactNode;
}

export default function NavItem({ href, children }: NavItemProps) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link href={href} legacyBehavior passHref>
			<Button
				variant="ghost"
				className={`transition-colors hover:text-foreground/80 ${
					isActive ? "text-foreground" : "text-foreground/60"
				}`}
			>
				{children}
			</Button>
		</Link>
	);
}
