import { create } from "zustand";
import storesData from "../models/stores";

interface Menu {
  id: number;
  name: string;
  isBest: boolean;
  price: number;
  ingredients: string;
}

interface Store {
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

interface StoreState {
  stores: Store[];
  getStore: (id: number) => Store | undefined;
}

const useStoreStore = create<StoreState>((_set, get) => ({
  stores: storesData, // stores.ts 값

  getStore: (id: number) => get().stores.find((store) => store.id === id),
}));

export default useStoreStore;
