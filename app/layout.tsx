import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({
      variable: "--font-inter",
      subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
      variable: "--font-space-grotesk",
      subsets: ["latin"],
});

export const metadata: Metadata = {
      title: "Pablo Zallio - Web Developer",
      description: "Portafolio de desarrollador frontend Pablo Zallio",
};

export default function RootLayout({
      children,
}: Readonly<{
      children: React.ReactNode;
}>) {
      return (
            <html
                  lang="en"
                  suppressHydrationWarning
                  className={` scroll-smooth bg-background h-full ${inter.variable} ${spaceGrotesk.variable} font-sans  `}
            >
                  <body className="min-h-full flex flex-col  ">
                        <ThemeProvider
                              attribute="data-theme"
                             
                              >
                              {children}
                        </ThemeProvider>
                  </body>
            </html>
      );
}
