import styled from "styled-components";
import stores from "../../models/stores";
import StoreList from "../../components/Store/StoreList";
import OrderBar from "../../components/OrderBar/OrderBar";
import Header from "../../components/Store/Header";

const Store = () => {
  return (
    <Container>
      <Header />

      <Title>샐러드</Title>

      <StoreList stores={stores} />

      <OrderBar />
    </Container>
  );
};

export default Store;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  padding-bottom: 100px;
`;

const Title = styled.h1`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 26px;
  line-height: 100%;
  color: #191f28;
  margin: 20px 32px 20px;
`;