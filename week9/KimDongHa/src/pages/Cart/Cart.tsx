import styled from "styled-components";
import CartItem from "../../components/Cart/CartItem";
import backarrow from "../../assets/stores/backarrow.svg";
import { useNavigate } from "react-router-dom";
import useCartStore from "../Store/useCartStore";

const Cart = () => {
  const navigate = useNavigate();
  const { storeName, minOrderPrice, deliveryFee, menus, clearCart } =
    useCartStore();

  const orderAmount = menus.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const total = orderAmount + (deliveryFee || 0);
  const isUnderMin =
    minOrderPrice > 0 && orderAmount > 0 && orderAmount < minOrderPrice;

  const handleCancel = () => {
    clearCart();
    navigate("/store");
  };

  return (
    <>
      <Container>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            <BackIcon src={backarrow} alt="뒤로가기" />
          </BackButton>
          <CancelText onClick={handleCancel}>주문취소</CancelText>
        </Header>

        <StoreHeader>
          <StoreName>{storeName || "가게를 선택해주세요"}</StoreName>
          {isUnderMin && <AlertText>최소금액 미달 ⓘ</AlertText>}
        </StoreHeader>

        <ItemSection>
          {menus.map((item, idx) => (
            <CartItem key={idx} {...item} />
          ))}
          <MoreButton onClick={() => navigate(-1)}>더 담기 +</MoreButton>
        </ItemSection>

        <PriceSection>
          <Row>
            <Label>주문금액</Label>
            <Value>{orderAmount.toLocaleString()}원</Value>
          </Row>
          <Row>
            <Label>배달요금</Label>
            <Value>{(deliveryFee || 0).toLocaleString()}원</Value>
          </Row>
          <TotalRow>
            <Label>총 결제금액</Label>
            <TotalValue>{total.toLocaleString()}원</TotalValue>
          </TotalRow>
          <MinOrderText>
            최소 주문금액 {minOrderPrice.toLocaleString()}원
          </MinOrderText>
        </PriceSection>

        <PayButton
          disabled={isUnderMin || menus.length === 0}
        >
          {total.toLocaleString()}원 결제하기
        </PayButton>
      </Container>
    </>
  );
};

export default Cart;

// style
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
  align-items: center;
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
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
`;

const StoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #f2f3f6;
`;

const StoreName = styled.h2`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 700;
  margin: 0;
`;

const AlertText = styled.span`
  color: #f04452;
  text-align: right;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
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
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  width: 390px;
  height: 59px;
  padding: 19px 0 20px 0;
  cursor: pointer;
`;

const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
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
  text-align: right;
  font-family: Pretendard;
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
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;

  position: fixed;
  bottom: 0;
  margin: 0px 112px 109px 88px;
`;

const PayButton = styled.button`
  display: inline-flex;
  width: 350px;
  height: 56px;
  padding: 18px 100px 19px 100px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  margin: 0px 20px 34px 20px;
  border: none;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;

  background: #3182f6;
  cursor: pointer;

  &:disabled {
    background: #d0dffb;
    cursor: not-allowed;
  }
`;
