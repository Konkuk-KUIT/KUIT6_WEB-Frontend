import { useState, useEffect, useCallback } from "react";
import { getStores, createStore, patchStore, deleteStore, type Store, type CreateStoreDto, type UpdateStoreDto } from "../api/storeApi";

export const useStores = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // GET: 가게 목록 조회
  const fetchStores = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getStores();
      setStores(data);
    } catch {
      setError("가게 목록을 불러오는데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  }, []);

  // POST: 가게 추가
  const addStore = useCallback(async (storeData: CreateStoreDto) => {
    try {
      setError(null);

      const newStore = await createStore(storeData);
      setStores((prev) => [...prev, newStore]);

      return newStore;
    } catch {
      throw new Error("가게 추가에 실패했습니다.");
    }
  }, []);

  // PATCH: 가게 수정
  const updateStorePatch = useCallback(async (id: number, storeData: UpdateStoreDto) => {
    try {
      setError(null);

      const updatedStore = await patchStore(id, storeData);
      setStores((prev) => prev.map((store) => (store.id === id ? updatedStore : store)));

      return updatedStore;
    } catch {
      throw new Error("가게 수정에 실패했습니다.");
    }
  }, []);

  // DELETE: 가게 삭제
  const removeStore = useCallback(async (id: number) => {
    try {
      setError(null);

      await deleteStore(id);
      setStores((prev) => prev.filter((store) => store.id !== id));
    } catch {
      throw new Error("가게 삭제에 실패했습니다.");
    }
  }, []);

  // 초기 로딩
  useEffect(() => {
    fetchStores();
  }, [fetchStores]);

  return {
    stores,
    loading,
    error,
    fetchStores,
    addStore,
    updateStorePatch,
    removeStore,
  };
};
