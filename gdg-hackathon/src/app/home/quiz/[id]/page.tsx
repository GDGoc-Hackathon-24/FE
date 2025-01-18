"use client";
import QuizOption from '@/shared/ui/QuizOption';
import React from 'react';

const QuizPage = () => {
  const handleOptionClick = (option: string) => {
    console.log(`${option} 선택됨`);
  };

  return (

      <div className="flex-grow max-w-4xl mx-auto py-10">
        <h1 className="text-xl font-bold mb-4">퀴즈풀기</h1>
          <div className="text-lg font-bold mb-2">가족들과 함께 갔던 첫 해외여행은?</div>
          <div className="text-sm text-gray-500 mb-4">첫번째 문제</div>
          <div className="h-[400px] w-[800px] grid grid-cols-2 gap-4">
            <QuizOption label="일본" onClick={() => handleOptionClick('일본')} />
            <QuizOption label="중국" onClick={() => handleOptionClick('중국')} />
            <QuizOption label="미국" onClick={() => handleOptionClick('미국')} />
            <QuizOption label="베트남" onClick={() => handleOptionClick('베트남')} />
          </div>
        </div>
  );
};

export default QuizPage;
