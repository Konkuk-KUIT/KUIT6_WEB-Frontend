import { create } from "zustand";

interface Menu {
  name: string;
  price: number;
  ingredients: string;
  storeName: string;
  storeId: number;
}

interface CartState {
  menus: Menu[];
  totalPrice: number;
  addMenu: (menu: Menu) => void;
  clearMenu: () => void;
}

const initialState: Pick<CartState, "menus" | "totalPrice"> = {
  menus: [],
  totalPrice: 0,
};

const useCartStore = create<CartState>((set) => ({
  menus: initialState.menus,
  totalPrice: initialState.totalPrice,

  addMenu: (menu) => {
    set((state) => ({
      ...state,
      menus: [...state.menus, menu],
      totalPrice: state.totalPrice + menu.price,
    }));
  },

  clearMenu: () => set({ menus: [], totalPrice: 0 }),
}));

export default useCartStore;
