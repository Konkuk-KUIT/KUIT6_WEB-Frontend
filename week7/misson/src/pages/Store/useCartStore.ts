import {create} from "zustand"

interface Menu {
    name: string;
    price: number;
    ingredients: string
    count: number;
}

interface CartState{
    menus: Menu[];

    addMenu: (menu: Menu) => void;

    reset: () => void;
}

const initialState: Pick<CartState, "menus"> = {
    menus: [],
};

const useCartStore = create<CartState>((set) => ({
    menus: initialState.menus,

    addMenu: (menu) => {
        set((state) => ({ ...state, menus: [...state.menus, menu] }))
    },

    reset: () => {
        set(() => ({
            ...initialState,
        }))
    }
}));
  

export default useCartStore
