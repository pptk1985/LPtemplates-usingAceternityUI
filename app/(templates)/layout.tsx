import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import "@/app/globals.css";
import { ThemeProvider } from "@/app/provider";

const font = Noto_Sans_JP({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tsubasa LP Templates",
  description: "LP Templates using Aceternity UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={font.className}>
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
