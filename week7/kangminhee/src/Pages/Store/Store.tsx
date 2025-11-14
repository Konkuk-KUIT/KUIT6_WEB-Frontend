import styled from "styled-components";
import { Link } from "react-router-dom"; 
import stores from "../../models/stores";
import HeaderBar from "../../components/HeaderBar";
import OrderBar from "../../components/OrderBar/OrderBar";

const Store = () => {
  return (
    <Container>
      {/* 상단 화살표 헤더 */}
      <HeaderBar />

      {/* 페이지 타이틀 */}
      <PageTitle>샐러드</PageTitle>

      {/* 가게 리스트 */}
      <StoreList>
        {stores.map((store, index) => (
          <StyledLink to={`/store/${store.id}`} key={store.id}>
            <StoreCard>
              <ImagePlaceholder />
              <InfoSection>
                <Rank>{index + 1}위</Rank>
                <StoreName>{store.name}</StoreName>
                <SubInfo>
                  ★ {store.rate} ({store.reviewCnt.toLocaleString()})
                </SubInfo>
                <SubInfo>
                  {store.minDeliveryTime}분~{store.maxDeliveryTime}분 · 배달비{" "}
                  {store.deliveryFee.toLocaleString()}원
                </SubInfo>
              </InfoSection>
            </StoreCard>
          </StyledLink>
        ))}
      </StoreList>

      {/* 하단 주문바 */}
      <OrderBarWrapper>
        <OrderBar />
      </OrderBarWrapper>
    </Container>
  );
};

export default Store;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 120px;
  background-color: #fff;
`;

const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  padding: 0 16px;
  margin-top: 4px; /* 화살표와 간격 살짝 */
  margin-bottom: 8px;
`;

const StoreList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* 텍스트 색상 유지 */
`;

const StoreCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #fafafa;
  }
`;

const ImagePlaceholder = styled.div`
  width: 54px;
  height: 54px;
  background-color: #f5f5f5;
  border-radius: 8px;
  flex-shrink: 0;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Rank = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #222;
`;

const StoreName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-top: 2px;
`;

const SubInfo = styled.div`
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
