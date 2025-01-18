"use client";
import InputField from "@/shared/ui/InputField";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SeniorPage() {
  const [name, setName] = useState(""); // 이름 상태
  const [phone, setPhone] = useState(""); // 전화번호 상태

  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("입력된 이름:", name);
    console.log("입력된 전화번호:", phone);

    // 서버로 데이터 전송 (예시)
    fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone }),
    })
      .then((response) => response.json())
      .then((data) => console.log("서버 응답:", data))
      .catch((err) => console.error("에러 발생:", err));
  };

  return (
    <div>
        <h1 className="text-center text-xl font-bold text-gray-800 mb-6">
          로그인하고 내 추억 퀴즈를 풀어보세요!
        </h1>

    <div className="flex items-center justify-center bg-yellow-50 rounded-lg">


      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        {/* 제목 */}


        {/* 폼 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 이름 입력 */}
          <InputField
            label="이름"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={setName} // 상태 업데이트 함수 전달
          />

          {/* 전화번호 입력 */}
          <InputField
            label="전화번호"
            placeholder="전화번호를 입력하세요"
            value={phone}
            onChange={setPhone} // 상태 업데이트 함수 전달
          />

          {/* 제출 버튼 */}
          <button
            type="submit"
            className="w-full bg-brand-green text-white text-sm font-medium py-2 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            로그인
          </button>
          <button
            type="button"
            className="w-full bg-white text-brand-green border-gray-300 border-2 text-sm font-medium py-2 rounded-lg hover:bg-green-100"
            onClick = {() => {router.push('/auth/senior/signup')}}
          >
            회원가입
          </button>

        </form>
      </div>
    </div>
    </div>
  );
}
