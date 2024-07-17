import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/themeProvider";
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
			<body className={`mt-20 ${inter.className}`}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
					<Navbar />
					<Providers>{children}</Providers>
				</ThemeProvider>
			</body>
		</html>
	);
}
