import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { useCartStore } from "../../pages/Store/useCartStore";

const OrderBar = () => {
  const navigate = useNavigate();
  
  const items = useCartStore((state) => state.items);
  const getFinalPrice = useCartStore((state) => state.getFinalPrice);
  const getItemCount = useCartStore((state) => state.getItemCount);
  
  const totalPrice = getFinalPrice();
  const itemCount = getItemCount();

  const handleOrder = () => {
    if (itemCount > 0) {
      navigate("/cart");
    }
  };

  // 장바구니가 비어있으면 기본 UI 표시
  if (itemCount === 0) {
    return (
      <Wrapper>
        <PriceBox>
          <label>총 주문금액</label>
          <Price>0원</Price>
        </PriceBox>

        <Button size="lg" type="button" onClick={handleOrder} disabled>
          주문하기
        </Button>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <PriceBox>
        <label>총 주문금액</label>
        <Price>{totalPrice.toLocaleString()}원</Price>
      </PriceBox>

      <Button size="lg" type="button" onClick={handleOrder}>
        주문하기 ({itemCount})
      </Button>
    </Wrapper>
  );
};

export default OrderBar;

const Wrapper = styled.div`
  background: white;
  padding: 18px 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px -8px 16px 0px #0000001A;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #666;
`;

const Price = styled.div`
  margin-top: 4px;
  font-size: 18px;
  font-weight: 600;
  color: #4E5968;
`;