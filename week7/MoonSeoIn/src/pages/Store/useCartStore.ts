import { create } from "zustand";

interface Menu {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  quantity: number;
}

interface Store {
  id: number;
  name: string;
  deliveryFee: number;
  minDeliveryPrice: number;
}

interface CartState {
  menus: Menu[];
  store: Store | null;

  addMenu: (menu: Omit<Menu, "quantity">, store: Store) => boolean;
  clearCart: () => void;
  getTotalPrice: () => number;
}

const initialState: Pick<CartState, "menus" | "store"> = {
  menus: [],
  store: null,
};

const useCartStore = create<CartState>((set, get) => ({
  menus: initialState.menus,
  store: initialState.store,

  addMenu: (menu, newStore) => {
    const { store, menus } = get();

    // 다른 가게의 메뉴를 추가하려고 할 때
    if (store && store.id !== newStore.id) {
      const confirmed = window.confirm(
        `장바구니에 다른 가게의 메뉴가 담겨있습니다.\n'${store.name}'의 메뉴를 삭제하고 '${newStore.name}'의 메뉴를 담으시겠습니까?`
      );

      if (!confirmed) {
        return false;
      }

      // 기존 장바구니 초기화 후 새 메뉴 추가
      set({
        store: newStore,
        menus: [{ ...menu, quantity: 1 }],
      });
      return true;
    }

    // 같은 메뉴가 이미 있는지 확인
    const existingMenuIndex = menus.findIndex((m) => m.id === menu.id);

    if (existingMenuIndex !== -1) {
      // 이미 있으면 수량 증가
      const updatedMenus = [...menus];
      updatedMenus[existingMenuIndex].quantity += 1;
      set({ menus: updatedMenus });
    } else {
      // 없으면 새로 추가
      set({
        store: newStore,
        menus: [...menus, { ...menu, quantity: 1 }],
      });
    }

    return true;
  },

  clearCart: () => {
    set(initialState);
  },

  getTotalPrice: () => {
    const { menus } = get();
    return menus.reduce((acc, menu) => acc + menu.price * menu.quantity, 0);
  },
}));

export default useCartStore;
