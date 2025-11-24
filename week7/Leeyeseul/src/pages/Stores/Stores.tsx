import styled from "styled-components";
import TopBar from "../../components/TopBar/TopBar";
import OrderBar from "../../components/Orderbar/OrderBar";
import stores from "../../models/stores";
import StoreListItem from "../../pages/Stores/StoreListItem";

const Stores = () => {
  return (
    <>
      <TopBar showBottomBorder />

      <Page>
        <Title>샐러드</Title>

        <List>
          {stores.map((store, i) => (
            <StoreListItem key={store.id} store={store} index={i} />
          ))}
        </List>
      </Page>

      <OrderBar totalPrice={12100} />
    </>
  );
};

export default Stores;

const Page = styled.div`
  min-height: 100vh;
  padding: 16px 16px 120px; 
  background: #ffffff;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 16px;
  padding-left: 0; 
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
