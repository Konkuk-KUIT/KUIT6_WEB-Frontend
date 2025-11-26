import styled from "styled-components";
import MenuGrid from "../../components/MenuGrid/MenuGrid";
import OrderBar from "../../components/OrderBar/OrderBar";

const Home = () => {
  return (
    <Wrapper>
      <Title>오늘은 무엇을 먹을까요?</Title>
      <Address>한남중앙로 40길 (한남 빌리지)으로 배달 &gt;</Address>
      <MenuGrid />
      <OrderBar />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 26px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #191F28;
  margin: 0;
  padding-top: 70px;
  margin-left: 24px;
`;

const Address = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 17px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #333D4B;
  margin: 20px 0 0 24px;
`;