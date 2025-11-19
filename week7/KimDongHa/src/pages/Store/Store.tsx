import styled from "styled-components";
import backarrow from "../../assets/stores/backarrow.svg";
import OrderBar from "../../components/OrderBar/OrderBar";
import MenuItem from "../../components/MenuItem/MenuItem";
import stores from "../../models/stores";
import { useNavigate, useParams } from "react-router-dom";

const Store = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const store = stores.find((s) => s.id === Number(id));

  if (!store) return <div>가게를 찾을 수 없습니다.</div>;

  const storeInfo = {
    id: store.id,
    name: store.name,
    minOrderPrice: store.minDeliveryPrice,
    deliveryFee: store.deliveryFee,
  };

  return (
    <>
      <Container>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            <BackIcon src={backarrow} alt="뒤로가기" />
          </BackButton>
          <StoreName>{store.name}</StoreName>
          <StoreInfo>
            ★ {store.rate.toFixed(1)} 리뷰 {store.reviewCnt.toLocaleString()}
          </StoreInfo>
          <StoreSubInfo>
            최소주문 {store.minDeliveryPrice.toLocaleString()}원 <br />
            배달비 {store.deliveryFee.toLocaleString()}원
            <br />
            배달시간 약 {store.minDeliveryTime}~{store.maxDeliveryTime}분
          </StoreSubInfo>
        </Header>

        <SectionTitle>샐러드</SectionTitle>

        <MenuList>
          {store.menus.map((menu) => (
            <MenuItem
              key={menu.id}
              menu={menu}
              store={storeInfo}
            />
          ))}
        </MenuList>
      </Container>

      <OrderBar />
    </>
  );
};

export default Store;

// style
const Container = styled.div`
  width: 390px;
  height: 844px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding-bottom: 111px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 16px;
  margin: 47px 0 0;

  border-bottom: 1px solid #e5e8eb;
`;

const BackButton = styled.button`
  height: 41px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

const BackIcon = styled.img`
  width: 9.95px;
  height: 17.475px;
  flex-shrink: 0;
  padding: 7px 356px 10px 10px;
`;

const StoreName = styled.h1`
  color: #191f28;
  font-family: Pretendard;
  font-size: 26px;
  font-weight: 700;
  padding: 26px 0 8px 24px;
  margin: 0;
`;

const StoreInfo = styled.span`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  padding: 9px 0 0 24px;
  margin-bottom: 4px;
`;

const StoreSubInfo = styled.span`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  padding: 9px 0 0 24px;
  margin-top: 2px;
`;

const SectionTitle = styled.h2`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  margin: 20px 24px 8px;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
`;
