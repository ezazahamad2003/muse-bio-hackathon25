import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muse Bio — Menstrual Stem Cells",
  description:
    "Every cycle is an opportunity. Banking menstrual blood–derived stem cells with at-home, consent-first collection.",
  openGraph: {
    title: "Muse Bio — Menstrual Stem Cells",
    description:
      "Every cycle is an opportunity. Banking menstrual blood–derived stem cells with at-home, consent-first collection.",
    images: ["/og/og.jpg"],
  },
  twitter: { card: "summary_large_image", images: ["/og/og.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
