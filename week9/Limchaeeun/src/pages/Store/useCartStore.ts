import { create } from "zustand";

interface CartMenu {
  name: string;
  price: number;
  ingredients: string;
  quantity: number;
}

interface CartState {
  storeId: number | null;
  storeName: string | null;
  menus: CartMenu[];

  setStoreInfo: (id: number, name: string) => void;
  addMenu: (menu: Omit<CartMenu, "quantity">) => void;
  clearCart: () => void;
  resetStore: () => void;
}

const useCartStore = create<CartState>((set) => ({
  storeId: null,
  storeName: null,
  menus: [],

  // store 정보 업데이트 (menus를 절대 건드리지 않음)
  setStoreInfo: (id, name) =>
    set((state) =>
      state.storeId === id && state.storeName === name
        ? state
        : { ...state, storeId: id, storeName: name }
    ),

  // 메뉴 추가
  addMenu: (menu) =>
    set((state) => {
      const exist = state.menus.find((m) => m.name === menu.name);
      if (exist) {
        return {
          ...state,
          menus: state.menus.map((m) =>
            m.name === menu.name ? { ...m, quantity: m.quantity + 1 } : m
          ),
        };
      }
      return {
        ...state,
        menus: [...state.menus, { ...menu, quantity: 1 }],
      };
    }),

  // 장바구니 초기화
  clearCart: () => set({ menus: [] }),

  resetStore: () =>
    set({
      storeId: null,
      storeName: null,
      menus: [],
    }),
}));

export default useCartStore;
