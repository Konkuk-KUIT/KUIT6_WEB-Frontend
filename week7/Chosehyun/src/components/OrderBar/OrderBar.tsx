import Button from "../Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


interface Menu {
  price: number;
}



const StyledOrderBar = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  background-color: white; 
  padding: 16px;
  border-top: 1px solid #eee; 
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05); 
`;

const PriceInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelText = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 2px;
`;

const PriceText = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #191F28;
`;


const OrderBar = () => {
  const navigate = useNavigate();

  const menus: Menu[] = [];
  const totalPrice = 12100; 

  const handleOrder = () => {
    navigate(`/cart`); 
  };

  return (
    <StyledOrderBar>
      <PriceInfoWrapper>
        <LabelText>총 주문금액</LabelText>
        <PriceText>{totalPrice.toLocaleString()}원</PriceText>
      </PriceInfoWrapper>
      <Button onClick={handleOrder} type="button" size="lg">
        주문하기
      </Button>
    </StyledOrderBar>
  );
};

export default OrderBar;