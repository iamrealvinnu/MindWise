import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mindwise | A New Era of Mental Fitness",
  description: "Scientifically designed events and structured activities to help you develop a resilient, balanced, and high-performing mind. Led by certified psychologists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased selection:bg-brand-primary selection:text-white`}>
        {children}
      </body>
    </html>
  );
}