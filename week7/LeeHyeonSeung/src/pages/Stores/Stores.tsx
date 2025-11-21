import styled from "styled-components";
import { useParams } from "react-router-dom";
import stores from "../../models/stores";
import Header from "../../components/Store/Header";
import OrderBar from "../../components/OrderBar/OrderBar";
import MenuItem from "../../components/MenuItem/MenuItem";
import yellowStar from "../../assets/store/yellowstar.svg";

const Stores = () => {
  const { storeId } = useParams();
  const store = stores.find((s) => s.id === Number(storeId));

  if (!store) {
    return <div>가게를 찾을 수 없습니다.</div>;
  }

  return (
    <Container>
      <Header />

      <StoreInfo>
        <StoreName>{store.name}</StoreName>
        <Rating>
          <StarIcon src={yellowStar} alt="star" />
          <RateText>{store.rate}</RateText>
          <ReviewText>리뷰 {store.reviewCnt.toLocaleString()}</ReviewText>
        </Rating>
        <DeliveryDetails>
          <Detail>결제방법 토스결제만 현장결제 안됨</Detail>
          <Detail>최소주문 {store.minDeliveryPrice.toLocaleString()}원</Detail>
          <Detail>배달시간 약 15~25분</Detail>
        </DeliveryDetails>
      </StoreInfo>

      <Divider />

      <MenuSection>
        <SectionTitle>샐러드</SectionTitle>
        <MenuList>
          {store.menus.map((menu) => (
            <MenuItem key={menu.id} menu={menu} store={store} /> /* store prop 추가 */
          ))}
        </MenuList>
      </MenuSection>

      <OrderBar />
    </Container>
  );
};

export default Stores;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 100px;
`;

const StoreInfo = styled.div`
  padding: 30px 32px 20px;
`;

const StoreName = styled.h1`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 26px;
  line-height: 100%;
  color: #191f28;
  margin: 0 0 12px 0;
`;

const Rating = styled.div`
  font-family: Pretendard;
  line-height: 100%;
  display: flex;
  color: #4E5968;
  align-items: center;
  gap: 6px;
  margin-bottom: 20px;
`;

const StarIcon = styled.img`
  width: 18;
  height: 19;
  top: 7px;
  left: 23px;
  angle: 0 deg;
  opacity: 1;
  border-radius: 1px;
`;

const RateText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 17px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
`;

const ReviewText = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  display: flex;
  flex-direction: column;
`;

const DeliveryDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Detail = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-style: Medium;
  leading-trim: NONE;
  letter-spacing: 0px;
  font-size: 15px;
  line-height: 100%;
  color: #4e5968;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #E5E8EB;
  margin: 0 32px;
`;

const MenuSection = styled.div`
  padding: 20px 32px;
`;

const SectionTitle = styled.h2`
  font-family: Pretendard;
  font-weight: 600;
  font-style: SemiBold;
  font-size: 17px;
  line-height: 100%;
  color: #6b7684;
  margin: 0 0 16px 0;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
`;

