// import { Link } from "react-router-dom";
import styled from "styled-components";
import StoreItem from "../../components/Stores/StoreItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import stores from "../../models/stores";
import backarrow from "../../assets/stores/backarrow.svg";
import { useNavigate } from "react-router-dom";

const Stores = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Header>
          <BackButton onClick={() => navigate("/")}>
            <BackIcon src={backarrow} alt="뒤로가기" />
          </BackButton>
          <Title>샐러드</Title>
        </Header>

        <StoreList>
          {stores.map((store, index) => (
            <div key={store.id} onClick={() => navigate(`/store/${store.id}`)}>
              <StoreItem
                rank={index + 1}
                name={store.name}
                rate={store.rate}
                reviewCnt={store.reviewCnt}
                minDeliveryTime={store.minDeliveryTime}
                maxDeliveryTime={store.maxDeliveryTime}
                deliveryFee={store.deliveryFee}
                onClick={() => {}}
              />
            </div>
          ))}
        </StoreList>
      </Container>

      <OrderBar />
    </>
  );
};

export default Stores;

// style
const Container = styled.div`
  width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 111px;
  background: #fff;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 47px;
  width: 390px;
`;

const BackButton = styled.button`
  height: 41px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

const BackIcon = styled.img`
  width: 9.95px;
  height: 17.475px;
  flex-shrink: 0;
  padding: 7px 356px 10px 10px;
`;

const Title = styled.h1`
  color: #191f28;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 26px 298px 2px 24px;
  margin: 0;
`;

const StoreList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 12px;
`;
