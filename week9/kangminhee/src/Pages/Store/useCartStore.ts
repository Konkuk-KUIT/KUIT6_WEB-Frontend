import { create } from "zustand";

interface Menu {
  id: number;
  name: string;
  price: number;
  ingredients: string;
}

interface StoreInfo {
  id: number;
  name: string;
  minDeliveryPrice: number;
  deliveryFee: number; 
}

interface CartState {
  store: StoreInfo | null;
  menus: Menu[];

  addMenu: (menu: Menu, storeInfo: StoreInfo) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>((set, get) => ({
  store: null,
  menus: [],

  clearCart: () => set({ store: null, menus: [] }),

  addMenu: (menu, storeInfo) => {
    const currentStore = get().store;

    if (!currentStore) {
      return set({
        store: storeInfo,
        menus: [menu],
      });
    }

    if (currentStore.id !== storeInfo.id) {
      const confirmReset = window.confirm(
        "다른 가게 메뉴입니다.\n장바구니를 초기화할까요?"
      );
      if (!confirmReset) return;

      return set({
        store: storeInfo,
        menus: [menu],
      });
    }

    set((state) => ({
      menus: [...state.menus, menu],
    }));
  },
}));

export default useCartStore;
