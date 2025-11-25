import {create} from "zustand"

export interface Menu {
    name: string;
    price: number;
    ingredients: string
}

export interface CartItem extends Menu {
    quantity: number;
}

export interface CartState{
    menus: CartItem[];
    
    addMenu: (menu: Menu) => void;
    clearCart: () => void;
}

const initialState: Pick<CartState, "menus"> = {
    menus: [],
};

const useCartStore = create<CartState>((set) => ({
    menus: initialState.menus,

    addMenu: (menu) => {
        set((state) => {
            const existingItem = state.menus.find(item => item.name === menu.name);

            if (existingItem) {
                return {
                    menus: state.menus.map(item => 
                        item.name === menu.name 
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                const newItem: CartItem = { 
                    ...menu, 
                    quantity: 1,
                };
                return { 
                    menus: [...state.menus, newItem] 
                };
            }
        });
    },
    clearCart: () => set({ menus: [] }),
}));

export default useCartStore
