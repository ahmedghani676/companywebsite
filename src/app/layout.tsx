// app/layout.tsx (or app/layout.js for JS)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexusSystem",  // This will be used for the page title
  description: "NexusSystem - A platform for managing your systems",  // A brief description of your site
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* No need to manually add <title> here, Next.js will automatically use metadata */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
