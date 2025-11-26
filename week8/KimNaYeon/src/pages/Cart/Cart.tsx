import styled from "styled-components";
import BackBar from "../../components/BackBar";
import Alert from "../../../public/alert.svg"
import Plus from "../../../public/plus.svg"
import useCartStore from "../Store/useCartStore";
import { useNavigate } from "react-router-dom";
import OrderItem from "../../components/OrderItem";
import Button from "../../components/Button";

const Cart = () => {
  const items = useCartStore((state) => state.items);
  if (items.length === 0) {
    return <div>장바구니가 비어있습니다.</div>
  }

  const totalOrderPrice = items.reduce((acc, cur) => acc + cur.menu.price, 0);
  const navigate = useNavigate();
  const isDisabled = totalOrderPrice < items[0].store.storeMinDeliveryPrice ? true : false;

  return (
    <StyledCart>
      <BackBar orderCancel={true}/>
      <StyledBorderline/>
      <div>
        <StyledStoreInfo>
          <StyledStoreName>{items[0].store.storeName}</StyledStoreName>
          {totalOrderPrice < items[0].store.storeMinDeliveryPrice && (
            <StyledAlert>
              <span>최소금액 미달</span>
              <img src={Alert} alt="alert"/>
            </StyledAlert>
          )}
        </StyledStoreInfo>
        <OrderItem/>
        <StyledMoreItem onClick={() => navigate(-1)}>
          <span>더 담기</span>
          <img src={Plus} alt="plus"/>
        </StyledMoreItem>
      </div>
      <StyledBorderline/>
      <StyledPriceInfo>
        <StyledPrice>
          <StyledPriceType>주문금액</StyledPriceType>
          <StyledPriceDetailed>{totalOrderPrice.toLocaleString()}원</StyledPriceDetailed>
        </StyledPrice>
        <StyledPrice>
          <StyledPriceType>배달요금</StyledPriceType>
          <StyledPriceDetailed>{items[0].store.storeDeliveryFee.toLocaleString()}원</StyledPriceDetailed>
        </StyledPrice>
        <StyledTPrice>
          <StyledPriceTotal>총 결제금액</StyledPriceTotal>
          <StyledPriceTotalDetailed>{(totalOrderPrice+items[0].store.storeDeliveryFee).toLocaleString()}원</StyledPriceTotalDetailed>
        </StyledTPrice>
      </StyledPriceInfo>
      <StyledMinDeliveryPrice>
        최소 주문금액 {items[0].store.storeMinDeliveryPrice.toLocaleString()}원
      </StyledMinDeliveryPrice>
      <StyledPaymentButton>
        <Button type="button" size="xl" disabled={isDisabled}>
          {(totalOrderPrice+items[0].store.storeDeliveryFee).toLocaleString()}원 결제하기
        </Button>
      </StyledPaymentButton>
    </StyledCart>
    
  );
};

const StyledCart = styled.div`
  width: 390px;
  margin-top: 41px;

`;

const StyledBorderline = styled.div`
  width: 100%;
  height: 16px;
  background: #F2F4F6;
`;

const StyledStoreInfo = styled.div`
  width: 100%;
  height: 58px;
  padding: 26px 25px 12px 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const StyledStoreName = styled.span`
  color: #6B7684;
  font-size: 17px;
  font-weight: 700;
`;

const StyledAlert = styled.div`
  margin-top: 1px;
  display: flex;
  gap: 6px;
  align-items: center;
  color: #F04452;
  font-size: 15px;
  font-weight: 500;
`;

const StyledMoreItem = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  border-top: 1px solid #E4E8EB;
  box-sizing: border-box;
  color: #3182F6;
  font-size: 17px;
  font-weight: 600;
`;

const StyledPriceInfo = styled.div`
  margin: 16px 0 222px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledPrice = styled.div`
  width: 100%;
  padding: 8px 23px 9px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const StyledPriceType = styled.div`
  color: #8B95A1;
  font-size: 17px;
  font-weight: 500;
`;

const StyledPriceDetailed = styled.div`
  color: #505967;
  font-size: 17px;
  font-weight: 500;
`;

const StyledTPrice = styled.div`
  width: 100%;
  padding: 16px 23px 18px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const StyledPriceTotal = styled.div`
  color: #4E5968;
  font-size: 17px;
  font-weight: 500;
`;

const StyledPriceTotalDetailed = styled.div`
  color: #4E5968;
  font-size: 17px;
  font-weight: 600;
`;

const StyledMinDeliveryPrice = styled.div`
  color: #6B7684;
  font-size: 17px;
  font-weight: 500;
  width: 100%;
  height: 39px;
  text-align: center;
`;

const StyledPaymentButton = styled.div`
  margin: 0 19px 21px 19px;
  background: #D0DFFB;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  color: #FFF;
  font-size: 16px;
  font-weight: 600;
  box-sizing: border-box;
`;

export default Cart;
