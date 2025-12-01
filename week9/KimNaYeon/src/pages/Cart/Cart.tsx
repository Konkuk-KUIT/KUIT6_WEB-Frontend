import styled from "styled-components";
import BackBar from "../../components/BackBar";
import stores from "../../models/stores"
import Alert from "../../../public/alert.svg"
import Arrow from "../../../public/grayarrow.svg"
import Plus from "../../../public/plus.svg"

const Cart = () => {
  const firstStore = stores[0];
  if (!firstStore || !firstStore.menus) {
    return null;
  }
  const firstMenu = firstStore.menus[0];
  const orderPrice = 10600;
  return (
    <StyledCart>
      <BackBar orderCancel={true}/>
      <StyledBorderline/>
      <div>
        <StyledStoreInfo>
          <StyledStoreName>{firstStore.name}</StyledStoreName>
          {orderPrice < firstStore.minDeliveryPrice && (
            <StyledAlert>
              <span>최소금액 미달</span>
              <img src={Alert} alt="alert"/>
            </StyledAlert>
          )}
        </StyledStoreInfo>
        <StyledItemInfo>
          <StyledItemImage/>
          <StyledItemDesc>
            <StyledItemName>{firstMenu.name}</StyledItemName>
            <StyledItemIngredients>추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</StyledItemIngredients>
            <StyledItemPrice>{firstMenu.price.toLocaleString()}원</StyledItemPrice>
          </StyledItemDesc>
          <StyledItemNum>
            <span>1개</span>
            <img src={Arrow} alt="arrow"/>
          </StyledItemNum>
        </StyledItemInfo>
        <StyledMoreItem>
          <span>더 담기</span>
          <img src={Plus} alt="plus"/>
        </StyledMoreItem>
      </div>
      <StyledBorderline/>
      <StyledPriceInfo>
        <StyledPrice>
          <StyledPriceType>주문금액</StyledPriceType>
          <StyledPriceDetailed>{orderPrice.toLocaleString()}원</StyledPriceDetailed>
        </StyledPrice>
        <StyledPrice>
          <StyledPriceType>배달요금</StyledPriceType>
          <StyledPriceDetailed>{firstStore.deliveryFee.toLocaleString()}원</StyledPriceDetailed>
        </StyledPrice>
        <StyledTPrice>
          <StyledPriceTotal>총 결제금액</StyledPriceTotal>
          <StyledPriceTotalDetailed>{(orderPrice+firstStore.deliveryFee).toLocaleString()}원</StyledPriceTotalDetailed>
        </StyledTPrice>
      </StyledPriceInfo>
      <StyledMinDeliveryPrice>
        최소 주문금액 {firstStore.minDeliveryPrice.toLocaleString()}원
      </StyledMinDeliveryPrice>
      <StyledPaymentButton>
        {(orderPrice+firstStore.deliveryFee).toLocaleString()}원 결제하기
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

const StyledItemInfo = styled.div`
  width: 100%;
  height: 110px;
  padding-left: 24px;
  display: flex;
  gap: 16px;
  box-sizing: border-box;
`;

const StyledItemImage = styled.div`
  margin-top: 19px;
  width: 54px;
  height: 57px;
  border-radius: 8px;
  background: #ECECEC;
  box-sizing: border-box;
`;

const StyledItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
`;

const StyledItemName = styled.div`
  color: #333D4B;
  font-size: 17px;
  font-weight: 700;
`;

const StyledItemIngredients = styled.div`
  width: 210px;
  color: #6B7684;
  font-size: 13px;
  font-weight: 500;
`;

const StyledItemPrice = styled.div`
  color: #6B7684;
  font-size: 13px;
  font-weight: 500;
`;

const StyledItemNum = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
  height: 100%;
  align-items: center;
  color: #6B7684;
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
  margin: 0 20px 21px 20px;
  padding: 18px 112px 19px 113px;
  background: #D0DFFB;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  color: #FFF;
  font-size: 16px;
  font-weight: 600;
`;

export default Cart;
