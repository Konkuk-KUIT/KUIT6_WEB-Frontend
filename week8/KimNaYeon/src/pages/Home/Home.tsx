import cards from "../../models/cards"
import FoodCards from "../../components/FoodCards"
import styled from "styled-components";
import OrderBar from "../../components/OrderBar/OrderBar";

const Home = () => {
  return (
    <StyledHome>
      <StyledHomeDesc>
        <StyledHomeTitle>
          오늘은 무엇을 먹을까요?
        </StyledHomeTitle>
        <StyledHomeAddress>
          한남중앙로 40길 (한남빌리지)(으)로 배달 {'>'}
        </StyledHomeAddress>
      </StyledHomeDesc>
      <FoodCards items={cards.items}/>
      <OrderBar/>
    </StyledHome>
    
  );
};

const StyledHome = styled.div`
  width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 77px;
  box-sizing: border-box;
`;

const StyledHomeDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin: 74px 0 70px 0;
  padding-left: 24px;
  width: 390px;
  height: 93px;
  box-sizing: border-box;
`;

const StyledHomeTitle = styled.div`
  color: #191F28;
  font-size: 26px;
  font-weight: 700;
`;

const StyledHomeAddress = styled.div`
  color: #333D4B;
  font-size: 17px;
  font-weight: 500;
`;

export default Home;
