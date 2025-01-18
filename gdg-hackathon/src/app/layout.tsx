import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        
        {/* 콘텐츠 */}
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
