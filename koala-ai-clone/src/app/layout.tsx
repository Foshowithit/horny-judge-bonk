import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "GET BONK'D | $BONKD",
  description: "GET BONK'D - Not financial advice. Just bonks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/images/bonk-pfp.png" />
        <link rel="preload" as="image" href="/images/bonk-main-meme.png" />
        <link rel="preload" as="image" href="/images/bonk-dog.png" />
        <link rel="preload" as="image" href="/images/bonk-meme.png" />
        <meta name="image-suppression" content="no" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
