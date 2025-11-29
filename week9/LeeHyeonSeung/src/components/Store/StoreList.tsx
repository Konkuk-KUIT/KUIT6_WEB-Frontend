import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import star from "../../assets/store/star.svg";
import Button from "../Button"; // Button 컴포넌트 import

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
  onEdit?: (id: number, currentName: string) => void;
  onDelete?: (id: number, name: string) => void;
}

const StoreList = ({ stores, onEdit, onDelete }: StoreListProps) => {
  const navigate = useNavigate();

  const handleStoreClick = (storeId: number) => {
    navigate(`/store/${storeId}`);
  };

  const handleEdit = (e: React.MouseEvent, id: number, name: string) => {
    e.stopPropagation();
    if (onEdit) onEdit(id, name);
  };

  const handleDelete = (e: React.MouseEvent, id: number, name: string) => {
    e.stopPropagation();
    if (onDelete) onDelete(id, name);
  };

  return (
    <Container>
      {stores.map((store, index) => (
        <StoreItem key={store.id} onClick={() => handleStoreClick(store.id)}>
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
          
          {/* 수정/삭제 버튼 */}
          <ButtonGroup>
            <Button size="sm" onClick={(e) => handleEdit(e, store.id, store.name)}>
              수정
            </Button>
            <Button size="sm" onClick={(e) => handleDelete(e, store.id, store.name)}>
              삭제
            </Button>
          </ButtonGroup>
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
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #F8F9FA;
  }
`;

const StoreThumbnail = styled.div`
  width: 54px;
  height: 54px;
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
  font-size: 17px;
  line-height: 100%;
  color: #333D4B;
`;

const StoreName = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 17px;
  line-height: 100%;
  color: #333D4B;
`;

const Rating = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;
  color: #6B7684;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StarIcon = styled.img`
  width: 13px;
  height: 13px;
`;

const DeliveryInfo = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;
  color: #6B7684;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
`;