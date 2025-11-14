import styled from "styled-components";
import stores from "../../models/stores";
import Header from "../../components/Store/Header";
import nextIcon from "../../assets/cart/next.svg";
import plusIcon from "../../assets/cart/plus.svg";
import warningIcon from "../../assets/cart/warning.svg";

const Cart = () => {
  const store = stores[0];
  const menu = store.menus[0];

  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
        <CancelText>주문취소</CancelText>
      </HeaderWrapper>

      <Divider2 />

      <Section>
        <StoreHeader>
          <StoreName>{store.name}</StoreName>
          <MinPrice>
            최소금액 미달 <WarningImg src={warningIcon} alt="warning" />
          </MinPrice>
        </StoreHeader>

        <MenuCard>
          <Thumbnail />
          <MenuContent>
            <MenuTitle>{menu.name}</MenuTitle>
            <MenuIngredients>추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</MenuIngredients>
            <MenuPrice>{(menu.price+3000).toLocaleString()}원</MenuPrice>
          </MenuContent>
          <MenuRight>
            <MenuCount>1개</MenuCount>
            <NextArrow src={nextIcon} alt="next" />
          </MenuRight>
        </MenuCard>
      </Section>

      <Divider1 />

      <MoreButton>
        더 담기 <PlusImg src={plusIcon} alt="plus" />
      </MoreButton>

      <Divider2 />

      <PriceBox>
        <PriceRow>
          <Label>주문금액</Label>
          <Value>{(menu.price+3000).toLocaleString()}원</Value>
        </PriceRow>
        <PriceRow>
          <Label>배달요금</Label>
          <Value>{store.deliveryFee.toLocaleString()}원</Value>
        </PriceRow>
        <TotalRow>
          <Label>총 결제금액</Label>
          <TotalValue>{(menu.price + 3000 + store.deliveryFee).toLocaleString()}원</TotalValue>
        </TotalRow>
      </PriceBox>

      <BottomArea>
        <MinOrderText>
          최소 주문금액 {store.minDeliveryPrice.toLocaleString()}원
        </MinOrderText>

        <PayButton>
          {(menu.price + 3000 + store.deliveryFee).toLocaleString()}원 결제하기
        </PayButton>
      </BottomArea>
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  background: #fff;
  padding-bottom: 40px;
`;

const HeaderWrapper = styled.div`
  position: relative;
  height: 65px;
`;

const CancelText = styled.span`
  position: absolute;
  right: 16px;
  top: 60%;
  transform: translateY(-50%);
  font-family: Pretendard;
  font-weight: 600;
  font-size: 16px;
  color: #333D4B;
`;

const Section = styled.div`
  padding: 20px 16px;
`;

const StoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

const StoreName = styled.h2`
  font-family: Pretendard;
  font-weight: 700;
  font-style: Bold;
  font-size: 17px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  color: #6B7684;

`;

const MinPrice = styled.span`
  font-family: Pretendard;
  font-weight: 500;
  font-style: Medium;
  font-size: 15px;
  color: #F04452;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const WarningImg = styled.img`
  width: 14px;
  height: 14px;
`;

const MenuCard = styled.div`
  display: flex;
  background: #fff;
  padding: 12px 0;
`;

const Thumbnail = styled.div`
  width: 54px;
  height: 54px;
  background: #ECECEC;
  border-radius: 8px;
  margin-right: 12px;
`;

const MenuContent = styled.div`
  flex: 1;
`;

const MenuTitle = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #333D4B;

`;

const MenuIngredients = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #6B7684;
  margin: 4px 0 6px;
  line-height: 1.3;
`;

const MenuPrice = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #6B7684;
`;

const MenuRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const MenuCount = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #6B7684;
`;

const NextArrow = styled.img`
  width: 16px;
  height: 16px;
`;

const Divider1 = styled.div`
  width: 100%;
  height: 2px;
  background: #F2F4F6;
`;

const PlusImg = styled.img`
  width: 13px;
  height: 13px;
`;

const Divider2 = styled.div`
  width: 100%;
  height: 16px;
  background: #F2F4F6;
`;

const MoreButton = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  text-align: center;
  font-size: 17px;
  color: #3182F6;
  padding: 16px 0;
`;

const PriceBox = styled.div`
  padding: 20px 16px;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  font-size: 15px;
  color: #444;
`;

const TotalRow = styled(PriceRow)`
  margin-top: 8px;
  font-weight: 600;
`;

const Label = styled.span``;

const Value = styled.span``;

const TotalValue = styled.span`
  font-size: 16px;
`;

const BottomArea = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  padding: 16px 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const MinOrderText = styled.div`
  text-align: center;
  font-family: Pretendard;
  font-weight: 500;
  font-style: Medium;
  font-size: 17px;
  color: #6B7684;
  margin-top: 20px;
`;

const PayButton = styled.button`
  width: 90%;
  height: 56px;
  margin: 12px auto 0;
  bottom: 16px;
  display: block;
  border-radius: 16px;
  background: #D0DFFB;
  border: none;
  
  color: #ffffff;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 100%;
`;
