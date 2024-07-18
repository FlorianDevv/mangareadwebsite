import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/themeProvider";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Manga Read",
	description: "Manga Read Presentation",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("font-sans antialiased  ", GeistSans.variable)}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
					<Navbar />
					<Providers>
						<div className="relative flex min-h-screen flex-col pt-10">
							{children}
						</div>
					</Providers>
				</ThemeProvider>
			</body>
		</html>
	);
}
