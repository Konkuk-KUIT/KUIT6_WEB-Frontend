import styled from "styled-components";
import CartItem from "../../components/Cart/CartItem";
import backarrow from "../../assets/stores/backarrow.svg";
import { useNavigate } from "react-router-dom";
import useCartStore from "../Store/useCartStore";

const Cart = () => {
  const navigate = useNavigate();

  // Zustand에서 데이터 가져오기
  const menus = useCartStore((state) => state.menus);
  const storeName = useCartStore((state) => state.storeName);
  const resetStore = useCartStore((state) => state.resetStore);
  // Store에서 설정한 기본값들
  const minOrderPrice = 13000;
  const deliveryFee = 2000;

  const orderAmount = menus.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const total = orderAmount + deliveryFee;

  const isDisabled = orderAmount < minOrderPrice;

  return (
    <Container>
      {/* ---------- HEADER ---------- */}
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <BackIcon src={backarrow} alt="뒤로가기" />
        </BackButton>

        <CancelText
          onClick={() => {
            resetStore();
            navigate("/store");
          }}
        >
          주문취소
        </CancelText>
      </Header>

      {/* ---------- STORE HEADER ---------- */}
      <StoreHeader>
        <StoreName>{storeName}</StoreName>
        <AlertText>
          {orderAmount < minOrderPrice ? "최소금액 미달 ⓘ" : ""}
        </AlertText>
      </StoreHeader>

      {/* ---------- ITEM LIST ---------- */}
      <ItemSection>
        {menus.map((item, idx) => (
          <CartItem key={idx} {...item} />
        ))}

        <MoreButton onClick={() => navigate(-1)}>더 담기 +</MoreButton>
      </ItemSection>

      {/* ---------- PRICE SECTION ---------- */}
      <PriceSection>
        <Row>
          <Label>주문금액</Label>
          <Value>{orderAmount.toLocaleString()}원</Value>
        </Row>
        <Row>
          <Label>배달요금</Label>
          <Value>{deliveryFee.toLocaleString()}원</Value>
        </Row>

        <TotalRow>
          <Label>총 결제금액</Label>
          <TotalValue>{total.toLocaleString()}원</TotalValue>
        </TotalRow>

        <MinOrderText>
          최소 주문금액 {minOrderPrice.toLocaleString()}원
        </MinOrderText>
      </PriceSection>

      {/* ---------- PAY BUTTON ---------- */}
      <PayButton disabled={isDisabled}>
        {total.toLocaleString()}원 결제하기
      </PayButton>
    </Container>
  );
};

export default Cart;

/* ------------------------------ STYLE ------------------------------ */

const Container = styled.div`
  width: 390px;
  height: 844px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding-bottom: 111px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px 15px 0 10px;
`;

const BackButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const BackIcon = styled.img`
  width: 10px;
  height: 18px;
`;

const CancelText = styled.span`
  color: #333d4b;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const StoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid #f2f3f6;
`;

const StoreName = styled.h2`
  color: #6b7684;
  font-size: 17px;
  font-weight: 700;
  margin: 0;
`;

const AlertText = styled.span`
  color: #f04452;
  font-size: 15px;
  font-weight: 500;
`;

const ItemSection = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #f2f3f6;
`;

const MoreButton = styled.button`
  border: none;
  background: none;
  color: #3182f6;
  font-size: 17px;
  font-weight: 600;
  width: 390px;
  height: 59px;
  padding: 19px 0 20px;
  cursor: pointer;
`;

const PriceSection = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  color: #4e5968;
  font-size: 14px;
`;

const TotalRow = styled(Row)`
  margin-top: 4px;
  font-weight: 600;
`;

const Label = styled.span`
  color: #8b95a1;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
`;

const Value = styled.span`
  color: #505967;
  font-size: 17px;
  font-weight: 500;
`;

const TotalValue = styled.span`
  color: #191f28;
  font-weight: 700;
`;

const MinOrderText = styled.span`
  color: #6b7684;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  margin-top: 8px;
`;

const PayButton = styled.button<{ disabled: boolean }>`
  width: 350px;
  height: 56px;
  border-radius: 16px;
  background: ${(props) => (props.disabled ? "#D0DFFB" : "#3182f6")};
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  position: fixed;
  bottom: 0;
  margin: 0 20px 34px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
