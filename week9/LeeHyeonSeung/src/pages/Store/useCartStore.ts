import { create } from 'zustand';
import type { Menu, Store } from '../../models/stores';

interface CartItem {
  menu: Menu;
  quantity: number;
}

interface CartStore {
  store: Store | null;
  items: CartItem[];
  addItem: (menu: Menu, store: Store) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getFinalPrice: () => number;
  getItemCount: () => number;
  isMinimumMet: () => boolean;
}

export const useCartStore = create<CartStore>((set, get) => ({
  store: null,
  items: [],

  addItem: (menu, store) => {
    const currentStore = get().store;
    
    // 다른 가게의 메뉴를 담으려고 할 때
    if (currentStore && currentStore.id !== store.id) {
      const confirm = window.confirm(
        `장바구니에 다른 가게의 메뉴가 담겨있습니다.\n'${currentStore.name}'의 메뉴를 삭제하고\n'${store.name}'의 메뉴를 담으시겠습니까?`
      );
      
      if (!confirm) {
        return;
      }
      
      // 기존 장바구니 초기화하고 새 메뉴 추가
      set({
        store: store,
        items: [{ menu, quantity: 1 }],
      });
      return;
    }

    // 같은 가게인 경우
    const currentItems = get().items;
    const existingItem = currentItems.find((item) => item.menu.id === menu.id);

    if (existingItem) {
      // 이미 담긴 메뉴면 수량 증가
      set({
        items: currentItems.map((item) =>
          item.menu.id === menu.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      // 새 메뉴 추가
      set({
        store: store,
        items: [...currentItems, { menu, quantity: 1 }],
      });
    }
  },

  clearCart: () => {
    set({ store: null, items: [] });
  },

  getTotalPrice: () => {
    const items = get().items;
    return items.reduce((total, item) => total + item.menu.price * item.quantity, 0);
  },

  getFinalPrice: () => {
    const totalPrice = get().getTotalPrice();
    return totalPrice;
  },

  getItemCount: () => {
    const items = get().items;
    return items.reduce((count, item) => count + item.quantity, 0);
  },

  isMinimumMet: () => {
    const store = get().store;
    const totalPrice = get().getTotalPrice();
    return store ? totalPrice >= store.minDeliveryPrice : false;
  },
}));