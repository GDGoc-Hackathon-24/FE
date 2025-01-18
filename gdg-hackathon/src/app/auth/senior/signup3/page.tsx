"use client";

import { useEffect, useState } from "react";

export default function QuizPage() {
  const [previousData, setPreviousData] = useState<any>(null); // 이전 데이터
  const [answers, setAnswers] = useState({
    environment: "",
    childrenMale: "",
    childrenFemale: "",
    hobby: "",
    medicine: "",
  });

  // localStorage에서 이전 데이터 가져오기
  useEffect(() => {
    const storedData = localStorage.getItem("signupData");
    if (storedData) {
      setPreviousData(JSON.parse(storedData));
    }
  }, []);

  const handleAnswerChange = (question: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [question]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullData = {
      ...previousData,
      ...answers,
    };

    console.log("최종 제출 데이터:", fullData);

    // 서버로 데이터 전송
    fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fullData),
    });
  };

  return (
    <>
    <h1 className="text-center text-xl font-bold text-gray-800 mb-4 mt-16">
    기본 정보를 토대로 퀴즈를 내드릴 거예요.
  </h1>
  <p className="text-center text-sm text-gray-500 mb-8">
    가입 초반에 입력한 기본 정보와 관련된 문제를 제출해요.
  </p>

    <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8 space-y-8 mt-8 mb-8">
      {/* 제목 */}


      <form onSubmit={handleSubmit} className="space-y-8">
        {/* 첫 번째 질문 */}
        <QuestionCard
          title="현재 거주 환경이 어떻게 되세요?"
          options={[
            { label: "도시에 살아요", value: "도시" },
            { label: "시골에 살아요", value: "시골" },
          ]}
          selected={answers.environment}
          onChange={(value) => handleAnswerChange("environment", value)}
        />

        {/* 두 번째 질문 */}
        <div>
          <h2 className="text-lg font-medium text-gray-700 mb-4">
            자식이 얼마나 있으신가요?
          </h2>
          <div className="flex space-x-4">
            <div className="flex flex-col items-center space-y-2">
              <label htmlFor="childrenMale" className="text-sm text-gray-600">
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
                className="w-16 px-2 py-1 border rounded-lg text-center focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className="flex flex-col items-center space-y-2">
              <label htmlFor="childrenFemale" className="text-sm text-gray-600">
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
                className="w-16 px-2 py-1 border rounded-lg text-center focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        </div>

        {/* 세 번째 질문 */}
        <QuestionCard
          title="요즘 어떤 취미를 가지고 계신가요?"
          options={[
            { label: "걷기", value: "걷기" },
            { label: "기타", value: "기타" },
          ]}
          selected={answers.hobby}
          onChange={(value) => handleAnswerChange("hobby", value)}
        />

        {/* 네 번째 질문 */}
        <TextQuestionCard
          title="현재 먹고 있는 약이 있다면 한 가지만 적어주세요."
          value={answers.medicine}
          onChange={(value) => handleAnswerChange("medicine", value)}
        />

        {/* 완료 버튼 */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg shadow-lg text-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          완료
        </button>
      </form>
    </div>
    </>
  );
}

type QuestionCardProps = {
  title: string;
  options: { label: string; value: string }[];
  selected: string;
  onChange: (value: string) => void;
};

const QuestionCard = ({ title, options, selected, onChange }: QuestionCardProps) => (
  <div>
    <h2 className="text-lg font-medium text-gray-700 mb-4">{title}</h2>
    <div className="flex space-x-4">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`flex-1 py-3 px-4 border rounded-lg text-center ${
            selected === option.value ? "bg-green-100 border-green-500" : "bg-white border-gray-300"
          } hover:bg-gray-100`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  </div>
);

type TextQuestionCardProps = {
  title: string;
  value: string;
  onChange: (value: string) => void;
};

const TextQuestionCard = ({ title, value, onChange }: TextQuestionCardProps) => (
  <div>
    <h2 className="text-lg font-medium text-gray-700 mb-4">{title}</h2>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
      placeholder="약 이름을 적어주세요."
    />
  </div>
  
);
