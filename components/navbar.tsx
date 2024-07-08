"use client";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Github } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Étape 1
import { ModeToggle } from "./modeToggle";

export default function Navbar() {
	const pathname = usePathname();

	// Fonction pour vérifier si le lien est actif
	const isActive = (path: string) => {
		return pathname === path;
	};

	return (
		<nav className="fixed top-0 left-0 w-full z-10 flex items-center justify-between px-24 py-4 bg-white/25 dark:bg-black/25 backdrop-filter backdrop-blur-lg shadow-md">
			<div className="flex items-center gap-4">
				<Link href="/" legacyBehavior passHref>
					<h1 className="text-2xl font-bold cursor-pointer">Manga Read</h1>
				</Link>
				<NavigationMenu>
					<ul className="flex items-center gap-4">
						<NavigationMenuItem>
							<Link href="/docs" legacyBehavior passHref>
								<NavigationMenuLink
									className={`cursor-pointer transition-colors hover:text-foreground/80 ${isActive("/docs") ? "text-foreground" : "text-foreground/60"}`}
								>
									Documentation
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/demos" legacyBehavior passHref>
								<NavigationMenuLink
									className={`cursor-pointer transition-colors hover:text-foreground/80 ${isActive("/demos") ? "text-foreground" : "text-foreground/60"}`}
								>
									Demos
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</ul>
				</NavigationMenu>
			</div>
			<div className="flex items-center gap-4">
				<ModeToggle />
				<a
					href="https://github.com/FlorianDevv/Mangaread"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Github size={24} />
				</a>
			</div>
		</nav>
	);
}
