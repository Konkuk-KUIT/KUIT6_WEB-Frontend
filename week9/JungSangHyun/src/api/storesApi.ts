import type { Store } from "../models/types"; 

const API_URL = "http://localhost:3001/stores";

// getMethod
export const getStores = async (): Promise<Store[]> => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("가게 목록 불러오기 실패");
  }
  return await res.json(); // json 직접 변환 
};

// PostMethod
export const addStore = async (store: Omit<Store, "id">) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Content-Type : 매개변수의 타입  
    },
    body: JSON.stringify(store) // 직접 JSON으로 변환 
  });
  if (!res.ok) throw new Error("가게 추가 실패");
  return await res.json(); 
}

// updateMethod (가게이름 수정)
export const updateStore = async (id: number, store: Partial<Store>) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(store),
  });
  if (!res.ok) throw new Error("가게 수정 실패");
  return await res.json();
}

// deleteMethod
export const deleteStore = async (id: number) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("가게 삭제 실패");
  return await res.json();
}