import { create } from "zustand";
import stores from "../models/stores";

interface Menu{
    storeId: number;
    name: string;
    price: number;
    ingredients: string;
}

interface CartState {
    storeId: number | null;
    menus: Menu[];
    addMenu: (menu: Omit<Menu, "storeId">, storeId: number) => void;
    removeMenu: (menu: Menu) => void;
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

    // stores.ts의 Menu에는 sotreId가 없으므로 Omit으로 storeId 제외, 2번째 인자로 storeId받기
    addMenu: (menu: Omit<Menu, "storeId">, storeId: number) => {
        const currentStoreId = get().storeId;
        const menuWithStoreId = { ...menu, storeId };

        // 장바구니가 비어있거나 같은 가게인 경우
        if (currentStoreId === null || currentStoreId === storeId) {
            set((state) => ({
                storeId,
                menus: [...state.menus, menuWithStoreId as Menu],
            }));
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

    removeMenu: (menu: Menu) => set((state) => {
        const newMenus = state.menus.filter((m) => m !== menu);

        return {
            menus: newMenus,
            storeId: newMenus.length === 0 ? null : state.storeId, // todo 다 지우면 storeId 초기화 -> 이해 필요
        };
    }),

    clearCart: () => set(initialState),
}));

export default useCartStore;