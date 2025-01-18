"use client";
import QuizOption from "@/shared/ui/QuizOption";
import React, { useState } from "react";
import useQuizStore, { Option } from "@/store/useUserStore";

const QuizPage = () => {
  const { quizList, setAnswer } = useQuizStore(); // Zustand에서 상태 가져오기
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 퀴즈 인덱스
  const [selectedOption, setSelectedOption] = useState<number | null>(null); // 선택된 옵션 번호
  const [isAnswered, setIsAnswered] = useState(false); // 현재 문제의 정답 확인 여부

  // 현재 퀴즈 데이터
  const currentQuiz = quizList[currentIndex];

  const handleOptionClick = (optionNumber: number) => {
    if (isAnswered) return; // 이미 답을 확인했으면 클릭 방지

    setSelectedOption(optionNumber); // 선택된 옵션 저장
    setAnswer(currentQuiz.id, optionNumber); // Zustand에 답 저장
    setIsAnswered(true); // 정답 확인 상태로 변경
  };

  const handleNextQuestion = () => {
    setSelectedOption(null); // 선택 초기화
    setIsAnswered(false); // 정답 확인 상태 초기화
    setCurrentIndex((prevIndex) => prevIndex + 1); // 다음 문제로 이동
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
                variant={
                  isAnswered
                    ? option.number === currentQuiz.answer
                      ? "correct" // 정답
                      : option.number === selectedOption
                      ? "disabled" // 사용자가 선택한 오답
                      : "default" // 나머지 옵션
                    : "default" // 기본 상태
                }
              />
            ))}
          </div>

          {/* 정답 확인 메시지 및 다음 버튼 */}
          {isAnswered && (
            <div className="mt-6 text-center">
              {selectedOption === currentQuiz.answer ? (
                <p className="text-green-600 font-bold text-lg">
                  정답입니다! 🎉
                </p>
              ) : (
                <p className="text-red-600 font-bold text-lg">
                  아쉽습니다! 정답은{" "}
                  {
                    currentQuiz.options.find(
                      (option: Option) => option.number === currentQuiz.answer
                    )?.text
                  }
                  입니다.
                </p>
              )}

              <button
                onClick={handleNextQuestion}
                className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
              >
                {currentIndex < quizList.length - 1 ? "다음 문제" : "결과 보기"}
              </button>
            </div>
          )}
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
