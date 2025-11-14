import styled from "styled-components";
import stores from "../../models/stores";

type Store = (typeof stores)[number];

interface StoreListItemProps {
  store: Store;
  index: number;
}

const StoreListItem = ({ store, index }: StoreListItemProps) => {
  return (
    <StoreRow>
      <Thumb />

      <Info>
        <Rank>{index + 1}위</Rank>
        <Name>{store.name}</Name>
        <Meta>
          ★ {store.rate} ({store.reviewCnt})
        </Meta>
        <Sub>
          {store.minDeliveryTime}분~{store.maxDeliveryTime}분 · 배달비{" "}
          {store.deliveryFee.toLocaleString()}원
        </Sub>
      </Info>
    </StoreRow>
  );
};

export default StoreListItem;

const StoreRow = styled.div`
  display: flex;
  gap: 12px;
`;

const Thumb = styled.div`
  width: 52px;
  height: 52px;
  background-color: #e2e0e0ff;
  border-radius: 8px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rank = styled.div`
  font-size: 14px;
  margin-bottom: 2px;
  color: #222;
  font-weight: 500;
`;

const Name = styled.div`
  font-size: 15px;
  font-weight: 600;
`;

const Meta = styled.div`
  font-size: 13px;
  color: #666;
  margin-top: 4px;
`;

const Sub = styled.div`
  font-size: 12px;
  color: #999;
  margin-top: 2px;
`;
