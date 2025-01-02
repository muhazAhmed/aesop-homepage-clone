import "./globals.css";
import HeaderLayout from "./HeaderLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeaderLayout />
        {children}
      </body>
    </html>
  );
}
