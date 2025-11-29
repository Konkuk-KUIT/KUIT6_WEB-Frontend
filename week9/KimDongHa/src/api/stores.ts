// src/api/stores.ts
const BASE_URL = "http://localhost:3001";

export interface Store {
  id?: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  minDeliveryPrice: number;
  deliveryFee: number;
}

export async function fetchStores(): Promise<Store[]> {
  const res = await fetch(`${BASE_URL}/stores`);
  if (!res.ok) {
    throw new Error("가게 목록을 불러오지 못했습니다.");
  }
  return res.json();
}

export async function createStore(store: Omit<Store, "id">): Promise<Store> {
  const res = await fetch(`${BASE_URL}/stores`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(store),
  });

  if (!res.ok) {
    throw new Error("가게를 추가하지 못했습니다.");
  }
  return res.json();
}

export async function updateStoreName(id: number, name: string): Promise<Store> {
  const res = await fetch(`${BASE_URL}/stores/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) {
    throw new Error("가게 이름을 수정하지 못했습니다.");
  }
  return res.json();
}

export async function deleteStore(id: number): Promise<void> {
  const res = await fetch(`${BASE_URL}/stores/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("가게를 삭제하지 못했습니다.");
  }
}
