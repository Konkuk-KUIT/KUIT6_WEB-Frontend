import { create } from "zustand";
import { stores as storeData } from "../../models/stores";
import type { Store } from "../../types/store";

interface StoreState {
  stores: Store[];
  getStoreById: (id: number) => Store | undefined;
}

const useStoreStore = create<StoreState>((_set, get) => ({
  stores: storeData as Store[],
  getStoreById: (id: number) => get().stores.find((store) => store.id === id),
}));

export default useStoreStore;


