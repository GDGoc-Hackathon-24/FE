"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignUpPage() {
    const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
    const router = useRouter();

    const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gender: "",
    image: selectedProfile
  });

  useEffect(() => {
    const data = localStorage.getItem("signupData");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (selectedProfile) {
      setFormData((prev) => ({
        ...prev,
        image: selectedProfile,
      }));
    }
  }, [selectedProfile]);

  const profiles = [
    { id: "1", label: "프로필 1" },
    { id: "2", label: "프로필 2" },
    { id: "3", label: "프로필 3" },
    { id: "4", label: "프로필 4" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProfile) {
        localStorage.setItem("signupData", JSON.stringify(formData));
        console.log("선택된 프로필:", selectedProfile);
        router.push("/auth/senior/signup3");
      // 다음 페이지로 이동하거나 상태 전송 로직 추가
    } else {
      alert("프로필을 선택해주세요!");
    }
  };



  return (
    <div className="flex items-center justify-center bg-yellow-50">
      <div className="w-[1200px] h-[425px] bg-white rounded-xl shadow-lg p-8">
        {/* 제목 */}
        <h1 className="text-center text-xl font-bold text-gray-800 mb-6">
          프로필 아이콘을 골라주세요.
        </h1>

        {/* 프로필 버튼 그룹 */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {profiles.map((profile) => (
            <button
              key={profile.id}
              type="button"
              className={`flex flex-col items-center justify-center w-[250px] h-[250px] border rounded-lg ${
                selectedProfile === profile.id
                  ? "bg-green-100 border-green-500"
                  : "bg-white border-gray-300"
              } hover:bg-gray-100`}
              onClick={() => setSelectedProfile(profile.id)}
            >
              <div className="w-12 h-12 bg-gray-200 rounded-full mb-2"></div>
              <span className="text-sm text-gray-700">{profile.label}</span>
            </button>
          ))}
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-brand-green text-white py-3 rounded-lg text-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          다음
        </button>
      </div>
    </div>
  );
}
