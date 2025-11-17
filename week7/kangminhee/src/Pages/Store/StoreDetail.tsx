import { useParams } from "react-router-dom";
import styled from "styled-components";
import HeaderBar from "../../components/HeaderBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import Button from "../../components/Button"; 
import stores from "../../models/stores";

const StoreDetail = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const store = stores.find((s) => s.id === Number(storeId));

  if (!store) return <div>가게 정보를 찾을 수 없습니다.</div>;

  return (
    <Container>
      <HeaderBar />

      <StoreInfo>
        <StoreName>{store.name}</StoreName>
        <Rating>
          ★ {store.rate} <span>리뷰 {store.reviewCnt.toLocaleString()}</span>
        </Rating>
        <InfoText>결제방법 토스결제만 현장결제 안됨</InfoText>
        <InfoText>최소주문 {store.minDeliveryPrice.toLocaleString()}원</InfoText>
        <InfoText>
          배달시간 약 {store.minDeliveryTime}~{store.maxDeliveryTime}분
        </InfoText>
      </StoreInfo>

      <MenuSection>
        <SectionTitle>샐러드</SectionTitle>

        {store.menus.map((menu) => (
          <MenuCard key={menu.id}>
            <MenuImage />
            <MenuInfo>
              <MenuTitle>
                {menu.name}
                {menu.isBest && <BestTag>BEST</BestTag>}
              </MenuTitle>
              <MenuPrice>{menu.price.toLocaleString()}원</MenuPrice>
              <MenuDesc>{menu.ingredients}</MenuDesc>
            </MenuInfo>
            <Button size="sm" type="button">
              담기
            </Button>
          </MenuCard>
        ))}
      </MenuSection>

      <OrderBarWrapper>
        <OrderBar />
      </OrderBarWrapper>
    </Container>
  );
};

export default StoreDetail;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 120px;
  background-color: #fff;
`;

const StoreInfo = styled.div`
  padding: 16px;
  border-bottom: 1px solid #f2f2f2;
`;

const StoreName = styled.h1`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 6px;
`;

const Rating = styled.div`
  font-size: 14px;
  color: #444;
  margin-bottom: 10px;

  span {
    color: #888;
    margin-left: 6px;
  }
`;

const InfoText = styled.div`
  font-size: 13px;
  color: #666;
  margin-top: 4px;
`;

const MenuSection = styled.div`
  padding: 16px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const MenuCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  padding: 12px 0;
`;

const MenuImage = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f5f5f5;
  flex-shrink: 0;
  margin-right: 12px;
`;

const MenuInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MenuTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #111;
`;

const BestTag = styled.span`
  font-size: 13px;
  color: #2f70ff;
  font-weight: 700;
  margin-left: 6px;
`;

const MenuPrice = styled.div`
  font-size: 14px;
  color: #333;
  margin-top: 2px;
`;

const MenuDesc = styled.div`
  font-size: 13px;
  color: #666;
  margin-top: 3px;
`;

const OrderBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
`;
