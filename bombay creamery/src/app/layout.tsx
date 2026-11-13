import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Bombay Creamery | Frozen Desserts & Business Enquiries", template: "%s | Bombay Creamery" },
  description: "Explore Bombay Creamery product categories and enquire about dealership, distributorship, super stockist and bulk supply opportunities.",
  openGraph: { type: "website", siteName: site.name, title: "Bombay Creamery", description: "Frozen desserts, dairy beverages and business enquiries." },
  robots: { index: true, follow: true }
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>;
}
