import {post} from "@/shared/configs/axios";

// Example API 서비스 로직
export const getMyDiaries = async (userId : string) => {
  try {
    const response = await post(`/api/diary/allList/${userId}`);
    return response.data;
  } catch (error) {
    console.error('GET 요청 실패:', error);
    throw error;
  }
};

