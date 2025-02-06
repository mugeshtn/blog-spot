import type { Metadata } from "next";
import { Inter, Pacifico, Poppins } from "next/font/google";
import './globals.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
    title: "Blog spot Application",
    description: "A simple blog application with Next.js, TypeScript, and Inter.",
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = "true"/>
            <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            </head>
            
            <body className={`min-h-screen flex flex-col`}>
                <Header />

                {/* Main Content */}
                <main className="flex-grow p-4 bg-[#e8e8e8]">{children}</main>
                {/* Footer */}
                <Footer />
            </body>
        </html>
    )
}