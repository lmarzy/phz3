import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "phz3.net";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const image = `${protocol}://${host}/og.png`;

  return {
    title: "phz3 — UI & JavaScript development",
    description: "Independent web development focused on thoughtful interfaces, robust JavaScript and useful digital products.",
    openGraph: {
      title: "phz3 — Interfaces that work.",
      description: "UI design & JavaScript development.",
      images: [{ url: image, width: 1200, height: 630, alt: "phz3 — Interfaces that work." }],
    },
    twitter: { card: "summary_large_image", images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
