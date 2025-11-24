import styled from "styled-components";
import Button from "../Button";
import useCartStore from "../../pages/Store/useCartStore";
import { useNavigate } from "react-router-dom";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const navigate = useNavigate();
  const totalPrice = menus.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  return (
    <BarWrapper>
      <BarContainer>
        <PriceSection>
          <PriceLabel>총 주문금액</PriceLabel>
          <PriceValue>{totalPrice.toLocaleString()}원</PriceValue>
        </PriceSection>

        <OrderButton onClick={() => navigate("/cart")}>주문하기</OrderButton>
      </BarContainer>
    </BarWrapper>
  );
};

export default OrderBar;

// style
const BarWrapper = styled.div`
  width: 390px;
  height: 111px;
  flex-shrink: 0;
  position: fixed;
  bottom: 0;
  border-radius: 16px 16px 0 0;
  background: #fff;
  box-shadow: 0 -8px 16px 0 rgba(0, 0, 0, 0.1);
`;

const BarContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-radius: 16px 16px 0 0;
`;

const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceLabel = styled.span`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PriceValue = styled.span`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const OrderButton = styled(Button)`
  display: inline-flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #3182f6;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
