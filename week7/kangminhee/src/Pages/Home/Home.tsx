import styled from "styled-components";
import FoodGrid from "../../components/FoodGrid";
import OrderBar from "../../components/OrderBar/OrderBar";


const Home = () => {
  return (
    <Container>
      <Header>
        <Title>오늘은 무엇을 먹을까요?</Title>
        <Address>
            한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;
        </Address>

      </Header>

      <FoodGrid />

      <OrderBarWrapper>
        <OrderBar />
      </OrderBarWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh; 
  padding: 24px 16px 120px;
  background-color: #fafafa; 
`;

const Header = styled.div`
  width: 100%;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Address = styled.p`
  font-size: 14px;
  color: #000;
  font-weight: 400;
`;


const OrderBarWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  padding: 12px 16px; 
`;

export default Home;