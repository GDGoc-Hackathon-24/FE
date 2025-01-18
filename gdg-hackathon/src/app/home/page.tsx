"use client";
import { getNoAnswerList } from "@/services/QuizService";
import Card from "@/shared/ui/Card";
import useQuizStore from "@/store/useUserStore";
import React, { useEffect } from "react";

export default function MainPage() {

    const { quizList, setQuizList } = useQuizStore();

  const handleQuizClick = () => {
    console.log("바로 풀러가기 클릭");
  };

  const handleWriteDiaryClick = () => {
    console.log("일기 쓰러가기 클릭");
  };


  const data = {userId: '10'}
  useEffect(() => {
    const getQuiz = async() => {
        try {
            const response = await getNoAnswerList(data);
            console.log("성공", response.result.content);
            setQuizList(response.result.content)
        }
        catch(error) {
            console.log(error)
        }
    }

    getQuiz();
  }, [])

  return (
    <div className="relative bg-[#FFF9E5] flex flex-col items-center py-10">
      {/* 콘텐츠 영역 */}
      <main className="w-full max-w-[800px] space-y-8 px-4">
        {quizList.length > 0 && (
        <Card
          title="퀴즈를 풀 수 있어요."
          description="보호자가 퀴즈를 출제했어요."
          buttonText="바로 풀러가기"
          onClick={handleQuizClick}
          url="home/quiz"
        />)}
        <Card
          title="오늘의 일기를 아직 작성 안 하셨네요."
          description="일기를 작성하면 더 다양한 퀴즈를 풀 수 있어요."
          buttonText="일기 쓰러가기"
          onClick={handleWriteDiaryClick}
          url="/diary"
        />
      </main>
    </div>
  );
}
