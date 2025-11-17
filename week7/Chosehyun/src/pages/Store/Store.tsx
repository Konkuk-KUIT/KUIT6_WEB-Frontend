import stores from "../../models/stores"; 
import styled from "styled-components";
import starIcon from "../../assets/star.svg"; 
import arrowIcon from "../../assets/arrow.svg"; 
import OrderBar from "../../components/OrderBar/OrderBar";
import { useNavigate, useParams } from "react-router-dom";

interface Menu {
  id: number;
  name: string;
  isBest: boolean;
  price: number;
  ingredients: string;
}

interface StoreData {
  id: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  minDeliveryPrice: number;
  deliveryFee: number;
  menus: Menu[];
}

const StoreContainer = styled.div`
  padding-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 16px;
`;

const StoreTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #191F28;
  margin: 0;
`;

const DetailSection = styled.div`
  padding: 0 16px 20px;
  border-bottom: 8px solid #f7f7f7; 
`;

const RatingInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 16px;
  font-weight: 500;
  color: #191F28;
`;

const Star = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
  filter: invert(79%) sepia(85%) saturate(713%) hue-rotate(357deg) brightness(101%) contrast(97%);
`;

const ReviewCount = styled.span`
  color: #666;
  font-weight: 400;
  margin-left: 4px;
`;

const DetailRow = styled.div`
  display: flex;
  font-size: 14px;
  margin-bottom: 6px;
  
  & > span:first-child {
    color: #666;
    width: 80px;
    flex-shrink: 0;
  }
  & > span:last-child {
    color: #191F28;
    font-weight: 500;
  }
`;

const MenuSection = styled.div`
  padding: 0 16px;
`;

const MenuCategoryTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #191F28;
  padding: 20px 0 10px;
  margin: 0;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
`;

const MenuLeft = styled.div`
  display: flex;
  flex-grow: 1;
`;

const MenuText = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const MenuThumbnail = styled.div`
  width: 70px;
  height: 70px;
  background-color: #f0f0f0;
  border-radius: 50%;
  margin-right: 12px;
  flex-shrink: 0;
`;

const MenuName = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #191F28;
  margin: 0;
`;

const MenuPrice = styled.div`
  font-size: 14px;
  color: #191F28;
  margin: 4px 0;
`;

const MenuIngredients = styled.p`
  font-size: 13px;
  color: #666;
  margin: 0;
`;

const BestTag = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #007bff; 
  margin-left: 6px;
`;

const AddButton = styled.button`
  background-color: #4A90E2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 15px;
  font-size: 14px;
  cursor: pointer;
  flex-shrink: 0;
`;


const Store = () => {
  const navigate = useNavigate();
  const { storeId } = useParams<{ storeId: string }>();

  const store = stores.find(s => s.id === Number(storeId)) as StoreData | undefined;

  const handleBack = () => {
    navigate(-1);
  };

  if (!store) {
    return <div>매장 정보를 찾을 수 없습니다. (ID: {storeId})</div>;
  }

  const menuCategory = store.menus.length > 0 ? "샐러드" : "메뉴 없음";

  return (
    <StoreContainer>
      <Header>
        <BackButton onClick={handleBack}>
          <img src={arrowIcon} alt="뒤로가기" style={{ width: '24px', height: '24px' }} />
        </BackButton>
      </Header>

      <DetailSection>
        <StoreTitle>{store.name}</StoreTitle>
        <RatingInfo>
          <Star src={starIcon} alt="별점" />
          {store.rate.toFixed(1)}
          <ReviewCount>리뷰{store.reviewCnt.toLocaleString()}</ReviewCount>
        </RatingInfo>
        
        <DetailRow>
          <span>결제방법</span>
          <span>토스결제만 현장결제 안됨</span>
        </DetailRow>
        <DetailRow>
          <span>최소주문</span>
          <span>{store.minDeliveryPrice.toLocaleString()}원</span>
        </DetailRow>
        <DetailRow>
          <span>배달시간</span>
          <span>약 {store.minDeliveryTime}-{store.maxDeliveryTime}분</span>
        </DetailRow>
      </DetailSection>
      <MenuSection>
        <MenuCategoryTitle>{menuCategory}</MenuCategoryTitle>
        
        {store.menus.map((menu) => (
          <MenuItem key={menu.id}>
            <MenuLeft>
              <MenuThumbnail />
              <MenuText>
                <MenuName>
                  {menu.name}
                  {menu.isBest && <BestTag>BEST</BestTag>}
                </MenuName>
                <MenuPrice>{menu.price.toLocaleString()}원</MenuPrice>
                <MenuIngredients>{menu.ingredients}</MenuIngredients>
              </MenuText>
            </MenuLeft>
            
            <AddButton>담기</AddButton>
          </MenuItem>
        ))}
      </MenuSection>
      <OrderBar />
    </StoreContainer>
  );
};

export default Store;