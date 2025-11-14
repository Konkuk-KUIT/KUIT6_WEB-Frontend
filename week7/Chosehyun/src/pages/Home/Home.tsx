import { Link } from "react-router-dom";
import FoodCard from "../../components/FoodCard";
import styled from "styled-components"; 
import stores from "../../models/stores";
import OrderBar from "../../components/OrderBar/OrderBar";

const StyledFoodGrid = styled.div`
  display: grid; 
  
  grid-template-columns: repeat(3, 1fr); 
  
  gap: 12px; 
  
  padding: 0 16px; 
  margin: 20px 0; 
`;

const StyledHeader = styled.h1`
  font-family: Pretendard;
  font-size: 26px; 
  font-weight: 700; 
  line-height: 100%; 
  letter-spacing: 0px; 
  color: #191F28; 
  padding-left: 24px;
  padding-top: 25px;
  margin-bottom: 20px;
`;

const StyledAddress = styled.p`
  font-family: Pretendard;
  font-size: 17px; 
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0px;
  color: #333D4B; 
  padding-left: 24px;
  margin-top: -10px;
  margin-bottom: 20px;
`;


const categories = [
  { id: 1, name: "피자", icon: "pizza.svg"},
  { id: 2, name: "샐러드", icon: "salad.svg"},
  { id: 3, name: "햄버거", icon: "burger.svg"}, 
  { id: 4, name: "한식", icon: "korean.svg"},   
  { id: 5, name: "분식", icon: "snack.svg"},   
  { id: 6, name: "치킨", icon: "chicken.svg"},  
  { id: 7, name: "초밥", icon: "sushi.svg"},   
  { id: 8, name: "샌드위치", icon: "sandwich.svg"},
  { id: 9, name: "파스타", icon: "pasta.svg"}, 
  { id: 10, name: "디저트", icon: "dessert.svg"},
  { id: 11, name: "커피", icon: "coffee.svg"},  
  { id: 12, name: "더보기", icon: "etc.svg"},   
];


const Home = () => {
  return (
    <div>
      <StyledHeader>오늘은 무엇을 먹을까요?</StyledHeader>
      <StyledAddress>한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;</StyledAddress>
      <StyledFoodGrid>
        {categories.map((category) => (
          <FoodCard 
            key={category.id} 
            foodName={category.name}
            iconName={category.icon}
            categoryName={category.name}
          />
        ))}
      </StyledFoodGrid>
      <OrderBar />
    </div>
  );
};

export default Home;
