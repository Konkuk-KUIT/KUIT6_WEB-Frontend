import { create } from "zustand";
import stores from "../models/stores";

interface Menu {
    id: number;
    storeId: number; // 같은 가게의 메뉴만 담기 위해
    name: string;
    price: number;
    ingredients: string;
    quantity: number;
}

interface CartState {
    storeId: number | null;
    menus: Menu[];
    addMenu: (menu: Omit<Menu, "storeId" | "quantity">, storeId: number) => void;
    removeMenu: (menuId: number) => void;
    clearCart: () => void;
}

// 장바구니 초기상태
const initialState: Pick<CartState, "menus" | "storeId"> = {
    storeId: null,
    menus: [],
};

const useCartStore = create<CartState>((set, get) => ({
    storeId: initialState.storeId,
    menus: initialState.menus,

    // stores.ts의 Menu에는 storeId가 없으므로 Omit으로 storeId 제외, 2번째 인자로 storeId받기
    addMenu: (menu: Omit<Menu, "storeId" | "quantity">, storeId: number) => {
        const currentStoreId = get().storeId;
        const currentMenus = get().menus;
        
        // menus에 넣기 위한 Menu타입의 객체 
        const menuWithStoreId = { ...menu, storeId, quantity: 1 };

        // 장바구니가 비어있거나 같은 가게인 경우
        if (currentStoreId === null || currentStoreId === storeId) {
            const existingMenu = currentMenus.find((m) => m.id === menu.id);

            if (existingMenu) {
                // 이미 있는 메뉴면 수량 증가
                set((state) => ({
                    storeId,
                    menus: state.menus.map((m) => 
                        m.id === menu.id ? { ...m, quantity: m.quantity + 1 } : m
                    ),
                }));
            } else {
                // 없는 메뉴면 새로 추가
                set((state) => ({
                    storeId,
                    menus: [...state.menus, menuWithStoreId as Menu],
                }));
            }
        }
        // 다른 가게인 경우
        else {
            // 기존 가게 이름 찾기
            const currentStoreName = stores.find((s) => s.id === currentStoreId)?.name;
            if (window.confirm(`${currentStoreName}에서 이미 담은 메뉴가 있습니다.\n장바구니를 비우고 담으시겠습니까?`)) {
                set({
                    storeId,
                    menus: [menuWithStoreId as Menu],
                });
            }
        }
    },

    removeMenu: (menuId: number) => set((state) => {
        const existingMenu = state.menus.find((m) => m.id === menuId);
        
        if (!existingMenu) return state;

        if (existingMenu.quantity > 1) {
            // 수량이 1보다 크면 감소
            return {
                menus: state.menus.map((m) => 
                    m.id === menuId ? { ...m, quantity: m.quantity - 1 } : m
                ),
            };
        } else {
            // 수량이 1이면 삭제
            const newMenus = state.menus.filter((m) => m.id !== menuId);
            return {
                menus: newMenus,
                storeId: newMenus.length === 0 ? null : state.storeId,
            };
        }
    }),

    clearCart: () => set(initialState),
}));

export default useCartStore;