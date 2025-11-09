// 마켓 아이템 타입
export interface MarketItem {
  title: string;
  location: string;
  timeAgo: string;
  price: string;
  image: string;
  comments: number;
  likes: number;
  isSold: boolean;
}

// 마켓 모델 타입
export interface MarketModel {
  location: string;
  items: MarketItem[];
}

// 네비게이션 아이템 타입
export interface NavItem {
  name: string;
  img: string;
}
