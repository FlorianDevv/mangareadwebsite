import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ReactNode } from "react";

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
	// Utilisez "Introduction" comme slug par défaut si params.slug est vide ou non défini
	const slug =
		params.slug && params.slug.length > 0
			? params.slug.join("/")
			: "introduction";
	const filePath = path.join(process.cwd(), "mdx", `${slug}.mdx`);

	if (!fs.existsSync(filePath)) {
		return <h1>404 - Page Not Found</h1>;
	}

	const source = fs.readFileSync(filePath, "utf8");
	const { content, data } = matter(source);
	const { frontmatter } = await compileMDX({
		source: content,
		options: { parseFrontmatter: true },
	});

	return (
		<article className="prose lg:prose-xl dark:prose-invert">
			<h1>{frontmatter.title as ReactNode}</h1>
			<MDXRemote source={content} />
		</article>
	);
}

function getAllFiles(dir = "mdx", resultArray: string[] = []) {
	const files = fs.readdirSync(path.join(process.cwd(), dir));

	for (const file of files) {
		if (fs.statSync(path.join(process.cwd(), dir, file)).isDirectory()) {
			resultArray = getAllFiles(path.join(dir, file), resultArray);
		} else {
			resultArray.push(path.join(dir, file));
		}
	}

	return resultArray;
}
