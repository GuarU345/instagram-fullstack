import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Sugerences } from "@/components/Sugerences";

export const metadata: Metadata = {
  title: "Instagram Clone",
  description: "Generated to learn Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grid grid-cols-[230px,1fr] p-6">
        <aside className="flex flex-col gap-y-2 p-2 border-r-2">
          <Navbar />
        </aside>
        <main className="overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
