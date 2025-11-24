import Button from "../Button";
import styled from "styled-components"

// interface Menu {
//   price: number;
// }

const OrderBar = () => {
  //const menus: Menu[] = [];

  const handleOrder = () => {};

  // const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0);
  const totalPrice = 12100;

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
