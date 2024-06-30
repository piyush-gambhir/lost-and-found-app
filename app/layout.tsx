import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// import NavigationMenuDemo from "@/components/Header";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Lost And Found App",
  description: "Lost And Found App",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
