import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-yellow to-white flex flex-col items-center justify-center">
        {children}
  </div>
  );
}