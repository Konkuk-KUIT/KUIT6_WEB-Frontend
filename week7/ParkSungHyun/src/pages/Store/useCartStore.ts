import { create } from "zustand";
import type { CartMenu, Menu, SelectedStore } from "../../types/store";

interface CartState {
  store: SelectedStore | null;
  menus: CartMenu[];
  addMenu: (storeInfo: SelectedStore, menu: Menu) => void;
  clearCart: () => void;
}

const createInitialState = (): Pick<CartState, "store" | "menus"> => ({
  store: null,
  menus: [],
});

const useCartStore = create<CartState>((set, get) => ({
  ...createInitialState(),
  addMenu: (storeInfo, menu) => {
    const currentStore = get().store;

    if (currentStore && currentStore.id !== storeInfo.id) {
      const confirmReset =
        typeof window !== "undefined"
          ? window.confirm(
              "다른 가게의 메뉴가 담겨 있습니다. 장바구니를 초기화하고 새 메뉴를 담을까요?",
            )
          : true;

      if (!confirmReset) {
        return;
      }

      set({
        store: storeInfo,
        menus: [{ ...menu, quantity: 1 }],
      });
      return;
    }

    set((state) => {
      const existingMenu = state.menus.find((item) => item.id === menu.id);

      if (existingMenu) {
        return {
          store: state.store ?? storeInfo,
          menus: state.menus.map((item) =>
            item.id === menu.id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        };
      }

      return {
        store: state.store ?? storeInfo,
        menus: [...state.menus, { ...menu, quantity: 1 }],
      };
    });
  },
  clearCart: () => set(createInitialState()),
}));

export default useCartStore;

