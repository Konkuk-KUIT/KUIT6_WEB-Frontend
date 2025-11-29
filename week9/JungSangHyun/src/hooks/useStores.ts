import { useEffect, useState } from "react";
import { addStore, deleteStore, getStores, updateStore } from "../api/storesApi";
import type { Store } from "../models/types";

export const useStores = () => {
  const [stores, setStores] = useState<Store[]>([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchStores = async () => {
    try {
      setLoading(true);
      const data = await getStores(); // get요청 함수
      setStores(data); // get요청 결과 상태에 반영
    } catch (err) {
      setError(err as Error); // error 상태가 Error타입이라서 
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStores();
  }, []);

  const handleAddStore = async (name: string) => {
    const newStore = {
      name,
      rate: 0,
      reviewCnt: 0,
      minDeliveryTime: 10,
      maxDeliveryTime: 20,
      minDeliveryPrice: 10000,
      deliveryFee: 2000,
      menus: [],
    };

    try {
      await addStore(newStore);
      await fetchStores(); // React Query 사용 시 invalidateQueries(['stores'])로 대체
    } catch (err) {
      console.error(err);
      alert("가게 추가 실패");
    }
  }

  const handleUpdateStore = async (id: number, name: string) => {
    try {
      await updateStore(id, { name });
      await fetchStores();
    } catch (err) {
      console.error(err);
      alert("가게 수정 실패");
    }
  }

  const handleDeleteStore = async (id: number) => {
    if(!window.confirm("정말로 삭제하시겠습니까?")) return;
    try {
      await deleteStore(id);
      await fetchStores();
    } catch (err) {
      console.error(err);
      alert("가게 삭제 실패");
    }
  }

  return { stores, loading, error, addStore: handleAddStore, updateStore: handleUpdateStore, deleteStore: handleDeleteStore }
};