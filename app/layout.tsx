import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-spaceGrotesk",
  subsets:['latin']
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
        <ThemeProvider>
    <html
      lang="en"
      className={`  ${inter.variable} ${spaceGrotesk.variable} bg-background h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
      </ThemeProvider>
  );
}

