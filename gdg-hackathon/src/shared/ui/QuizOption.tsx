import React from "react";

type QuizOptionProps = {
  label: string; // 버튼 텍스트
  onClick: () => void; // 클릭 핸들러
  variant?: "default" | "correct" | "incorrect" | "disabled"; // 옵션 스타일 종류
};

const QuizOption: React.FC<QuizOptionProps> = ({ label, onClick, variant = "default" }) => {
  // 옵션 스타일 클래스 설정
  const variantClasses = {
    default: "bg-white border-gray-300 text-black hover:bg-gray-100",
    correct: "bg-green-500 border-green-600 text-white",
    incorrect: "bg-red-500 border-red-600 text-white",
    disabled: "bg-gray-200 border-gray-300 text-gray-500 cursor-not-allowed",
  };

  return (
    <button
      className={`border rounded-md py-4 text-center transition ${variantClasses[variant]}`}
      onClick={onClick}
      disabled={variant === "disabled"} // disabled 상태 처리
    >
      {label}
    </button>
  );
};

export default QuizOption;
