import { create } from "zustand";

interface Menu {
    id: number,
    name: string;
    price: number;
    ingredients: string;
    quantity: number;
}

type MenuInput = Omit<Menu, "quantity">;

interface CartState {
    storeId: number;
    storeName: string;
    deliveryFee: number;
    minDeliveryPrice: number;

    menus: Menu[];

    setStoreInfo: (info: {
        id: number;
        name: string;
        deliveryFee: number;
        minDeliveryPrice: number;
    }) => void;
    addMenu: (menu: MenuInput) => void;
    clearCart: () => void;
}

const initialState: Pick<CartState, "menus"> = {
    menus: [],
};

const useCartStore = create<CartState>((set) => ({
    storeId: 0,
    storeName: "",
    deliveryFee: 0,
    minDeliveryPrice: 0,
    menus: initialState.menus,

    setStoreInfo: ({ id, name, deliveryFee, minDeliveryPrice }) =>
        set(() => ({
            storeId: id,
            storeName: name,
            deliveryFee,
            minDeliveryPrice,
        })),

    addMenu: (menu) => {
        set((state) => {
            // 이미 담긴 메뉴인지 찾기
            const existing = state.menus.find((m) => m.name === menu.name);

            if (existing) {
                // 이미 있다면 quantity +1
                return {
                    ...state,
                    menus: state.menus.map((m) =>
                        m.name === menu.name ? { ...m, quantity: m.quantity + 1 } : m
                    ),
                };
            }

            // 처음 담은 메뉴라면 quantity 1로 추가
            return {
                ...state,
                menus: [...state.menus, { ...menu, quantity: 1 }],
            };
        });
    },

    clearCart: () =>
        set(() => ({
            storeId: 0,
            storeName: "",
            deliveryFee: 0,
            minDeliveryPrice: 0,
            menus: [],
        }))
}));

export default useCartStore;