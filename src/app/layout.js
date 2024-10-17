import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Miservo",
  description: "This is for Miservo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className + ' font-inter'}>{children}</body>
    </html>
  );
}
