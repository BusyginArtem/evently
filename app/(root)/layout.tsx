import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Viewport } from "next";

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
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
