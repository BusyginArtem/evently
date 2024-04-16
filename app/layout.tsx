import "@uploadthing/react/styles.css";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for event management.",
  icons: {
    icon: "/assets/images/logo.svg",
  },
  viewport: {
    width: "device-width",
    height: "device-height",
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
  },
};

// export const viewport: Viewport = {
//   width: "device-width",
//   height: "device-height",
//   initialScale: 1,
//   maximumScale: 1,
//   minimumScale: 1,
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta> */}
        </head>
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
