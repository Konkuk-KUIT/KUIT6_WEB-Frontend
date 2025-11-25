import {create} from "zustand"

interface Menu {
  name: string;
  price: number;
  ingredients: string;
  storeId?: number;        
  storeName?: string;      
  deliveryFee?: number;    
  minOrderAmount?: number; 
}

interface CartState{
  menus: Menu[];
  addMenu: (menu: Menu) => void;
  clearCart: () => void;  
}

const initialState: Pick<CartState, "menus"> = {
  menus: [],
};

const useCartStore = create<CartState>((set) => ({
  menus: initialState.menus,

  addMenu: (menu) => {
    set((state) => ({ ...state, menus: [...state.menus, menu] }));
  },
  clearCart: () => {                        
    set(() => ({ ...initialState }));       
  },                                        
}));

export default useCartStore;
