import { Github } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./modeToggle";

export default function Navbar() {
	return (
		<nav className="fixed top-0 left-0 w-full z-10 flex items-center justify-between px-24 py-4 bg-white/25 dark:bg-black/25 backdrop-filter backdrop-blur-lg shadow-md">
			<div className="flex items-center gap-4">
				<Link href="/">
					<h1 className="text-2xl font-bold">Manga Read</h1>
				</Link>
				<ul className="flex items-center gap-4">
					<li>
						<Link href="/docs">Docs</Link>
					</li>
					<li>
						<Link href="/demos">Demos</Link>
					</li>
				</ul>
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
