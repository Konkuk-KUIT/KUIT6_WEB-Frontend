import Button from "../Button";
import styled from "styled-components"
import useCartStore from "../../pages/Store/useCartStore";
import { useNavigate } from "react-router-dom";

const OrderBar = () => {

  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);
  const handleOrder = () => {
    if (items.length > 0) {
      navigate("/cart");
    }
    else
      alert("장바구니가 비어있습니다.")
  };

  const totalPrice = items.reduce((acc, cur) => acc + cur.menu.price, 0);

  return (
    <StyledOrderBar>
      <StyledOrderBarText>
        <StyledOrderBarTextDesc>총 주문금액</StyledOrderBarTextDesc>
        <StyledOrderBarTextPrice>{totalPrice.toLocaleString()}원</StyledOrderBarTextPrice>
      </StyledOrderBarText>
      <Button onClick={handleOrder} type="button" size="lg">
        주문하기
      </Button>
    </StyledOrderBar>
  );
};

const StyledOrderBar = styled.div`
  height: 77px;
  width: 390px;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 -8px 16px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

const StyledOrderBarText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledOrderBarTextDesc = styled.div`
  color: #6B7684;
  font-size: 15px;
  font-weight: 400;
`;

const StyledOrderBarTextPrice = styled.div`
  color: #4E5968;
  font-size: 17px;
  font-weight: 600;
`;

export default OrderBar;
