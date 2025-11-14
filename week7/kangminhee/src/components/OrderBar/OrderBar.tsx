import styled from "styled-components";
import Button from "../../components/Button";

interface Menu {
  price: number;
}

const OrderBar = () => {
  const menus: Menu[] = [{ price: 12100 }]; 

  const handleOrder = () => {
    alert("주문하기 클릭!");
  };

  const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <BarWrapper>
      <PriceBox>
        <PriceLabel>총 주문금액</PriceLabel>
        <PriceValue>{totalPrice.toLocaleString()}원</PriceValue>
      </PriceBox>
      <StyledButton onClick={handleOrder} type="button" size="lg">
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
