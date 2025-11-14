import Category, { Categories } from "../../components/Category/Category";
import DeliveryTitle from "../../components/DeliveryTitle/DeliveryTitle";
import TopSpace from "../../components/Space/TopSpace";
import BottomBar from "../../components/BottomBar/BottomBar";
import path from "path";

const categories = [
  {name: '피자', imgPath: '/src/assets/pizza.svg', path: "pizza"},
  {name: '샐러드', imgPath: '/src/assets/salad.svg', path: "salad"},
  {name: '햄버거', imgPath: '/src/assets/hamburger.svg', path: "hamburger"},
  {name: '한식', imgPath: '/src/assets/korean.svg', path: "korean"},
  {name: '분식', imgPath: '/src/assets/snack.svg', path: "snack"},
  {name: '치킨', imgPath: '/src/assets/chicken.svg', path: "chicken"},
  {name: '초밥', imgPath: '/src/assets/sushi.svg', path: "sushi"},
  {name: '샌드위치', imgPath: '/src/assets/sandwich.svg', path: "sandwich"},
  {name: '파스타', imgPath: '/src/assets/pasta.svg', path: "pasta"},
  {name: '디저트', imgPath: '/src/assets/dessert.svg', path: "dessert"},
  {name: '커피', imgPath: '/src/assets/coffee.svg', path: "coffee"},
  {name: '더보기', imgPath: '/src/assets/more.svg', path: "more"},
];

const Home = () => {
  return (
    <>
      <TopSpace child={""}></TopSpace>
      <DeliveryTitle address="한남중앙로 40길 (한남 빌리지)"></DeliveryTitle>
      <Categories categories={categories}></Categories>
      <BottomBar></BottomBar>
    </>
  );
};

export default Home;
