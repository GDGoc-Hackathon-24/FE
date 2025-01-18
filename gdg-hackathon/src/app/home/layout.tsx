import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="ko">
      <div className="min-h-screen bg-gray-100">
        {/* 상단 바 */}
        <header className="bg-brand-green border-b shadow-sm">
          <nav className="flex justify-center space-x-8 py-4">
            <a href="/home/quiz" className="text-gray-700 hover:font-bold">
              퀴즈풀기
            </a>
            <a href="/home/write" className="text-gray-700 hover:font-bold">
              일기쓰기
            </a>
            <a href="/home/diary" className="text-gray-700 hover:font-bold">
              내 일기 보기
            </a>
            <a href="/home/profile" className="text-gray-700 hover:font-bold">
              내 정보
            </a>
          </nav>
        </header>

        
        

        {/* 콘텐츠 영역 */}
        <div className="flex justify-center items-center p-8">{children}</div>
      </div>
    </main>
  );
}
