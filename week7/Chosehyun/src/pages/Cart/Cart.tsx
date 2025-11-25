import stores from "../../models/stores";
import styled from "styled-components";
import arrowIcon from "../../assets/arrow.svg"; 
import { useNavigate, useParams } from "react-router-dom";
import useCartStore from "../../pages/Store/useCartStore";

const CartContainer = styled.div`
  min-height: 100vh;
  background-color: #f7f7f7;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: white;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
`;

const CancelButton = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 16px;
  cursor: pointer;
`;

const OrderItemSection = styled.div`
  background-color: white;
  padding: 16px;
  margin-bottom: 8px;
`;

const StoreNameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const StoreNameText = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #191F28;
  margin: 0;
`;

const MinOrderWarning = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #ff3b30; 
  margin-left: 10px;
`;

const MenuCard = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
`;

const MenuThumbnail = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin-right: 12px;
  flex-shrink: 0;
`;

const MenuDetails = styled.div`
  flex-grow: 1;
`;

const MenuName = styled.h4`
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 4px 0;
`;

const MenuPrice = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #191F28;
`;

const MenuOptions = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0;
`;

const QuantityAndArrow = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #191F28;
  margin-left: 15px;
  cursor: pointer;
`;

const AddMoreButton = styled.button`
  background: none;
  border: none;
  color: #4A90E2;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 0;
  cursor: pointer;
  margin-top: 10px;
  display: block;
  width: 100%;
  text-align: center;
`;

const CalculationSection = styled.div`
  background-color: white;
  padding: 16px;
  margin-bottom: 8px;
`;

const CalRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding: 6px 0;
  
  & > span:first-child {
    color: #666;
  }
  & > span:last-child {
    font-weight: ${(props: { $total?: boolean }) => (props.$total ? '700' : '500')};
    color: ${(props: { $total?: boolean }) => (props.$total ? '#191F28' : '#333')};
  }
`;

const TotalRow = styled(CalRow)`
  border-top: none; 
  padding-top: 6px;
  margin-top: 6px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px;
  background-color: white; 
`;

const MinOrderText = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`;

const PayButton = styled.button`
  width: 100%;
  background-color: #e0e6f7; 
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props: { $active: boolean }) => props.$active ? '#4A90E2' : '#e0e6f7'};
  color: ${(props: { $active: boolean }) => props.$active ? 'white' : '#999'};
`;

const Cart = () => {
  const navigate = useNavigate();
  const { storeId } = useParams<{ storeId: string }>();
  const { menus, clearCart } = useCartStore();
  const currentStoreId = Number(storeId);
  const store = stores.find(s => s.id === currentStoreId);

  if (!store) {
    return <div>장바구니 정보를 불러올 수 없습니다.</div>;
  }
  
  const orderPrice = menus.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = store.deliveryFee;
  const totalPayment = orderPrice + deliveryFee;
  const minOrderPrice = store.minDeliveryPrice;
  const isMinOrderMet = orderPrice >= minOrderPrice;
  
  
  const handleBack = () => navigate(-1);
  const handleCancel = () => {
    if (window.confirm("주문을 취소하시겠습니까?")) {
      clearCart();
      navigate('/');
    }
  };
  const handlePayment = () => {
    if (isMinOrderMet) {
        alert(`${totalPayment.toLocaleString()}원 결제 요청`);
    } else {
        alert(`최소 주문 금액 ${minOrderPrice.toLocaleString()}원을 채워주세요.`);
    }
  };
  const handleAddMore = () => {
      navigate(`/store/${store.id}`);
  };

  return (
    <CartContainer>
      <Header>
        <BackButton onClick={handleBack}>
          <img src={arrowIcon} alt="뒤로가기" style={{ width: '24px', height: '24px' }} />
        </BackButton>
        <CancelButton onClick={handleCancel}>주문 취소</CancelButton>
      </Header>

      <OrderItemSection>
        <StoreNameHeader>
          <StoreNameText>{store.name}</StoreNameText>
          {!isMinOrderMet && <MinOrderWarning>최소금액 미달 ⓘ</MinOrderWarning>}
        </StoreNameHeader>

        {menus.map((item, index) => (
          <MenuCard key={index}>
            <MenuThumbnail />
            <MenuDetails>
              <MenuName>{item.name}</MenuName>
              <MenuOptions>{item.options}</MenuOptions>
              <MenuPrice>{item.price.toLocaleString()}원</MenuPrice>
            </MenuDetails>
            <QuantityAndArrow>
              {item.quantity}개 <span style={{ marginLeft: '5px', transform: 'rotate(90deg)' }}>{'>'}</span>
            </QuantityAndArrow>
          </MenuCard>
        ))}
        
        <AddMoreButton onClick={handleAddMore}>더 담기 +</AddMoreButton>
      </OrderItemSection>

      <CalculationSection>
        <CalRow>
          <span>주문금액</span>
          <span>{orderPrice.toLocaleString()}원</span>
        </CalRow>
        <CalRow>
          <span>배달요금</span>
          <span>{deliveryFee.toLocaleString()}원</span>
        </CalRow>
        
        <TotalRow $total>
          <span>총 결제금액</span>
          <span>{totalPayment.toLocaleString()}원</span>
        </TotalRow>
      </CalculationSection>

      <FooterSection>
        <MinOrderText>최소 주문금액 {minOrderPrice.toLocaleString()}원</MinOrderText>
        
        <PayButton 
          onClick={handlePayment} 
          disabled={!isMinOrderMet}
          $active={isMinOrderMet}
        >
          {totalPayment.toLocaleString()}원 결제하기
        </PayButton>
      </FooterSection>
    </CartContainer>
  );
};

export default Cart;
