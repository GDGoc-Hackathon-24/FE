"use client";
import React, { useState } from "react";
import Image from "next/image";

const DiaryPage = () => {
  const [mood, setMood] = useState<string | null>(null);
  const [diary, setDiary] = useState<string>("");
  const [photo, setPhoto] = useState<File | null>(null);

  const moodImages = {
    최고예요: "/imgs/happy.png",
    좋았어요: "/imgs/smile.png",
    그저그랬어요: "/imgs/soso.png",
    별로예요: "/imgs/sad.png",
    최악이에요: "/imgs/angry.png",
  };

  const handleMoodClick = (selectedMood: string) => {
    setMood(selectedMood);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log("기분:", mood);
    console.log("일기:", diary);
    console.log("사진:", photo);
    alert("작성 완료!");
  };

  return (
    <div className="bg-[#FFF9E5] min-h-screen flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-md space-y-6">
        {/* 헤더 */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">일기쓰기</h1>
          <p className="text-gray-500">2025.01.18</p>
        </div>

        {/* 오늘의 기분 */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">오늘의 기분</h2>
          <p className="text-sm text-gray-500">다섯가지 중 오늘의 기분에 가까웠던 선택지를 골라주세요</p>
          <div className="flex justify-between">
            {Object.entries(moodImages).map(([moodText, imagePath]) => (
              <button
                key={moodText}
                onClick={() => handleMoodClick(moodText)}
                className={`w-20 h-20 border rounded-lg flex flex-col items-center justify-center transition ${
                  mood === moodText ? "border-green-500 bg-green-100" : "border-gray-300"
                }`}
              >
                <Image
                  src={imagePath}
                  alt={moodText}
                  width={40}
                  height={40}
                  className="rounded-lg mb-2"
                />
                <span className="text-xs">{moodText}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 오늘의 일기 */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">오늘의 일기</h2>
          <p className="text-sm text-gray-500">오늘 있었던 일을 간단히 작성해주세요</p>
          <textarea
            value={diary}
            onChange={(e) => setDiary(e.target.value)}
            placeholder="일기를 작성해보세요."
            className="w-full h-24 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        {/* 오늘의 사진 */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">오늘의 사진</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
          />
          {photo && (
            <div className="mt-4">
              <p className="text-sm text-gray-500">업로드된 사진:</p>
              <img
                src={URL.createObjectURL(photo)}
                alt="Uploaded"
                className="w-full h-auto rounded-lg mt-2"
              />
            </div>
          )}
        </div>

        {/* 작성 완료 버튼 */}
        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition"
        >
          작성 완료
        </button>
      </div>
    </div>
  );
};

export default DiaryPage;
