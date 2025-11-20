import { create } from "zustand";
import type { Menu } from "../../components/MenuItem/MenuItem";

interface CartState {
    menus: Menu[];
    addMenu: (menu: Menu) => void;
}

const initialState: Pick<CartState, "menus"> = {
    menus: [],
}

const useCartStore = create<CartState>((set) => ({
    menus: initialState.menus,

    addMenu: (menu) => {
        set( (state) =>
        ({...state, menus: [...state.menus, menu]})
        )
    }
}))

export default useCartStore;