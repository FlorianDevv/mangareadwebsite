import DocSidebar from "@/components/sideBar";

const docItems = [
	{
		title: "Getting Started",
		href: "/docs/getting-started",
		items: [
			{ title: "Introduction", href: "/docs" },
			{ title: "Installation", href: "/docs/installation" },
			{ title: "Configuration", href: "/docs/configuration" },
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
			<DocSidebar items={docItems} />
			{children}
		</>
	);
}
