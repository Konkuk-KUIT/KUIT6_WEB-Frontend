import styled from "styled-components";
import HeaderBar from "../../components/HeaderBar";
import warningIcon from "../../assets/warning.svg"; 
import arrowIcon from "../../assets/rightarrow.svg";

const Cart = () => {
  const orderAmount = 10600;
  const deliveryFee = 2000;
  const totalPrice = orderAmount + deliveryFee;
  const minOrderPrice = 13000;

  return (
    <Container>
      {/* 상단 헤더 */}
      <HeaderBar />

      {/* 주문 요약 */}
      <HeaderSection>
        <StoreTitle>샐로리 한남점</StoreTitle>
        <WarningBox>
          <span>최소금액 미달</span>
          <img src={warningIcon} alt="경고" />
        </WarningBox>
      </HeaderSection>

      {/* 주문 항목 */}
      <OrderItem>
        <ImagePlaceholder />
        <OrderInfo>
          <ItemName>토마토 샐러드</ItemName>
          <ItemDesc>추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</ItemDesc>
          <Price>10,600원</Price>
        </OrderInfo>
         <RightSection>
          <Quantity>1개</Quantity>
          <ArrowIcon src={arrowIcon} alt="" />
        </RightSection>
      </OrderItem>

      {/* 추가 담기 버튼 */}
      <AddMore>더 담기 +</AddMore>

      {/* 결제 요약 */}
      <SummarySection>
        <SummaryRow>
          <span>주문금액</span>
          <span>{orderAmount.toLocaleString()}원</span>
        </SummaryRow>
        <SummaryRow>
          <span>배달요금</span>
          <span>{deliveryFee.toLocaleString()}원</span>
        </SummaryRow>
        <SummaryRow bold>
          <span>총 결제금액</span>
          <span>{totalPrice.toLocaleString()}원</span>
        </SummaryRow>
      </SummarySection>

      {/* 최소 주문금액 안내 */}
      <MinNotice>최소 주문금액 {minOrderPrice.toLocaleString()}원</MinNotice>

      {/* 결제 버튼 */}
      <PayButton disabled={totalPrice < minOrderPrice}>
        {totalPrice.toLocaleString()}원 결제하기
      </PayButton>
    </Container>
  );
};

export default Cart;


const Container = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
`;

const StoreTitle = styled.h2`
  font-size: 17px;
  font-weight: 700;
  color: #222;
`;

const WarningBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #ff4d4f;
  font-size: 14px;
  font-weight: 600;

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }
`;

const OrderItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
`;

const ImagePlaceholder = styled.div`
  width: 54px;
  height: 54px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const OrderInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: #334D48;
`;

const ItemDesc = styled.div`
  font-size: 13px;
  color: #6b7684;
  margin-top: 2px;
  line-height: 1.3;
`;

const Price = styled.div`
  font-size: 14px;
  color: #222;
  margin-top: 4px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Quantity = styled.div`
  font-size: 14px;
  color: #333;
`;

const ArrowIcon = styled.img`
  width: 14px;
  height: 14px;
  opacity: 0.5;
`;

const AddMore = styled.div`
  text-align: center;
  color: #2673f0;
  font-weight: 600;
  margin: 20px 0;
  cursor: pointer;
`;

const SummarySection = styled.div`
  background-color: #fff;
  padding: 20px 16px;
  border-top: 1px solid #eee;
`;

const SummaryRow = styled.div<{ bold?: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: ${(props) => (props.bold ? 700 : 500)};
  color: ${(props) => (props.bold ? "#000" : "#555")};
`;

const MinNotice = styled.div`
  text-align: center;
  font-size: 13px;
  color: #666;
  margin-top: 8px;
`;

const PayButton = styled.button<{ disabled?: boolean }>`
  width: 90%;
  align-self: center;
  margin: 16px 0 40px;
  padding: 14px 0;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  color: ${(props) => (props.disabled ? "#fff" : "#fff")};
  background-color: ${(props) => (props.disabled ? "#e5edff" : "#d0dffb")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s;
`;