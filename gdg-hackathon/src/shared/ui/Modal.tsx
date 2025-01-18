import React, { useEffect } from "react";

interface IncompleteModalProps {
  isOpen: boolean; // 모달 열림 여부
  onClose: () => void; // 닫기 핸들러
  title?: string; // 제목 (기본값: "입력되지 않은 항목이 있습니다")
  message?: string; // 메시지 (기본값: "모든 항목을 조건에 맞게 입력해주세요.")
}

export default function Modal({
  isOpen,
  onClose,
  title = "입력되지 않은 항목이 있습니다",
  message = "모든 항목을 조건에 맞게 입력해주세요.",
}: IncompleteModalProps) {
  useEffect(() => {
    // 모달 열리면 body 스크롤 방지
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // 스크롤 복원
    }

    return () => {
      document.body.style.overflow = ""; // 컴포넌트 언마운트 시 복원
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // 배경 클릭 시 닫기
    >
      <div
        className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫기 방지
      >
        <h2 className="text-xl font-bold text-center mb-4">{title}</h2>
        <p className="text-gray-700 text-center mb-4">{message}</p>
        <button
          onClick={onClose}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
