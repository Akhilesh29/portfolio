import type { Metadata, Viewport } from "next";
import "./globals.css";
import { NavDock } from "./NavDock";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

/** Shown in link previews (iMessage, Slack, LinkedIn, etc.). */
const profileImageUrl =
  "https://avatars.githubusercontent.com/u/98381403?v=4";

export const metadata: Metadata = {
  metadataBase: new URL("https://akhilesh.dev"),
  title: "akhilesh",
  description: "software engineer building reliable systems.",
  openGraph: {
    title: "akhilesh",
    description: "software engineer building reliable systems.",
    url: "https://akhilesh.dev",
    type: "website",
    images: [
      {
        url: profileImageUrl,
        width: 460,
        height: 460,
        alt: "akhilesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "akhilesh",
    description: "software engineer building reliable systems.",
    images: [profileImageUrl],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <NavDock />
      </body>
    </html>
  );
}
