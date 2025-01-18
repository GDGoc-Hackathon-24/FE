"use client";
import { signInFamily } from "@/services/UseService";
import InputField from "@/shared/ui/InputField";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FamilyPage() {
  const [name, setName] = useState(""); // 이름 상태
  const [phone, setPhone] = useState(""); // 전화번호 상태
  const [seniorPhone, setSeniorPhone] = useState(""); // 노인 전화번호 상태


  const router = useRouter();

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const form = {
      name: name,
      phoneNumber: phone
    }
    // 서버로 데이터 전송 (예시)
    try {
      const response = await signInFamily(form);
      console.log('로그인 성공! ID:', response.data.id);
    } catch (error) {
      console.error('로그인 실패:', error);
    }

  };

  return (
    <>
        <h1 className="text-center text-xl font-bold text-gray-800 mb-6">
          로그인하고 내 노인에게 추억 퀴즈를 제출해보세요!
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

        <InputField
            label="노인 전화번호"
            placeholder="노인 전화번호를 입력하세요"
            value={seniorPhone}
            onChange={setSeniorPhone} // 상태 업데이트 함수 전달
          />


          {/* 제출 버튼 */}
          <button
            type="submit"
            className="w-full bg-brand-green text-white text-sm font-medium py-2 rounded-lg shadow hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            로그인
          </button>
          <button
            type="button"
            className="w-full bg-white text-brand-green border-gray-300 border-2 text-sm font-medium py-2 rounded-lg hover:bg-green-100"
            onClick = {() => {router.push('/auth/family/signup')}}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
