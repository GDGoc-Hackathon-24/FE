"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const JanuaryDiary = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(18);

  // 날짜에 해당하는 일기 데이터를 준비
  const diaryEntries: Record<number, { mood: string; title: string; content: string; image: string }> = {
    18: {
      mood: "기분이 최고였던",
      title: "1월 18일 토요일",
      content:
        "오늘은 아침에 마당에 나가서 햇볕을 쬐었어. 옆집 강아지가 나를 보고 꼬리를 흔들더라. 오래된 장독대 옆에 핀 작은 꽃을 보니 마음이 따뜻해졌어. 그리고 집 앞에서 오랜된 친구 영희를 만났어. 옛날 얘기하며 한참 웃었더니 기분이 좋아졌지. 이런 날이 조금만 더 많았으면 좋겠다.",
      image: "https://via.placeholder.com/150", // 이미지 URL
    },
  };
  const router = useRouter();
  const handleDateClick = (day: number) => {
    setSelectedDate(day);
  };

  return (
    <div className="flex space-x-4 h-5/6 justify-center items-start min-h-screen p-6">
      <div className="flex flex-col h-full md:flex-row gap-32 rounded-lg w-full max-w-5xl">
        {/* 왼쪽: 캘린더 */}
        <div className="bg-gray-50 p-4 rounded-lg h-full shadow w-full md:w-1/2">
          <div className="text-center text-xl font-bold mb-4 font-sans text-gray-800">2025년 1월</div>
          <div className="grid grid-cols-7 gap-2 h-[500px]">
            {/* 요일 헤더 */}
            {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
              <div
                key={index}
                className="text-center text-sm font-medium text-gray-600 leading-6 tracking-wide"
              >
                {day}
              </div>
            ))}

            {/* 빈 칸 (1월 1일이 수요일이므로 앞의 빈칸 2개) */}
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={`empty-${index}`} className="text-center"></div>
            ))}

            {/* 날짜들 */}
            {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
              <button
                key={day}
                onClick={() => handleDateClick(day)}
                className={`w-10 h-10 rounded-full text-sm flex items-center justify-center transition-all ${
                  selectedDate === day
                    ? "bg-green-300 text-white font-bold"
                    : "bg-white text-gray-700 hover:bg-green-100"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow w-full md:w-1/2 flex flex-col items-center">
  {selectedDate && diaryEntries[selectedDate] ? (
    <>
      <h2 className="text-lg font-bold text-green-600 mb-2 font-sans">
        {diaryEntries[selectedDate].mood}, {diaryEntries[selectedDate].title}
      </h2>
      <p className="text-gray-700 mb-4 leading-relaxed font-sans text-left">
        {diaryEntries[selectedDate].content}
      </p>
      <div className="w-full h-48 mt-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src={"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbhv1ce%2FbtrZ4bakE2q%2FMFXFCRPme2CN10TVJXe04k%2Fimg.png"}
          alt="Diary visual"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  ) : (
<div className="flex items-center justify-center">
<div className="bg-white p-4 rounded-lg border w-full h-[400px] flex flex-col justify-center items-center">
        <p className="flex text-gray-500 text-center items-center justify-center text-2xl font-sans mb-4">
          {selectedDate
            ? `1월 ${selectedDate}일, 작성한 일기가 없어요`
            : "날짜를 선택하세요."}
        </p>
        {selectedDate && (
          <button
            onClick={() => router.push('/home/diary/write')} // 버튼 클릭 시 동작
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition"
          >
            작성하러가기
          </button>
        )}
      </div>
    </div>
  )}
</div></div>
    </div>
  );
};

export default JanuaryDiary;
