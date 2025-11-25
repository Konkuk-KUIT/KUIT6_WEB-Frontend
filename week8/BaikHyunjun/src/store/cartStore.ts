import { create } from 'zustand';

// 장바구니에 담긴 메뉴 아이템 타입
export interface CartMenuItem {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  isBest?: boolean;
  quantity: number;
}

// 장바구니에 담긴 가게 정보 타입
export interface CartStore {
  id: number;
  name: string;
  deliveryFee: number;
  minDeliveryPrice: number;
}

// 장바구니 전역 상태 타입
interface CartState {
  store: CartStore | null;
  menus: CartMenuItem[];
  addMenu: (menu: CartMenuItem, store: CartStore) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

// zustand를 사용한 장바구니 전역 상태 관리
const useCartStore = create<CartState>((set, get) => ({
  store: null,
  menus: [],
  
  // 메뉴 추가 함수
  addMenu: (menu: CartMenuItem, store: CartStore) => {
    const currentStore = get().store;
    
    // 다른 가게의 메뉴를 추가하려는 경우
    if (currentStore && currentStore.id !== store.id) {
      const shouldClear = window.confirm(
        `다른 가게의 메뉴를 담으려고 합니다. 기존 장바구니를 비우고 새로 담으시겠습니까?`
      );
      
      if (!shouldClear) {
        return; // 사용자가 취소한 경우 아무것도 하지 않음
      }
      
      // 사용자가 확인한 경우 기존 장바구니 비우기
      set({ store: null, menus: [] });
    }
    
    // 현재 상태 가져오기
    const currentMenus = get().menus;
    const existingMenuIndex = currentMenus.findIndex((m) => m.id === menu.id);
    
    if (existingMenuIndex >= 0) {
      // 이미 장바구니에 있는 메뉴인 경우 수량 증가
      const updatedMenus = [...currentMenus];
      updatedMenus[existingMenuIndex].quantity += menu.quantity;
      set({ menus: updatedMenus, store: store });
    } else {
      // 새로운 메뉴인 경우 추가
      set({ 
        menus: [...currentMenus, menu],
        store: store
      });
    }
  },
  
  // 장바구니 비우기 함수
  clearCart: () => {
    set({ store: null, menus: [] });
  },
  
  // 총 주문 금액 계산 함수
  getTotalPrice: () => {
    const { menus } = get();
    return menus.reduce((total, menu) => total + menu.price * menu.quantity, 0);
  },
}));

export default useCartStore;

