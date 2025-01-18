"use client";
import QuizOption from "@/shared/ui/QuizOption";
import React, { useState } from "react";
import useQuizStore, { Option } from "@/store/useUserStore";

const QuizPage = () => {
  const { quizList, setAnswer } = useQuizStore(); // Zustand에서 상태 가져오기
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 퀴즈 인덱스
  
  // 현재 퀴즈 데이터
  const currentQuiz = quizList[currentIndex];

  const handleOptionClick = (optionNumber: number) => {
    console.log(`${optionNumber} 선택됨`);
    if (currentQuiz) {
      setAnswer(currentQuiz.id, optionNumber); // Zustand에 답 저장
    }

    // 다음 퀴즈로 이동 (마지막 퀴즈면 종료)
    if (currentIndex < quizList.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      console.log("퀴즈 종료");
    }
  };

  return (
    <div className="flex-grow max-w-4xl mx-auto py-10">
      {quizList.length > 0 && currentQuiz ? (
        <>
          {/* 퀴즈 제목과 설명 */}
          <h1 className="text-xl font-bold mb-4">퀴즈풀기</h1>
          <div className="text-lg font-bold mb-2">{currentQuiz.question}</div>
          <div className="text-sm text-gray-500 mb-4">
            {`문제 ${currentIndex + 1} / ${quizList.length}`}
          </div>

          {/* 퀴즈 옵션 */}
          <div className="h-[400px] w-[800px] grid grid-cols-2 gap-4">
            {currentQuiz.options.map((option: Option) => (
              <QuizOption
                key={option.number}
                label={option.text}
                onClick={() => handleOptionClick(option.number)}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-lg font-bold">퀴즈가 없습니다.</h2>
          <p className="text-sm text-gray-500">
            퀴즈를 추가하거나 다시 시도해주세요.
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
