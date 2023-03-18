import "./globals.css";

export const metadata = {
  title: "Eugene Teu",
  description: "Eugene Teu portfolio site",
  openGraph: {
    title: "Eugene Teu",
    description: "Eugene Teu portfolio site",
  },
  icons: {
    icon: "/user.svg",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
