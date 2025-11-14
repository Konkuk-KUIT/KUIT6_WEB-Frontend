import pizza from "../assets/home/pizza.svg";
import salad from "../assets/home/salad.svg";
import hamburger from "../assets/home/hamburger.svg";
import korean from "../assets/home/korean.svg";
import snack from "../assets/home/snack.svg";
import chicken from "../assets/home/chicken.svg";
import sushi from "../assets/home/sushi.svg";
import sandwich from "../assets/home/sandwich.svg";
import pasta from "../assets/home/pasta.svg";
import dessert from "../assets/home/dessert.svg";
import coffee from "../assets/home/coffee.svg";
import more from "../assets/home/more.svg";

export interface Category {
  id: number;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 1, name: "피자", icon: pizza },
  { id: 2, name: "샐러드", icon: salad },
  { id: 3, name: "햄버거", icon: hamburger },
  { id: 4, name: "한식", icon: korean },
  { id: 5, name: "분식", icon: snack },
  { id: 6, name: "치킨", icon: chicken },
  { id: 7, name: "초밥", icon: sushi },
  { id: 8, name: "샌드위치", icon: sandwich },
  { id: 9, name: "파스타", icon: pasta },
  { id: 10, name: "디저트", icon: dessert },
  { id: 11, name: "커피", icon: coffee },
  { id: 12, name: "더보기", icon: more },
];
