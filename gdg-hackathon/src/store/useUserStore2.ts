// src/store/useUserStore.ts
import { create } from "zustand";

interface UserState {
  userId: number | null; // 현재 사용자 ID
  setUserId: (id: number) => void; // 사용자 ID 설정 함수
}

const useUserStore = create<UserState>((set) => ({
  userId: null, // 초기값: null
  setUserId: (id) => set({ userId: id }), // ID 업데이트 함수
}));

export default useUserStore;
