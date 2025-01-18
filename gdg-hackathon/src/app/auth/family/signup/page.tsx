"use client";

import InputField from "@/shared/ui/InputField"; // 공용 InputField 컴포넌트 가져오기
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    relationship: "",
    gender: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리


  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true)
/*    try {
      console.log(formData)
      const result = await createFamily(formData);
      console.log('가족 정보 추가 성공:', result);
      alert('가족 정보가 성공적으로 추가되었습니다!');
    } catch (error) {
      console.error('가족 정보 추가 실패:', error);
      alert('가족 정보를 추가하는 중 오류가 발생했습니다.');
    }*/    
  };


  return (
    <div className="flex items-center justify-center bg-yellow-50 rounded-lg mt-16">
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
                label="가족 전화번호"
                placeholder="가족 전화번호를 입력하세요"
                value={formData.phoneNumber}
                onChange={(value) => handleInputChange("phoneNumber", value)}
                />

                <InputField
                label="관계"
                placeholder="가족과의의 관계를 입력하세요"
                value={formData.relationship}
                onChange={(value) => handleInputChange("relationship", value)}
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
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg max-h-[80vh] overflow-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            축하합니다!
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            회원가입이 완료되었습니다.
          </p>
          <button
            onClick={()=> {router.push('/auth/family')}}
            className="bg-green-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
          >
            로그인 페이지 이동
          </button>
        </div>
      </div>
      )}
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
