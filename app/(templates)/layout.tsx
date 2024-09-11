import type { Metadata } from "next";
import { Hina_Mincho } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/app/provider";

// Googleフォントの読み込み
const font = Hina_Mincho({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-notojp",
});

export const metadata: Metadata = {
  title: "Tsubasa LP Templates",
  description: "LP Templates using Aceternity UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="stylesheet" href="" />
      </head>
      <body className={`${font.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
