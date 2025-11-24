import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import useCartStore from "../../Pages/Store/useCartStore";

const OrderBar = () => {
  const navigate = useNavigate();
  const menus = useCartStore((state) => state.menus);

  const orderAmount = menus.reduce((acc, cur) => acc + cur.price, 0);

  const handleOrder = () => {
    if (menus.length === 0 || orderAmount < 12000) {
      alert("최소 주문금액 12,000원 이상이어야 합니다.");
      return;
    }
    navigate("/cart");
  };

  return (
    <BarWrapper>
      <PriceBox>
        <PriceLabel>총 주문금액</PriceLabel>
        <PriceValue>{orderAmount.toLocaleString()}원</PriceValue>
      </PriceBox>

      <StyledButton
        onClick={handleOrder}
        type="button"
        size="lg"
        disabled={menus.length === 0 || orderAmount < 12000}
      >
        주문하기
      </StyledButton>
    </BarWrapper>
  );
};

export default OrderBar;

const BarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceLabel = styled.span`
  font-size: 13px;
  color: #666;
`;

const PriceValue = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-top: 4px;
`;

const StyledButton = styled(Button)`
  flex-shrink: 0;
`;
