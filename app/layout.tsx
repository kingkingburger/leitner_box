import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/thema-provider";
import { NavigationHeader } from "@/components/navigation/navigation-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leitner Box",
  description: "Save your memory",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
