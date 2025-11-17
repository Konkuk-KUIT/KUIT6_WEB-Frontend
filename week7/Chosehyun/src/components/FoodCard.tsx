import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface FoodCardProps {
  foodName: string;
  iconName: string; 
  categoryName: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ foodName, iconName, categoryName}) => {

  const navigate = useNavigate();

  const handleClick = () => {
      navigate(`/stores?category=${categoryName}`);
    };

  const imageSrc = new URL(`../assets/${iconName}`, import.meta.url).href;
  return (
    <StyledFoodCard onClick={handleClick}>
      <img src={imageSrc} alt={foodName + " 아이콘"} /> 
      <span className="font-[14px]">{foodName}</span>
    </StyledFoodCard> 
  );
};

const StyledFoodCard = styled.div`
  display: flex;
  width: 108px;
  height: 74px;
  background-color: #fafafb;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export default FoodCard;
