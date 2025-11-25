const API_BASE_URL = "http://localhost:3000";

export interface Menu {
  id: number;
  name: string;
  isBest: boolean;
  price: number;
  ingredients: string;
}

export interface Store {
  id: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  minDeliveryPrice: number;
  deliveryFee: number;
  menus: Menu[];
}

export type CreateStoreDto = Omit<Store, "id">;
export type UpdateStoreDto = Partial<Store>;

// GET: 가게 조회
export const getStores = async (): Promise<Store[]> => {
  const response = await fetch(`${API_BASE_URL}/stores`);
  if (!response.ok) {
    throw new Error("가게 목록을 불러오는데 실패했습니다.");
  }
  return response.json();
};

// GET: 특정 가게 메뉴 조회
export const getStoreById = async (id: number): Promise<Store> => {
  const response = await fetch(`${API_BASE_URL}/stores/${id}`);
  if (!response.ok) {
    throw new Error("가게 정보를 불러오는데 실패했습니다.");
  }
  return response.json();
};

// POST: 새 가게 추가
export const createStore = async (storeData: CreateStoreDto): Promise<Store> => {
  const response = await fetch(`${API_BASE_URL}/stores`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(storeData),
  });

  if (!response.ok) {
    throw new Error("가게 추가에 실패했습니다.");
  }
  return response.json();
};

// PATCH: 가게 수정
export const patchStore = async (id: number, storeData: UpdateStoreDto): Promise<Store> => {
  const response = await fetch(`${API_BASE_URL}/stores/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(storeData),
  });

  if (!response.ok) {
    throw new Error("가게 수정에 실패했습니다.");
  }
  return response.json();
};

// DELETE: 가게 삭제
export const deleteStore = async (id: number): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/stores/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("가게 삭제에 실패했습니다.");
  }
};
