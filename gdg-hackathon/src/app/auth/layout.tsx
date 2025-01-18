import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-b from-brand-yellow to-white flex flex-col items-center">
        {children}
  </div>
  );
}