import styled from "styled-components";
import Button from "../Button";

interface Menu {
  price: number;
}

const OrderBar = () => {
  const menus: Menu[] = []; // 실제 구현 시 state 넣으면 됨

  return (
    <Wrapper>
      <PriceBox>
        <label>총 주문금액</label>
        <Price>12,100원</Price>
      </PriceBox>

      <Button size="lg" type="button">
        주문하기
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
