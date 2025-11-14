import Category, { Categories } from "../../components/Category/Category";
import DeliveryTitle from "../../components/DeliveryTitle/DeliveryTitle";
import TopSpace from "../../components/Space/TopSpace";
import BottomBar from "../../components/BottomBar/BottomBar";
import HeadTitle from "../../components/HeadTitle/HeadTitle";

const categories = [
  {name: '피자', imgPath: '/src/assets/pizza.svg'},
  {name: '샐러드', imgPath: '/src/assets/salad.svg'},
  {name: '햄버거', imgPath: '/src/assets/hamburger.svg'},
  {name: '한식', imgPath: '/src/assets/korean.svg'},
  {name: '분식', imgPath: '/src/assets/snack.svg'},
  {name: '치킨', imgPath: '/src/assets/chicken.svg'},
  {name: '초밥', imgPath: '/src/assets/sushi.svg'},
  {name: '샌드위치', imgPath: '/src/assets/sandwich.svg'},
  {name: '파스타', imgPath: '/src/assets/pasta.svg'},
  {name: '디저트', imgPath: '/src/assets/dessert.svg'},
  {name: '커피', imgPath: '/src/assets/coffee.svg'},
  {name: '더보기', imgPath: '/src/assets/more.svg'},
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
