import styled from "styled-components";
import TopBar from "../../components/TopBar/TopBar";
import CartBottomBar from "./CartBottomBar";
import useCartStore from "../Store/useCartStore";      
import { useNavigate } from "react-router-dom";        

const Cart = () => {
  const navigate = useNavigate();                      
  const { menus, clearCart } = useCartStore();         

  const first = menus[0];
  const storeName = first?.storeName || "";          

  const orderAmount = menus.reduce((sum, m) => sum + m.price, 0); 
  const deliveryFee = orderAmount > 0 ? 2000 : 0;      
  const totalPrice = orderAmount + deliveryFee;        
  const minOrderAmount = first?.minOrderAmount ?? 0;  
  const isUnderMin = orderAmount > 0 && orderAmount < minOrderAmount; 

  const groupedMenus = menus.reduce<
    { name: string; price: number; ingredients: string; quantity: number }[]
  >((acc, m) => {
    const found = acc.find((item) => item.name === m.name);
    if (found) {
      found.quantity += 1;
    } else {
      acc.push({
        name: m.name,
        price: m.price,
        ingredients: m.ingredients,
        quantity: 1,
      });
    }
    return acc;
  }, []);

  const handleCancel = () => {                        
    clearCart();
    navigate("/store");
  };

  const handleMore = () => {                         
    if (first?.storeId) {
      navigate(`/stores/${first.storeId}`);
    } else {
      navigate("/stores");
    }
  };

  return (
    <Page>
      <TopBar
        showBottomBorder
        rightText="주문취소"
        onRightClick={handleCancel}                  
      />

      <Content>
        <StoreSection>
          <Row between>
            <StoreTitle>{storeName}</StoreTitle>
            {isUnderMin && <Alert>최소금액 미달 ⓘ</Alert>} 
          </Row>

          {groupedMenus.map((item, index) => (          
            <Row style={{ marginTop: 12 }} key={index}>
              <Thumb />
              <MenuBox>
                <MenuName>{item.name}</MenuName>
                <Row between style={{ marginTop: "auto" }}>
                  <MenuDesc>{item.ingredients}</MenuDesc>
                  <span>{item.quantity}개 &gt;</span>  
                </Row>
                <Row between style={{ marginTop: "auto" }}>
                  <MenuPrice>
                    {(item.price * item.quantity).toLocaleString()}원
                  </MenuPrice>
                </Row>
              </MenuBox>
            </Row>
          ))}
        </StoreSection>

        <MoreBtn onClick={handleMore}>더 담기 +</MoreBtn> 

        <SummarySection>
          <SummaryRow>
            <SummaryLabel>주문금액</SummaryLabel>
            <SummaryValue>{orderAmount.toLocaleString()}원</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>배달요금</SummaryLabel>
            <SummaryValue>{deliveryFee.toLocaleString()}원</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>총 결제금액</SummaryLabel>
            <SummaryValue>{totalPrice.toLocaleString()}원</SummaryValue>
          </SummaryRow>
        </SummarySection>
      </Content>

      <CartBottomBar
        totalPrice={totalPrice}
        minOrderAmount={minOrderAmount}
      />
    </Page>
  );
};

export default Cart;

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

const Content = styled.div`
  flex: 1;
  background: #ffffff;
`;

const StoreSection = styled.div`
  background: #ffffff;
  padding: 16px 20px;
  margin-top: 8px;
`;

const Row = styled.div<{ between?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${(p) => (p.between ? "space-between" : "flex-start")};
`;

const StoreTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
`;

const Alert = styled.div`
  font-size: 12px;
  color: #f04452;
`;

const Thumb = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  background: #e9ecef;
  margin-right: 12px;
`;

const MenuBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MenuName = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const MenuDesc = styled.div`
  font-size: 12px;
  color: #868e96;
  margin: 4px 0 8px;
  line-height: 1.4;
`;

const MenuPrice = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const MoreBtn = styled.button`
  width: 100%;
  border: none;
  border-bottom: 10px solid #e9ecef;
  border-top: 1px solid #e9ecef;
  padding: 12px 0;
  background: #ffffff;
  color: #3182f6;
  font-weight: 600;
  cursor: pointer;
`;

const SummarySection = styled.div`
  background: #ffffffff;
  margin-top: 15px;
  padding: 16px 20px 24px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  & + & {
    margin-top: 8px;
  }
`;

const SummaryLabel = styled.span`
  color: #8b95a1;
`;

const SummaryValue = styled.span`
  color: #343a40;
`;
