import styled from "styled-components";
import star from "../../assets/store/star.svg";

interface Store {
  id: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  deliveryFee: number;
}

interface StoreListProps {
  stores: Store[];
}

const StoreList = ({ stores }: StoreListProps) => {
  return (
    <Container>
      {stores.map((store, index) => (
        <StoreItem key={store.id}>
          <StoreThumbnail />
          <StoreContent>
            <Rank>{index + 1}위</Rank>
            <StoreName>{store.name}</StoreName>
            <Rating>
              <StarIcon src={star} alt="star" /> {store.rate} ({store.reviewCnt.toLocaleString()})
            </Rating>
            <DeliveryInfo>
              {store.minDeliveryTime}분~{store.maxDeliveryTime}분 · 배달비{" "}
              {store.deliveryFee.toLocaleString()}원
            </DeliveryInfo>
          </StoreContent>
        </StoreItem>
      ))}
    </Container>
  );
};

export default StoreList;

const Container = styled.div`
  padding: 0 32px;
`;

const StoreItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px 0;
`;

const StoreThumbnail = styled.div`
  width: 54px;
  height: 54px;
  top: 16px;
  left: 32px;
  angle: 0 deg;
  opacity: 1;
  border-radius: 8px;
  background: #ECECEC;
`;

const StoreContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Rank = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-style: SemiBold;
  font-size: 17px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  color: #333D4B;
`;

const StoreName = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-style: SemiBold;
  font-size: 17px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  color: #333D4B;
`;

const Rating = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-style: Medium;
  font-size: 13px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  color: #6B7684;
`;

const StarIcon = styled.img`
  width: 13.160506248474121;
  height: 13.160506248474121;
  top: 64.41px;
  left: 92.84px;
  angle: 0 deg;
  opacity: 1;
  border-radius: 0.5px;
`;

const DeliveryInfo = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-style: Medium;
  font-size: 13px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  color: #6B7684;
`;