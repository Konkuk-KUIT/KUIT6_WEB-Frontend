import { create } from "zustand";

export interface CartMenu {
  id: number;
  name: string;
  extra: string;
  price: number;
  quantity: number;
}

export interface StoreInfo {
  name: string;
  minDeliveryPrice: number;
  deliveryFee: number;
}

export interface CartState {
  store: StoreInfo | null;
  menus: CartMenu[];
  addMenu: (menu: CartMenu, storeInfo: StoreInfo) => void;
  reset: () => void;
}

const useCartStore = create<CartState>((set, get) => ({
  store: null,
  menus: [],

  addMenu: (menu, storeInfo) => {
    const state = get();

    // 1) 장바구니가 비어 있을 때 → 가게 설정 + 첫 메뉴 추가
    if (!state.store) {
      set({
        store: storeInfo,
        menus: [menu],
      });
      return;
    }

    // 2) 다른 가게 메뉴를 담으려고 할 때
    if (state.store.name !== storeInfo.name) {
      const shouldReset = window.confirm(
        "다른 가게 메뉴입니다. 기존 장바구니를 비우고 새로 담을까요?"
      );
      if (!shouldReset) return;

      set({
        store: storeInfo,
        menus: [menu],
      });
      return;
    }

    // 3) 같은 가게 메뉴 → 그냥 추가
    set({
      store: state.store,
      menus: [...state.menus, menu],
    });
  },

  reset: () => {
    set({
      store: null,
      menus: [],
    });
  },
}));

export default useCartStore;
