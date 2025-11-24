import styled from "styled-components";
import React from "react";

interface StoreItemProps {
  rank?: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  deliveryFee: number;
  onClick?: () => void;
}

const StoreItem: React.FC<StoreItemProps> = ({
  rank,
  name,
  rate,
  reviewCnt,
  minDeliveryTime,
  maxDeliveryTime,
  deliveryFee,
  onClick,
}) => {
  return (
    <ItemContainer onClick={onClick}>
      <Thumbnail />
      <InfoSection>
        {rank && <RankText>{rank}위</RankText>}
        <StoreName>{name}</StoreName>
        <SubInfo>
          ★ {rate.toFixed(1)} ({reviewCnt.toLocaleString()})
        </SubInfo>
        <DeliveryTime>
          {minDeliveryTime}분~{maxDeliveryTime}분 · 배달비{" "}
          {deliveryFee.toLocaleString()}원
        </DeliveryTime>
      </InfoSection>
    </ItemContainer>
  );
};

export default StoreItem;

// style
const ItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 24px 16px 0;
  cursor: pointer;
`;

const Thumbnail = styled.div`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #ececec;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;
`;

const RankText = styled.span`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
`;

const StoreName = styled.h3`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 17px;
  margin: 0;
`;

const SubInfo = styled.span`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
`;

const DeliveryTime = styled.span`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
`;
