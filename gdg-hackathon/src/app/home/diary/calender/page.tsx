"use client";
import { getMyDiaries } from "@/services/DiaryService";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface DiaryEntry {
  id: number;
  content: string;
  date: string;
  todayEmotion: string;
  photoUrls: string[] | null;
}

const JanuaryDiary = () => {
  const [diaryEntries, setDiaryEntries] = useState<Record<number, DiaryEntry>>({});
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchDiaries = async () => {
      try {
        const response = await getMyDiaries("10"); // userId가 "10"인 데이터 가져오기
        const entries = response.result || [];

        // 날짜별로 데이터를 매핑
        const mappedEntries = entries.reduce((acc: Record<number, DiaryEntry>, entry: DiaryEntry) => {
          const day = new Date(entry.date).getDate(); // 날짜 추출
          acc[day] = entry; // 일기 데이터를 해당 날짜에 저장
          return acc;
        }, {});

        setDiaryEntries(mappedEntries);
      } catch (error) {
        console.error("일기 데이터를 가져오는 데 실패했습니다:", error);
      }
    };

    fetchDiaries();
  }, []);

  

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
                    : diaryEntries[day]
                    ? "bg-blue-200 text-blue-900" // 일기가 있는 날짜
                    : "bg-white text-gray-700 hover:bg-green-100"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* 오른쪽: 선택한 날짜의 일기 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow w-full md:w-1/2 flex flex-col items-center">
          {selectedDate && diaryEntries[selectedDate] ? (
            <>
              <h2 className="text-lg font-bold text-green-600 mb-2 font-sans">
                {diaryEntries[selectedDate].todayEmotion}, {selectedDate}일
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed font-sans text-left">
                {diaryEntries[selectedDate].content}
              </p>
              <div className="w-full h-48 mt-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                {diaryEntries[selectedDate].photoUrls ? (
                  <img
                    src={diaryEntries[selectedDate].photoUrls[0]}
                    alt="Diary visual"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <p className="text-gray-500">이미지가 없습니다.</p>
                )}
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
                    onClick={() => router.push("/home/diary/write")} // 작성 페이지로 이동
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition"
                  >
                    작성하러가기
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JanuaryDiary;
