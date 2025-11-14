import stores from "../../models/stores"; 
import styled from "styled-components";
import starIcon from "../../assets/star.svg";
import arrowIcon from "../../assets/arrow.svg";
import OrderBar from "../../components/OrderBar/OrderBar";
import { useNavigate, useSearchParams } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 16px;
  display: flex;
`;

const PageTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: #191F28;
  margin: 0;
`;

const StyledStoreList = styled.div`
  padding: 20px;
`;

const StoreListWrapper = styled.div`
  padding: 0 16px;
`;
const StoreItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 18px 0; 
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
`;

const StoreThumbnail = styled.div`
  width: 70px;
  height: 70px;
  background-color: #f0f0f0; 
  border-radius: 8px;
  margin-right: 12px;
  flex-shrink: 0;
`;

const StoreInfo = styled.div`
  flex-grow: 1;
`;

const RankTag = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #333d4b;
  margin-bottom: 4px;
`;

const StoreName = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #191F28;
  margin: 0 0 6px 0;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const RatingText = styled.span`
  font-size: 14px;
  color: #333d4b;
  font-weight: 500;
  margin-right: 6px;
`;

const ReviewCount = styled.span`
  font-size: 14px;
  color: #666;
`;

const DeliveryText = styled.div`
  font-size: 13px;
  color: #666;
`;
  
    
  const Stores = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');

  const pageTitleText = selectedCategory && selectedCategory !== '더보기' 
  ? selectedCategory 
    : '전체 매장';

  const handleBack = () => {
      navigate(-1);
};
  
  const filteredStores = stores.filter(store => {
    if (!selectedCategory || selectedCategory === '더보기') return true;
    const categoryLower = selectedCategory.toLowerCase();
    return store.menus.some(menu => 
      menu.name.toLowerCase().includes(categoryLower)
    );
  });

return (
    <StyledStoreList>
      <BackButton onClick={handleBack}>
        <img src={arrowIcon} alt="뒤로가기" style={{width: '24px', height: '24px'}} />
      </BackButton>
      <HeaderContainer>
        <PageTitle>{pageTitleText}</PageTitle>
      </HeaderContainer>

      <StoreListWrapper>
        {filteredStores.map((store, index) => (
          <StoreItem key={store.id} onClick={() => navigate(`/store/${store.id}`)}>
            <StoreThumbnail />
            <StoreInfo>
              <RankTag>{index + 1}위</RankTag>
              <StoreName>{store.name}</StoreName>
              <RatingWrapper>
                <img src={starIcon} alt="별점" style={{width: '14px', height: '14px', marginRight: '4px'}} />
                <RatingText>{store.rate.toFixed(1)}</RatingText>
                <ReviewCount>({store.reviewCnt.toLocaleString()})</ReviewCount>
              </RatingWrapper>
              <DeliveryText>
                {store.minDeliveryTime}~{store.maxDeliveryTime}분 · 배달비 {store.deliveryFee.toLocaleString()}원
              </DeliveryText>
            </StoreInfo>
          </StoreItem>
        ))}
      </StoreListWrapper>
      <OrderBar />
    </StyledStoreList>
  );
};

export default Stores;