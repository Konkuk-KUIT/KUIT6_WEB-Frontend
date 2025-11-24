import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface FoodCardProps {
  img: string;
  foodName: string;
}

const FoodCard = ({ img, foodName }: FoodCardProps) => {
  const navigate = useNavigate();

  return (
    <StyledFoodCard onClick={() => navigate("/store")}>
      <img src={img} alt={foodName} width={30} height={30} />
      <FoodName>{foodName}</FoodName>
    </StyledFoodCard>
  );
};

const StyledFoodCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 108px;
  height: 74px;
  background-color: #f9fafb;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f1f3f5;
  }
`;

const FoodName = styled.span`
  font-size: 14px;
  margin-top: 6px;
`;

export default FoodCard;
