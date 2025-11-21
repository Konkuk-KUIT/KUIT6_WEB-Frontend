import {create} from "zustand";

interface Menu{
    name: string;
    price: number;
    ingredients: string;
}

interface CartState {
    menus: Menu[];
    addMenu: (menu: Menu) => void;
    // todo
    removeMenu: (menu: Menu) => void;
}

const initialState: Pick<CartState, "menus"> = {
    menus: [],
};

const useCartStore = create<CartState>((set) => ( {
    menus: initialState.menus,
    addMenu: (menu: Menu) => set((state) => ({ ...state, menus: [...state.menus, menu] })),

    removeMenu: (menu: Menu) => set((state) => ({ menus: state.menus.filter((m) => m !== menu) })),
}));

export default useCartStore;