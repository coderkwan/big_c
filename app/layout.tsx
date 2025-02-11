import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";

const geistSans = Geist({
        variable: "--font-geist-sans",
        subsets: ["latin"],
});

const geistMono = Geist_Mono({
        variable: "--font-geist-mono",
        subsets: ["latin"],
});

export const metadata: Metadata = {
        title: "Big C Printworks",
        icons: {
                icon: "favicon.ico",
        },
        description:
                "Branding, Printing, Signages, Banners, Work wear, Corporate wear, Safety wear",
};

export default function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) {
        return (
                <html lang="en">
                        <body
                                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                        >
                                <Nav />
                                <div className="mx-auto max-w-[1200px] px-4">
                                        {children}
                                </div>
                        </body>
                </html>
        );
}
