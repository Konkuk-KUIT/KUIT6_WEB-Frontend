import {create} from "zustand"

interface Menu {
    name: string;
    price: number;
    ingredients: string
}

interface CartState{
    menus: Menu[];

    addMenu: (menu: Menu) => void;
}

const initialState: Pick<CartState, "menus"> = {
    menus: [],
};

const useCartStore = create<CartState>((set) => ({
    menus: initialState.menus,

    addMenu: (menu) => {
        set((state) => ({ ...state, menus: [...state.menus, menu] }))
    }
}));
  

export default useCartStore
