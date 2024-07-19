import DocSidebar from "@/components/sideBar";
import { ScrollArea } from "@/components/ui/scroll-area";

export const docItems = [
	{
		title: "Getting Started",
		href: "/docs/getting-started",
		items: [
			{ title: "Introduction", href: "/docs" },
			{ title: "Installation", href: "/docs/installation" },
			{ title: "Configuration", href: "/docs/configuration" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
			{ title: "???", href: "/docs" },
		],
	},
];

export default function DocsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
				<aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
					<ScrollArea className="h-full py-6 pr-6 lg:py-8">
						<DocSidebar items={docItems} />
					</ScrollArea>
				</aside>
				<div className="">{children}</div>
			</div>
		</>
	);
}
