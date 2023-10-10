import { Navbar } from "@/ui/components/molecules/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Produkty",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<Navbar />
				<main className="mx-auto w-full max-w-7xl">
					{children}
					<footer className="footer flex items-center justify-between">
						<p>&copy; Copyright 2023 Next13master course</p>
						<p></p>
					</footer>
				</main>
			</body>
		</html>
	);
}
