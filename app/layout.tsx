import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Malaysia Discipleship Centre | Go Make Disciples of All Nations",
  description:
    "Malaysia Discipleship Centre is a Christ-centred, Word-centred church committed to making disciples and disciple makers in obedience to the Great Commission.",
  icons: {
    icon: [
      {
        url: "/mdc-logo-new.jpeg",
        type: "image/jpeg"
      }
    ],
    apple: [
      {
        url: "/mdc-logo-new.jpeg",
        type: "image/jpeg"
      }
    ]
  },
  openGraph: {
    title: "Malaysia Discipleship Centre",
    description:
      "A Christ-centred, Word-centred church committed to making disciples and disciple makers in Malaysia and beyond.",
    type: "website",
    locale: "en_MY"
  },
  metadataBase: new URL("https://malaysiadiscipleshipcentre.org")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY">
      <body>{children}</body>
    </html>
  );
}
