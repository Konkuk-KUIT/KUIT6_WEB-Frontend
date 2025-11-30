import styled from "styled-components";
import StoreItem from "../../components/StoreItem"
import stores from "../../models/stores"
import OrderBar from "../../components/OrderBar/OrderBar";
import BackBar from "../../components/BackBar";

const Stores = () => {
  return (
    <StyledStores>
      <BackBar orderCancel={false}/>
      <StyledFoodTypeBar>
        <span>샐러드</span>
      </StyledFoodTypeBar>
      <StoreItem items={stores}/>
      <OrderBar/>
    </StyledStores>
  );
};

const StyledStores = styled.div`
  width: 390px;
  margin-top: 41px;
  margin-bottom: 77px;
`;

const StyledFoodTypeBar = styled.div`
    width: 390px;
    padding: 26px 298px 2px 24px;
    color: #191F28;
    font-size: 26px;
    font-weight: 700;
    position: fixed;
    top: 41px;
    background: #fff;
`;

export default Stores;
