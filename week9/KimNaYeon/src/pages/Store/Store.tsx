import styled from "styled-components";
import stores from "../../models/stores"
import OrderBar from "../../components/OrderBar/OrderBar";
import BackBar from "../../components/BackBar";
import MenuItem from "../../components/MenuItem/MenuItem";
import Star from "../../../public/yellowstar.svg"
import { useParams } from "react-router-dom";

const Store = () => {
  const {storeId} = useParams<{storeId:string}>();
  const id = Number(storeId);
  const store = stores.find((s) => s.id === id);
  if (!store || !store.menus) return <div>메뉴를 불러올 수 없습니다.</div>;

  return (
    <StyledStore>
      <BackBar orderCancel={false}/>
      <StyledStoreDesc>
        <StyledStoreName>{store.name}</StyledStoreName>
        <StyledStoreReview>
          <img src={Star} alt="reviewstar"/>
          <span>{store.rate}</span>
          <StyledStoreReviewNum>
            <span>리뷰{store.reviewCnt.toLocaleString()}</span>
          </StyledStoreReviewNum>
        </StyledStoreReview>
        <StyledStoreDetailed>
          <StyledStoreDetailedInfo>
            <span>결제방법</span>
            <span>토스결제만 현장결제 안됨</span>
          </StyledStoreDetailedInfo>
          <StyledStoreDetailedInfo>
            <span>최소주문</span>
            <span>{store.minDeliveryPrice.toLocaleString()}원</span>
          </StyledStoreDetailedInfo>
          <StyledStoreDetailedInfo>
            <span>배달시간</span>
            <span>약 {store.minDeliveryTime}분-{store.maxDeliveryTime}분</span>
          </StyledStoreDetailedInfo>
        </StyledStoreDetailed>
      </StyledStoreDesc>
      <StyledBorderline/>
      <StyledFoodType>샐러드</StyledFoodType>
      <MenuItem menus={store.menus}/>
      <OrderBar/>
    </StyledStore>
  );
};

const StyledStore = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  margin-top: 41px;
  margin-bottom: 77px;
`;

const StyledStoreDesc = styled.div`
  width: 390px;
  padding: 26px 0 5px 24px;
  margin-bottom: 2px;
  box-sizing: border-box;
`;

const StyledStoreName = styled.div`
  color: #191F28;
  font-size: 26px;
  font-weight: 700;
  width: 100%;
  padding-bottom: 2px;
  box-sizing: border-box;
`;

const StyledStoreReview = styled.div`
  display: flex;
  gap: 5px;
  color: #4E5968;
  font-size: 17px;
  font-weight: 600;
  padding: 7px 0 12px 0;
  box-sizing: border-box;
  align-items: center;
`;

const StyledStoreReviewNum = styled.div`
  padding: 4px;
  box-sizing: border-box;
  color: #4E5968;
  font-size: 16px;
  font-weight: 500;
`;

const StyledStoreDetailed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 9px 0 9px 0;
`;

const StyledStoreDetailedInfo = styled.div`
  display: flex;
  gap: 12px;
  color: #4E5968;
  font-size: 15px;
  font-weight: 500;
`;

const StyledBorderline = styled.div`
  width: 100%;
  height: 1px;
  background: #E5E8EB;
`;

const StyledFoodType = styled.div`
  width: 100%;
  height: 57px;
  padding: 26px 0 11px 24px;
  color: #6B7684;
  font-size: 17px;
  font-weight: 600;
  box-sizing: border-box;
`;

export default Store;
