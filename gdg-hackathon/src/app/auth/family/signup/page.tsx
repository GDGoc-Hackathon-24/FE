"use client";

import InputField from "@/shared/ui/InputField"; // 공용 InputField 컴포넌트 가져오기
import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    oldPhone: "",
    gender: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("폼 데이터:", formData);
    // 서버로 데이터 전송 로직 추가 가능
  };

  return (
    <div className="flex items-center justify-center bg-yellow-50 rounded-lg">
      <div className="w-[1200px] h-[500px] max-w-4xl bg-white rounded-xl shadow-lg p-10">
      {/* 제목 */}
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-8">회원가입</h1>

        {/* 폼 */}
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-2 gap-8">
            {/* 왼쪽: 이름과 전화번호 입력 */}
            <div className="space-y-6">
                <InputField
                label="이름"
                placeholder="이름을 입력하세요"
                value={formData.name}
                onChange={(value) => handleInputChange("name", value)}
                />

                <InputField
                label="전화번호"
                placeholder="전화번호를 입력하세요"
                value={formData.phone}
                onChange={(value) => handleInputChange("phone", value)}
                />

                <InputField
                label="노인 전화번호"
                placeholder="노인 전화번호를 입력하세요"
                value={formData.oldPhone}
                onChange={(value) => handleInputChange("oldPhone", value)}
                />
            </div>

            {/* 오른쪽: 성별 선택 */}
            <div className="flex items-center justify-center">
              <GenderButtonGroup
                value={formData.gender}
                onChange={(gender) => handleInputChange("gender", gender)}
              />
            </div>
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            className="w-full bg-brand-green text-white py-4 rounded-lg text-lg shadow hover:bg-green-600"
          >
            다음
          </button>
        </form>
      </div>
    </div>
  );
}

type GenderButtonGroupProps = {
  value: string; // 현재 선택된 성별
  onChange: (gender: string) => void; // 성별 변경 핸들러
};

const GenderButtonGroup = ({ value, onChange }: GenderButtonGroupProps) => {
  const options = ["남성", "여성"];

  return (
    <div className="flex space-x-6">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={`w-48 h-48 flex items-center justify-center border rounded-2xl text-xl font-semibold ${
            value === option ? "bg-gray-200 border-gray-500" : "bg-white border-gray-300"
          } hover:bg-gray-100`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
