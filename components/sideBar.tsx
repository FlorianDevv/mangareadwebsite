import { cn } from "@/lib/utils";
import Link from "next/link";
import NavItem from "./navItem";

// Define the type for a single documentation item
type DocItem = {
	title: string;
	href: string;
	items?: DocItem[];
};

// Define the props for our component
type DocSidebarProps = {
	items: DocItem[];
	className?: string;
};

const DocSidebarItem = ({
	item,
	depth = 0,
}: {
	item: DocItem;
	depth?: number;
}) => (
	<li>
		{item.items ? (
			<>
				<span className="font-bold">{item.title}</span>
				<ul className="ml-4">
					{item.items.map((subItem) => (
						<DocSidebarItem
							key={subItem.href}
							item={subItem}
							depth={depth + 1}
						/>
					))}
				</ul>
			</>
		) : (
			<NavItem href={item.href}>{item.title}</NavItem>
		)}
	</li>
);

export default function DocSidebar({ items, className }: DocSidebarProps) {
	return (
		<nav className={cn("w-64 h-full overflow-y-auto py-8 px-4", className)}>
			<ul className="space-y-2">
				{items.map((item) => (
					<DocSidebarItem key={item.href} item={item} />
				))}
			</ul>
		</nav>
	);
}
