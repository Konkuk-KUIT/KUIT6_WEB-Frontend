import styled from "styled-components";
import MenuDetail from "./MenuDetail";

import pizza from "../../assets/home/pizza.svg";
import salad from "../../assets/home/salad.svg";
import hamburger from "../../assets/home/hamburger.svg";
import korean from "../../assets/home/korean.svg";
import noodle from "../../assets/home/noodle.svg";
import chicken from "../../assets/home/chicken.svg";
import sushi from "../../assets/home/sushi.svg";
import sandwich from "../../assets/home/sandwich.svg";
import pasta from "../../assets/home/pasta.svg";
import dessert from "../../assets/home/dessert.svg";
import coffee from "../../assets/home/coffee.svg";
import more from "../../assets/home/more.svg";

const menus = [
  { icon: pizza, label: "피자" },
  { icon: salad, label: "샐러드" },
  { icon: hamburger, label: "햄버거" },
  { icon: korean, label: "한식" },
  { icon: noodle, label: "분식" },
  { icon: chicken, label: "치킨" },
  { icon: sushi, label: "초밥" },
  { icon: sandwich, label: "샌드위치" },
  { icon: pasta, label: "파스타" },
  { icon: dessert, label: "디저트" },
  { icon: coffee, label: "커피" },
  { icon: more, label: "더보기" },
];

const MenuGrid = () => {
  return (
    <Grid>
      {menus.map((m) => (
        <MenuDetail key={m.label} icon={m.icon} label={m.label} />
      ))}
    </Grid>
  );
};

export default MenuGrid;

const Grid = styled.div`
  width: 342px;
  height: 326px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 74px);
  margin-top: 50px;
  gap: 10px;
`;
