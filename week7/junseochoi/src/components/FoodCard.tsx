import pizza from "../assets/pizza.svg";
import styled from "styled-components";

const FoodCard = () => {
  const foodName = "피자";

  return (
    <StyledFoodCard $bgcolor={"red"}>
      <img src={pizza} alt="음식사진" />
      <span className="font-[14px]">{foodName}</span>
    </StyledFoodCard>
  );
};

const StyledFoodCard = styled.div`
  display: flex;
  width: 108px;
  height: 74px;
  background-color: ${(props) => props.$bgcolor};
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default FoodCard;
