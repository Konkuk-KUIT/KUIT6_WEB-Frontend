import styled from "styled-components";
import FoodCard from "./FoodCard";

import pizza from "../assets/pizza.svg";
import salad from "../assets/salad.svg";
import hamburger from "../assets/hamburger.svg";
import koreanfood from "../assets/koreanfood.svg";
import flourbasedfood from "../assets/flourbasedfood.svg";
import chicken from "../assets/chicken.svg";
import sushi from "../assets/sushi.svg";
import sandwich from "../assets/sandwich.svg";
import pasta from "../assets/pasta.svg";
import dessert from "../assets/dessert.svg";
import coffee from "../assets/coffee.svg";
import more from "../assets/more.svg";

const foods = [
  { name: "피자", img: pizza },
  { name: "샐러드", img: salad },
  { name: "햄버거", img: hamburger },
  { name: "한식", img: koreanfood },
  { name: "분식", img: flourbasedfood },
  { name: "치킨", img: chicken },
  { name: "초밥", img: sushi },
  { name: "샌드위치", img: sandwich },
  { name: "파스타", img: pasta },
  { name: "디저트", img: dessert },
  { name: "커피", img: coffee },
  { name: "더보기", img: more },
];

const FoodGrid = () => {
  return (
    <Grid>
      {foods.map((food) => (
        <FoodCard key={food.name} img={food.img} foodName={food.name} />
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  justify-items: center;
  margin-top: 16px;
`;

export default FoodGrid;
