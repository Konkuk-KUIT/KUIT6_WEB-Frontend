import styled from "styled-components";
import Button from "../../components/Button";

interface CartBottomBarProps {
  totalPrice: number;
  minOrderAmount: number;
}

const CartBottomBar = ({ totalPrice, minOrderAmount }: CartBottomBarProps) => {
  const disabled = totalPrice < minOrderAmount;

  return (
    <Wrapper>
      <MinOrderText>
        최소 주문금액 {minOrderAmount.toLocaleString()}원
      </MinOrderText>

      <FullButton size="xl" disabled={disabled}>
        {totalPrice.toLocaleString()}원 결제하기
      </FullButton>
    </Wrapper>
  );
};

export default CartBottomBar;

const Wrapper = styled.div`
  padding: 16px 20px 24px;
  background: #ffffff;
  border-top: 1px solid #e9ecef;
`;

const MinOrderText = styled.div`
  text-align: center;
  font-size: 12px;
  color: #8b95a1;
  margin-bottom: 10px;
`;

const FullButton = styled(Button)`
  width: 100%;
`;
