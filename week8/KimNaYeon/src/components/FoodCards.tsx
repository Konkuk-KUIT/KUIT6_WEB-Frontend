import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {
  items: {name: string; image: string}[];
}

const FoodCards = ({items}: Props) => {
  const navigate = useNavigate();
  const handleClick = (name: string) => {
    if (name === "샐러드") {
      navigate("/store");
    }
  }

  return (
    <StyledCards>
      {items.map(({name, image}) => (
        <StyledFoodCard onClick={()=>handleClick(name)} key={name}>
          <img src={image} alt={name} />
          <span>{name}</span>
        </StyledFoodCard>
      ))}
    </StyledCards>
  );
};

const StyledFoodCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 108px;
  height: 74px;
  font-size: 14px;
  font-weight: 600;
  color: #333D4B;
  background-color: #FAFAFB;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px 9px;
  ${StyledFoodCard}:last-child { gap: 16px; }
`;

export default FoodCards;
