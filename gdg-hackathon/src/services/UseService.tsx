import { get, post, put, del } from "@/shared/configs/axios";
import { SignUpFormFamily, SignInFormFamily } from '@/types/contactService';

// Example API 서비스 로직
export const getMeFamily = async (familyId: string) => {
  try {
    const response = await get(`/api/family/${familyId}`, familyId);
    return response.data;
  } catch (error) {
    console.error('GET 요청 실패:', error);
    throw error;
  }
};

export const createFamily = async (data: SignUpFormFamily) => {
  try {
    const response = await post('/api/family', data);
    return response.data;
  } catch (error) {
    console.error('POST 요청 실패:', error);
    throw error;
  }
};

export const signInFamily = async (data: SignInFormFamily) => {
    try {
      const response = await post('/api/family/login', data);
      return response.data;
    } catch (error) {
      console.error('POST 요청 실패:', error);
      throw error;
    }
  };

export const updateExampleData = async (id: string, data: any) => {
  try {
    const response = await put(`/example/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('PUT 요청 실패:', error);
    throw error;
  }
};

export const deleteExampleData = async (id: string) => {
  try {
    await del(`/example/${id}`);
    console.log('DELETE 요청 성공');
  } catch (error) {
    console.error('DELETE 요청 실패:', error);
    throw error;
  }
};
