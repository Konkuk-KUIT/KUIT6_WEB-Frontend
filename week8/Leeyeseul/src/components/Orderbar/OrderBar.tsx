import styled from "styled-components";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

interface Props {
  totalPrice: number;
  buttonLabel?: string;
  disabled?: boolean;
}

const OrderBar = ({
  totalPrice,
  buttonLabel = "주문하기",
  disabled,
}: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {     
    if (disabled) return;
    navigate("/cart");            
  };

  return (
    <Container>
      <Inner>
        <Summary>
          <Label>총 주문금액</Label>
          <Price>{totalPrice.toLocaleString()}원</Price>
        </Summary>

        <Button size="xl" 
        disabled={disabled}
        onClick={handleClick} >
        {buttonLabel}
        </Button>
      </Inner>
    </Container>
  );
};

export default OrderBar;

const Container = styled.div`
  position: fixed;         
  left: 0;
  right: 0;
  bottom: 0;

  padding: 12px 24px 20px;
  box-sizing: border-box;
  background-color: #ffffff;

  border-radius: 30px 30px 0 0;
  box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.08);

  z-index: 10;
`;

const Inner = styled.div`
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 13px;
  color: #868e96;
`;

const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-top: 4px;
`;
