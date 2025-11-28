import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../pages/Store/useCartStore";
import Header from "../../components/Store/Header";
import nextIcon from "../../assets/cart/next.svg";
import plusIcon from "../../assets/cart/plus.svg";
import warningIcon from "../../assets/cart/warning.svg";

const Cart = () => {
  const navigate = useNavigate();
  const { store, items, clearCart, getTotalPrice, isMinimumMet } = useCartStore();
  
  const totalPrice = getTotalPrice();
  const minimumMet = isMinimumMet();
  const finalPrice = store ? totalPrice + store.deliveryFee : totalPrice;

  // 장바구니가 비어있으면
  if (!store || items.length === 0) {
  return (
    <Wrapper>
      <Header />
      <EmptyCart>
        <EmptyText>장바구니가 비어있습니다</EmptyText>
        <MoreButton onClick={() => navigate("/store")}>
          메뉴 담으러 가기 <PlusImg src={plusIcon} alt="plus" />
        </MoreButton>
      </EmptyCart>
    </Wrapper>
  );
}

  const handleCancel = () => {
    clearCart();
    navigate("/store");
  };

  const handleMoreOrder = () => {
    navigate(`/store/${store.id}`);
  };

  const handlePayment = () => {
    if (minimumMet) {
      alert("주문이 완료되었습니다!");
      clearCart();
      navigate("/store");
    }
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
        <CancelText onClick={handleCancel}>주문취소</CancelText>
      </HeaderWrapper>

      <Divider2 />

      <Section>
        <StoreHeader>
          <StoreName>{store.name}</StoreName>
          {!minimumMet && (
            <MinPrice>
              최소금액 미달 <WarningImg src={warningIcon} alt="warning" />
            </MinPrice>
          )}
        </StoreHeader>

        {items.map((item) => (
          <MenuCard key={item.menu.id}>
            <Thumbnail />
            <MenuContent>
              <MenuTitle>{item.menu.name}</MenuTitle>
              <MenuIngredients>{item.menu.ingredients}</MenuIngredients>
              <MenuPrice>{item.menu.price.toLocaleString()}원</MenuPrice>
            </MenuContent>
            <MenuRight>
              <MenuCount>{item.quantity}개</MenuCount>
              <NextArrow src={nextIcon} alt="next" />
            </MenuRight>
          </MenuCard>
        ))}
      </Section>

      <Divider1 />

      <MoreButton onClick={handleMoreOrder}>
        더 담기 <PlusImg src={plusIcon} alt="plus" />
      </MoreButton>

      <Divider2 />

      <PriceBox>
        <PriceRow>
          <Label>주문금액</Label>
          <Value>{totalPrice.toLocaleString()}원</Value>
        </PriceRow>
        <PriceRow>
          <Label>배달요금</Label>
          <Value>{store.deliveryFee.toLocaleString()}원</Value>
        </PriceRow>
        <TotalRow>
          <Label>총 결제금액</Label>
          <TotalValue>{finalPrice.toLocaleString()}원</TotalValue>
        </TotalRow>
      </PriceBox>

      <BottomArea>
        <MinOrderText>
          최소 주문금액 {store.minDeliveryPrice.toLocaleString()}원
        </MinOrderText>

        <PayButton disabled={!minimumMet} onClick={handlePayment}>
          {finalPrice.toLocaleString()}원 결제하기
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
  cursor: pointer;
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
  cursor: pointer;
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
  font-size: 17px;
  color: #6B7684;
  margin-top: 20px;
`;

const PayButton = styled.button<{ disabled?: boolean }>`
  width: 90%;
  height: 56px;
  margin: 12px auto 0;
  display: block;
  border-radius: 16px;
  background: ${props => props.disabled ? '#D0DFFB' : '#3182F6'};
  border: none;
  color: #ffffff;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 20px;
`;

const EmptyText = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 18px;
  color: #6B7684;
`;