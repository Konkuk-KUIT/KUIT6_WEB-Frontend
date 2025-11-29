import type { Store } from '../models/stores';

const BASE_URL = 'http://localhost:3001';

// GET: 모든 가게 조회
export const getStores = async (): Promise<Store[]> => {
  try {
    const response = await fetch(`${BASE_URL}/stores`);
    if (!response.ok) throw new Error('가게 목록 조회 실패');
    return response.json();
  } catch (error) {
    console.error('가게 목록 조회 오류:', error);
    throw error;
  }
};

// POST: 가게 추가
export const createStore = async (storeName: string): Promise<Store> => {
  try {
    const response = await fetch(`${BASE_URL}/stores`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: storeName,
        rate: 0,
        reviewCnt: 0,
        minDeliveryTime: 20,
        maxDeliveryTime: 30,
        minDeliveryPrice: 10000,
        deliveryFee: 2000,
        menus: []
      }),
    });

    if (!response.ok) throw new Error('가게 추가 실패');
    return response.json();
  } catch (error) {
    console.error('가게 추가 오류:', error);
    throw error;
  }
};

// PATCH: 가게 정보 수정
export const patchStore = async (id: number, storeName: string): Promise<Store> => {
  try {
    const response = await fetch(`${BASE_URL}/stores/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: storeName }),
    });

    if (!response.ok) throw new Error('가게 정보 수정 실패');
    return response.json();
  } catch (error) {
    console.error('가게 수정 오류:', error);
    throw error;
  }
};

// DELETE: 가게 삭제
export const deleteStore = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/stores/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error('가게를 삭제 실패');
  } catch (error) {
    console.error('가게 삭제 오류:', error);
    throw error;
  }
};
