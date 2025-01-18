"use client";
import { useRouter } from "next/navigation";

interface CardProps {
  title: string; // 카드 제목
  description: string; // 카드 설명
  buttonText: string; // 버튼 텍스트
  onClick: () => void; // 버튼 클릭 핸들러
  url: string | null; // 라우트 URL
}

export default function Card({ title, description, buttonText, url }: CardProps) {
  const router = useRouter();

  return (
    <div className="h-[300px] w-full max-w-[700px] p-6 bg-white rounded-lg shadow-lg border border-gray-700 flex flex-col justify-between mx-auto">
      {/* 제목과 설명 */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        <p className="text-lg text-gray-600">{description}</p>
      </div>

      {/* 버튼 */}
      <div className="text-right">
        <button
          onClick={() => router.push(url || "/")}
          className="text-green-600 font-semibold hover:underline transition-all"
        >
          {buttonText}
          <span className="ml-1">→</span>
        </button>
      </div>
    </div>
  );
}
