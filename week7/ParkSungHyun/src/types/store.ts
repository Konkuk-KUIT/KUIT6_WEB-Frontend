export interface Menu {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  isBest: boolean;
}

export interface Store {
  id: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  minDeliveryPrice: number;
  deliveryFee: number;
  menus: Menu[];
}

export interface SelectedStore {
  id: number;
  name: string;
  minDeliveryPrice: number;
  deliveryFee: number;
}

export interface CartMenu extends Menu {
  quantity: number;
}


