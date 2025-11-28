const API_URL = "http://localhost:3001";

export interface Store {
  id: number;
  name: string;
  rate: number;              
  reviewCnt: number;        
  minDeliveryTime: number;   
  maxDeliveryTime: number;  
  deliveryFee: number;
  minDeliveryPrice: number;
}

// GET: 모든 가게 조회
export const getStores = async (): Promise<Store[]> => {
  const response = await fetch(`${API_URL}/stores`);
  if (!response.ok) throw new Error("가게 목록 조회 실패");
  return response.json();
};

// POST: 가게 추가
export const addStore = async (storeName: string): Promise<Store> => {
  const existingStores = await getStores();
  const maxId = Math.max(...existingStores.map(s => s.id), 3);

  const newStore = {
    id: maxId + 1,
    name: storeName,
    rate: 4.2,
    reviewCnt: 0,              
    minDeliveryTime: 20,      
    maxDeliveryTime: 30,
    deliveryFee: 2000,
    minDeliveryPrice: 15000,
  };

  const response = await fetch(`${API_URL}/stores`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newStore),
  });

  if (!response.ok) throw new Error("가게 추가 실패");
  return response.json();
};

// PUT: 가게 전체 수정
export const updateStore = async (
  id: number,
  store: Partial<Store>
): Promise<Store> => {
  const response = await fetch(`${API_URL}/stores/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(store),
  });

  if (!response.ok) throw new Error("가게 수정 실패");
  return response.json();
};

// PATCH: 가게 부분 수정
export const patchStore = async (
  id: number,
  updates: Partial<Store>
): Promise<Store> => {
  const response = await fetch(`${API_URL}/stores/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });

  if (!response.ok) throw new Error("가게 수정 실패");
  return response.json();
};

// DELETE: 가게 삭제
export const deleteStore = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/stores/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error("가게 삭제 실패");
};