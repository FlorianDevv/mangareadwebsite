import fs from "node:fs";
import path from "node:path";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
// Ajout des imports nécessaires pour le Breadcrumb

export async function generateStaticParams() {
	const files = getAllFiles();
	return files.map((file) => ({
		slug: file.replace(/\.mdx?$/, "").split("/"),
	}));
}

export default async function DocPage({
	params,
}: {
	params: { slug: string[] };
}) {
	const slug =
		params.slug && params.slug.length > 0
			? params.slug.join("/")
			: "introduction";
	const filePath = path.join(process.cwd(), "mdx", `${slug}.mdx`);

	if (!fs.existsSync(filePath)) {
		return <h1 className="prose pt-5">404 - Page Not Found</h1>;
	}

	const source = fs.readFileSync(filePath, "utf8");
	const { content } = matter(source);

	const breadcrumbItems = params.slug ? params.slug : ["introduction"];

	return (
		<div className="mt-20">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
					</BreadcrumbItem>
					{breadcrumbItems.map((part, index) => (
						<>
							<BreadcrumbSeparator
								key={`separator-${
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									index
								}`}
							/>
							{/* biome-ignore lint/suspicious/noArrayIndexKey: <explanation> */}
							<BreadcrumbItem key={index}>
								<BreadcrumbLink className="text-foreground">
									{capitalize(part)}
								</BreadcrumbLink>
							</BreadcrumbItem>
						</>
					))}
				</BreadcrumbList>
			</Breadcrumb>
			<article className="prose lg:prose-xl dark:prose-invert mt-2">
				<MDXRemote source={content} />
			</article>
		</div>
	);
}

function getAllFiles(dir = "mdx", resultArray: string[] = []) {
	let localResultArray = [...resultArray];
	const files = fs.readdirSync(path.join(process.cwd(), dir));

	for (const file of files) {
		if (fs.statSync(path.join(process.cwd(), dir, file)).isDirectory()) {
			localResultArray = localResultArray.concat(
				getAllFiles(path.join(dir, file), localResultArray),
			);
		} else {
			localResultArray.push(path.join(dir, file));
		}
	}

	return localResultArray;
}

// Fonction pour capitaliser la première lettre de chaque partie de l'URL
function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
