import {create} from "zustand"

interface StoreInfo {
    storeId: number;
    storeName: string;
    storeMinDeliveryPrice: number;
    storeDeliveryFee: number;
}

interface MenuInfo {
    id: number;
    name: string;
    price: number;
    ingredients: string;
}

interface CartItem {
    menu: MenuInfo;
    store: StoreInfo;
}

interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    clearItems: () => void;
}

const initalState: Pick<CartState, "items"> = {
    items: [],
};



const useCartStore = create<CartState>((set) => ({
    items: initalState.items,
    
    addItem: (item) => {
        set((state) => ({   ...state, items: [...state.items, item]    }))
    },

    clearItems: () => {set(() => ({items: []}))},
}));

export default useCartStore