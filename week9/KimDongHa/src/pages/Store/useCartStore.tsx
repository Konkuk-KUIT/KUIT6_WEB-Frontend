// pages/Store/useCartStore.ts
import { create } from "zustand";

interface CartMenu {
  name: string;
  price: number;
  ingredients: string;
  isBest?: boolean;
  quantity: number;
}

interface StoreInfo {
  id: number;
  name: string;
  minOrderPrice: number;
  deliveryFee: number;
}

interface CartState {
  storeId: number | null;
  storeName: string;
  minOrderPrice: number;
  deliveryFee: number;
  menus: CartMenu[];
  addMenu: (store: StoreInfo, menu: Omit<CartMenu, "quantity">) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>((set, get) => ({
  storeId: null,
  storeName: "",
  minOrderPrice: 0,
  deliveryFee: 2000,
  menus: [],

  addMenu: (store, menu) => {
    set((state) => {
      // 다른 가게 메뉴 담으려고 할 때
      if (state.storeId !== null && state.storeId !== store.id) {
        const ok = window.confirm(
          "다른 가게의 메뉴를 담으시겠습니까?\n기존 장바구니가 모두 삭제됩니다."
        );
        if (!ok) return state;

        // 장바구니 초기화 후 새 가게/메뉴로 세팅
        return {
          storeId: store.id,
          storeName: store.name,
          minOrderPrice: store.minOrderPrice,
          deliveryFee: store.deliveryFee,
          menus: [{ ...menu, quantity: 1 }],
        };
      }

      // 같은 가게이거나 장바구니 비어있을 때
      const existingIndex = state.menus.findIndex(
        (m) => m.name === menu.name
      );
      const newMenus = [...state.menus];

      if (existingIndex >= 0) {
        const target = newMenus[existingIndex];
        newMenus[existingIndex] = {
          ...target,
          quantity: target.quantity + 1,
        };
      } else {
        newMenus.push({ ...menu, quantity: 1 });
      }

      return {
        ...state,
        storeId: store.id,
        storeName: store.name,
        minOrderPrice: store.minOrderPrice,
        deliveryFee: store.deliveryFee,
        menus: newMenus,
      };
    });
  },

  clearCart: () =>
    set({
      storeId: null,
      storeName: "",
      minOrderPrice: 0,
      deliveryFee: 2000,
      menus: [],
    }),
}));

export default useCartStore;
