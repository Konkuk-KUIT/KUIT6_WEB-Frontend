import Categories from "../../components/Categories/Categories";
import DeliveryTitle from "../../components/DeliveryTitle/DeliveryTitle";
import TopSpace from "../../components/Space/TopSpace";
import OrderBar from "../../components/OrderBar/OrderBar";
import styled from "styled-components";

export const CATEGORIES = [
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
  {name: '더보기', imgPath: '/src/assets/etc.svg', path: "etc"},
];

interface PageBottom {
  paddingbottomheight: number;
}

const Home = () => {
  return (
    <Page paddingbottomheight={111}>
      <TopSpace child={""} />
      <DeliveryTitle address="한남중앙로 40길 (한남 빌리지)" />
      <Categories categories={CATEGORIES} />
      <OrderBar />
    </Page>
  );
};

const Page = styled.div<PageBottom>`
  padding-bottom: ${(props) => props.paddingbottomheight}px;
`

export default Home;
export {Page};