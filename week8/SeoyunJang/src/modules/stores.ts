export interface MenuItem {
  name: string;
  imgSrc: string;
}

export const HOME_MENUS: MenuItem[] = [
  { name: "피자", imgSrc: "/pizza.svg" },
  { name: "샐러드", imgSrc: "/salad.svg" },
  { name: "햄버거", imgSrc: "/hamburger.svg" },
  { name: "한식", imgSrc: "/koreanfood.svg" },
  { name: "분식", imgSrc: "/bunsik.svg" },
  { name: "치킨", imgSrc: "/chicken.svg" },
  { name: "초밥", imgSrc: "/sushi.svg" },
  { name: "샌드위치", imgSrc: "/sandwitch.svg" },
  { name: "파스타", imgSrc: "/pasta.svg" },
  { name: "디저트", imgSrc: "/dessert.svg" },
  { name: "커피", imgSrc: "/coffee.svg" },
  { name: "더보기", imgSrc: "/more.svg" },
];

export interface StoreItem {
  id: number;
  rank?: string;
  storeName : string;
  isStared: boolean;
  review: string;
  description: string;
}

export const STORE_ITEMS : StoreItem[] = [
  {
    id: 1,
    rank: "1위",
    storeName: "샐로리 한남점",
    isStared: true,
    review : "4.9 (3,919)",
    description : "13분~30분 ∙ 배달비 2,000원",
  },
  {
    id: 2,
    rank: "2위",
    storeName: "옐로우푸드 샐러드",
    isStared: false,
    review : "4.8 (1,129)",
    description : "13분~30분 ∙ 배달비 2,000원",
  },
  {
    id: 3,
    rank: "3위",
    storeName: "씬더볼드 한남점",
    isStared: false,
    review : "4.8 (919) ",
    description : "13분~30분 ∙ 배달비 2,000원",
  },
  {
    id: 4,
    storeName: "THE 샐러드가득담은",
    isStared: false,
    review : "5.0 (27)",
    description : "13분~30분 ∙ 배달비 2,000원",
  },
  {
    id: 5,
    storeName: "파스토보이",
    isStared: true,
    review : "4.8 (801)",
    description : "13분~30분 ∙ 배달비 2,000원",
  },
  {
    id: 6,
    storeName: "힘난다 샐러드",
    isStared: false,
    review : "4.1 (24)",
    description : "13분~30분 ∙ 배달비 2,000원",
  },
];

export interface FoodItem {
  name:string;
  isBest: boolean;
  price: number;
  ingredients: string;
}

export const FOOD_ITEMS : FoodItem[] = [
  {
    name: "토마토 샐러드",
    isBest: true,
    price: 7600,
    ingredients : "계란, 옥수수, 양파, 올리브, 베이컨, \n시저드레싱",
  },
  {
    name: "시저 샐러드",
    isBest: false,
    price: 6900,
    ingredients : "로메인 상추와 크루통이며, 달걀, \n올리브유, 레몬 즙, 마늘",
  },
  {
    name: "리코타치즈 샐러드",
    isBest: false,
    price: 6900,
    ingredients : "리코타치즈, 양상추, 베이비채소, \n방울토마토, 블랙올리브",
  },
  {
    name: "탄단지 샐러드",
    isBest: false,
    price: 7600,
    ingredients : "치킨, 고구마, 견과류, 크랜배리, \n오리엔탈",
  },
  {
    name: "연어 샐러드",
    isBest: false,
    price: 9800,
    ingredients : "훈제연어 슬라이스, 양상추, \n베이비채소, 양파, 케이퍼",
  },
  {
    name: "우삼겹 메밀면 샐러드",
    isBest: false,
    price: 8900,
    ingredients : "우삼겹, 메밀면, 오이, 양상추, 호두, \n옥수수, 참께 드레싱",
  },
];

export interface CartTag {
  label: string;
  value: number;
  highlight?: boolean;
}

export const CART_TAG: CartTag[] = [
  { label: "주문금액", value: 10600 },
  { label: "배달요금", value: 2000 },
  { label: "총 결제금액", value: 12600, highlight: true },
];


export const STORES = [
  {
    id: 1,
    name: "샐로리 한남점",
    minOrder: "13,000원",
    deliveryTime: "약 13-30분",
    rating: 4.9,
    reviewCount: 3919,
    payment: "토스결제만 현장결제 안됨",
  },
  {
    id: 2,
    name: "옐로우푸드 샐러드",
    minOrder: "12,000원",
    deliveryTime: "약 13-30분",
    rating: 4.8,
    reviewCount: 1129,
    payment: "카드 / 현금 가능",
  },
  {
    id: 3,
    name: "씬더볼드 한남점",
    minOrder: "13,000원",
    deliveryTime: "약 13-30분",
    rating: 4.8,
    reviewCount: 919,
    payment: "토스결제만 현장결제 안됨",
  },
  {
    id: 4,
    name: "THE 샐러드가득감은",
    minOrder: "12,000원",
    deliveryTime: "약 13-30분",
    rating: 5.0,
    reviewCount: 27,
    payment: "카드 / 현금 가능",
  },
  {
    id: 5,
    name: "파스토 보이",
    minOrder: "13,000원",
    deliveryTime: "약 13-30분",
    rating: 4.8,
    reviewCount: 801,
    payment: "토스결제만 현장결제 안됨",
  },
  {
    id: 6,
    name: "힘난다 샐러드",
    minOrder: "12,000원",
    deliveryTime: "약 13-30분",
    rating: 4.1,
    reviewCount: 24,
    payment: "카드 / 현금 가능",
  },
];
