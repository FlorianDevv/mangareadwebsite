import { docItems } from "@/app/docs/layout";
import {
	NavigationMenu,
	NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Github, Menu, Star } from "lucide-react";
import Link from "next/link";
import NumberTicker from "./magicui/number-ticker";
import { ModeToggle } from "./modeToggle";
import NavItem from "./navItem";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
async function getGitHubStars() {
	try {
		const response = await fetch(
			"https://api.github.com/repos/FlorianDevv/MangaRead",
		);
		const data = await response.json();
		return data.stargazers_count;
	} catch (error) {
		console.error("Error fetching stars", error);
		return null;
	}
}

export default async function Navbar() {
	const stars = await getGitHubStars();

	return (
		<nav className="fixed top-0 left-0 w-full z-10 flex items-center justify-between px-4 lg:px-24 py-2 bg-white/25 dark:bg-black/25 backdrop-filter backdrop-blur-lg">
			<div className="flex items-center text-sm lg:gap-6">
				{/* Mobile Menu */}
				<div className="md:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu />
							</Button>
						</SheetTrigger>
						<SheetContent side="left">
							<SheetTitle>
								<SheetClose asChild>
									<Link href="/">
										<h1 className="text-xl font-bold cursor-pointer">
											Manga Read
										</h1>
									</Link>
								</SheetClose>
							</SheetTitle>
							<ScrollArea className="h-full py-2 pr-6">
								<NavigationMenu orientation="vertical" className="mt-10">
									<ul className="flex flex-col items-start gap-4">
										<NavigationMenuItem>
											<div>
												<SheetClose asChild>
													<Link href="/docs" className="font-medium">
														Documentation
													</Link>
												</SheetClose>
												<ul className="ml-6 space-y-2">
													{/* Dynamic data from docs */}
													{docItems[0].items.map((item) => (
														<li key={item.href} className="text-sm">
															<SheetClose asChild>
																<Link href={item.href}>{item.title}</Link>
															</SheetClose>
														</li>
													))}
												</ul>
											</div>
										</NavigationMenuItem>
										<NavigationMenuItem>
											<SheetClose asChild>
												<NavItem href="/demos">Demos</NavItem>
											</SheetClose>
										</NavigationMenuItem>
									</ul>
								</NavigationMenu>
							</ScrollArea>
						</SheetContent>
					</Sheet>
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:block">
					<NavigationMenu>
						<ul className="flex items-center gap-4">
							<NavigationMenuItem>
								<Link href="/">
									<h1 className="text-xl font-bold cursor-pointer">
										Manga Read
									</h1>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavItem href="/docs">Documentation</NavItem>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavItem href="/demos">Demos</NavItem>
							</NavigationMenuItem>
						</ul>
					</NavigationMenu>
				</div>
			</div>

			<div className="flex items-center gap-1 lg:gap-4">
				{stars !== null && (
					<a
						className="items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 hidden max-w-52 overflow-hidden whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
						target="_blank"
						href="https://github.com/FlorianDevv/MangaRead"
						rel="noreferrer"
					>
						<span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
						<div className="flex items-center">
							<span className="ml-1">Star on GitHub</span>{" "}
						</div>
						<div className="ml-2 flex items-center gap-1 text-sm md:flex">
							<Star
								size={16}
								className="transition-all duration-300 group-hover:text-yellow-300"
							/>
							<NumberTicker
								value={stars}
								className="text-white dark:text-black"
							/>
						</div>
					</a>
				)}
				<ModeToggle />
				<Button variant="ghost">
					<a
						href="https://github.com/FlorianDevv/Mangaread"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Github size={20} />
					</a>
				</Button>
			</div>
		</nav>
	);
}
