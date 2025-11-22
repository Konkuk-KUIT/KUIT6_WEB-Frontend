import styled from "styled-components";
import TopBar from "../../components/TopBar/TopBar";
import OrderBar from "../../components/Orderbar/OrderBar";
import stores from "../../models/stores";
import StoreItem from "../../pages/Store/StoreItem";
import { useParams } from "react-router-dom"; 
import useCartStore from "./useCartStore"; 


const Cart = () => {
  const { id } = useParams();                                             
  const storeId = Number(id);                                             
  const store = stores.find((s) => s.id === storeId) || stores[0];          

  const { menus } = useCartStore();                                       
  const totalPrice = menus.reduce((sum, m) => sum + m.price, 0);            

  return (
    <>
    <TopBar showBottomBorder />
      <Page>
        <Header>
          <StoreName>{store.name}</StoreName>

          <RatingRow>
            <Star>★</Star>
            <RatingText>
              {store.rate} 리뷰 {store.reviewCnt.toLocaleString()}
            </RatingText>
          </RatingRow>

          <Meta>결제방법  토스결제만 현장결제 안됨</Meta>
          <Meta>최소주문 {store.minDeliveryPrice.toLocaleString()}원</Meta>
          <Meta>
            배달시간 약 {store.minDeliveryTime}~{store.maxDeliveryTime}분
          </Meta>
        </Header>

        <SectionTitle>샐러드</SectionTitle>

        <List>
          {store.menus.map((menu: any) => (
            <StoreItem
              key={menu.id}
              menu={menu}
              storeId={store.id}                     
              storeName={store.name}                  
              deliveryFee={store.deliveryFee}         
              minOrderAmount={store.minDeliveryPrice} 
            />
          ))}
        </List>
      </Page>

      <OrderBar totalPrice={totalPrice} />
    </>
  );
};

export default Cart;

const Page = styled.div`
  background: #ffffff;
  min-height: 100vh;
  padding: 16px 16px 120px; 
  box-sizing: border-box;
  overflow-y: auto;
`;

const Header = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 16px 14px;
  margin-bottom: 16px;
`;

const StoreName = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px;
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

const Star = styled.span`
  color: #fab005;
  margin-right: 4px;
  font-size: 14px;
`;

const RatingText = styled.span`
  font-size: 13px;
  color: #343a40;
`;

const Meta = styled.p`
  font-size: 12px;
  color: #868e96;
  margin: 2px 0;
`;

const SectionTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 10px;
  margin-left: 8px;
`;

const List = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 8px 12px;
`;
