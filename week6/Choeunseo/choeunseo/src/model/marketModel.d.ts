// src/model/marketModel.d.ts
export type MarketItem = {
    title: string;
    location: string;
    timeAgo: string;
    price: string;
    image: string;
    comments: number;
    likes: number;
    isSold: boolean;
  };
  
  declare const marketModel: {
    location: string;
    items: MarketItem[];
  };
  
  export default marketModel;
  