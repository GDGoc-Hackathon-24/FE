// src/store/useQuizStore.ts
import { create } from "zustand";

export interface Option {
  number: number;
  text: string;
}

interface QuizItem {
  id: number;
  question: string;
  options: Option[];
  answer: number;
  correct: boolean;
  quizAnswer: number | null;
  solvedAt: string | null;
}

interface QuizState {
  quizList: QuizItem[]; // 퀴즈 리스트
  setQuizList: (list: QuizItem[]) => void; // 퀴즈 리스트 설정 함수
  setAnswer: (quizId: number, answer: number) => void; // 사용자가 선택한 답 저장 함수
}

const useQuizStore = create<QuizState>((set) => ({
  quizList: [], // 초기값: 빈 리스트
  setQuizList: (list) => set({ quizList: list }), // 리스트 업데이트 함수
  setAnswer: (quizId, answer) =>
    set((state) => ({
      quizList: state.quizList.map((quiz) =>
        quiz.id === quizId
          ? { ...quiz, quizAnswer: answer, correct: quiz.answer === answer }
          : quiz
      ),
    })),
}));

export default useQuizStore;
