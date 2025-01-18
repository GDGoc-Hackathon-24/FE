import React, { ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode; // 레이아웃 내부에 렌더링할 콘텐츠
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-yellow-50">
      {/* 상단 바 */}
      <header className="h-[90px] w-full bg-white shadow-lg border-b z-10">
        <div className="max-w-4xl mx-auto h-full flex items-center justify-between px-6">
          {/* 로고 */}
          <Link href="/" className="relative right-60 font-extrabold text-3xl text-gray-700 hover:text-brand-green">
            로고
          </Link>

          {/* 네비게이션 메뉴 */}
          <nav className="relative left-40 flex space-x-20">
            <Link href="/home/quiz" className="text-3xl text-gray-600 hover:text-brand-green font-3xl">
              퀴즈풀기
            </Link>
            <Link
              href="/home/diary/write"
              className="text-3xl text-gray-600 hover:text-brand-green"
            >
              일기쓰기
            </Link>
            <Link href="/home/diary/calender" className="text-3xl text-gray-600 hover:text-brand-green">
              내 일기 보기
            </Link>
            <Link href="/home/diary/write" className="text-3xl text-gray-600 hover:text-brand-green">
              내 정보
            </Link>
          </nav>
        </div>
      </header>

      {/* 페이지 콘텐츠 */}
      <main className="">
        {children}
      </main>
    </div>
  );
}
