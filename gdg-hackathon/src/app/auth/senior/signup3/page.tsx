"use client";

import { useEffect, useState } from "react";

interface PreviousData {
  name: string;
  phone: string;
  gender: string;
  image?: string;
}

interface Answers {
  environment: string;
  childrenMale: string;
  childrenFemale: string;
  hobby: string;
  medicine: string;
}

export default function QuizPage() {
  const [previousData, setPreviousData] = useState<PreviousData | null>(null);
  const [answers, setAnswers] = useState<Answers>({
    environment: "",
    childrenMale: "",
    childrenFemale: "",
    hobby: "",
    medicine: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };


  useEffect(() => {
    const storedData = localStorage.getItem("signupData");
    if (storedData) {
      setPreviousData(JSON.parse(storedData) as PreviousData);
    }
  }, []);

  const handleAnswerChange = (key: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullData = {
      ...previousData,
      ...answers,
    };
    setIsModalOpen(true);

    console.log("최종 제출 데이터:", fullData);
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-6 mt-16">
        기본 정보를 토대로 퀴즈를 내드릴 거예요.
      </h1>
      <p className="text-center text-base text-gray-500 mb-10">
        가입 초반에 입력한 기본 정보와 관련된 문제를 제출해요.
      </p>

      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg px-12 py-10 space-y-10 mt-8 mb-10">
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* 첫 번째 질문 */}
          <div>
            <h2 className="font-bold text-lg text-gray-800 mb-6">
              현재 거주 환경이 어떻게 되세요?
            </h2>
            <div className="flex space-x-6">
              {[
                { label: "도시에 살아요", value: "도시" },
                { label: "시골에 살아요", value: "시골" },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`flex-1 py-4 px-6 border rounded-lg text-center font-bold text-lg ${
                    answers.environment === option.value
                      ? "bg-green-100 border-green-500"
                      : "bg-white border-gray-300"
                  } hover:bg-gray-100`}
                  onClick={() => handleAnswerChange("environment", option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* 두 번째 질문 */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-6">
              자식이 얼마나 있으신가요?
            </h2>
            <div className="flex space-x-6">
              <div className="flex flex-col items-center space-y-3">
                <label
                  htmlFor="childrenMale"
                  className="text-base font-bold text-gray-600"
                >
                  남
                </label>
                <input
                  id="childrenMale"
                  type="number"
                  min="0"
                  value={answers.childrenMale}
                  onChange={(e) =>
                    handleAnswerChange("childrenMale", e.target.value)
                  }
                  className="w-20 px-3 py-2 border rounded-lg text-center font-bold focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="flex flex-col items-center space-y-3">
                <label
                  htmlFor="childrenFemale"
                  className="text-base font-bold text-gray-600"
                >
                  녀
                </label>
                <input
                  id="childrenFemale"
                  type="number"
                  min="0"
                  value={answers.childrenFemale}
                  onChange={(e) =>
                    handleAnswerChange("childrenFemale", e.target.value)
                  }
                  className="w-20 px-3 py-2 border rounded-lg text-center font-bold focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          </div>

          {/* 세 번째 질문 */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-6">
              요즘 어떤 취미를 가지고 계신가요?
            </h2>
            <div className="flex space-x-6">
              {[
                { label: "걷기", value: "걷기" },
                { label: "기타", value: "기타" },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`flex-1 py-4 px-6 border rounded-lg text-center font-bold text-lg ${
                    answers.hobby === option.value
                      ? "bg-green-100 border-green-500"
                      : "bg-white border-gray-300"
                  } hover:bg-gray-100`}
                  onClick={() => handleAnswerChange("hobby", option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* 네 번째 질문 */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-6">
              현재 먹고 있는 약이 있다면 한 가지만 적어주세요.
            </h2>
            <input
              type="text"
              value={answers.medicine}
              onChange={(e) => handleAnswerChange("medicine", e.target.value)}
              className="w-full px-6 py-4 border rounded-lg shadow-sm font-bold focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="약 이름을 적어주세요."
            />
          </div>

          {/* 완료 버튼 */}
          <div className="flex justify-center">
          <button
            type="submit"
            className="w-3/6 bg-green-500 text-center text-white py-4 rounded-lg shadow-lg text-xl font-bold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            완료
          </button>
          </div>
        </form>

      

      </div>
      {/* 모달 */}
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
            onClick={closeModal}
            className="bg-green-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
          >
            로그인 페이지 이동
          </button>
        </div>
      </div>
      )}
    </>
  );
}
