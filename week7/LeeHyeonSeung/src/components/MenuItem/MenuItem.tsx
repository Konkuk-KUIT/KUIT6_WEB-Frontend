import styled from "styled-components";
import Button from "../Button";
import { useCartStore } from "../../pages/Store/useCartStore";

interface Menu {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  isBest: boolean;
}

interface Store {
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

interface MenuItemProps {
  menu: Menu;
  store: Store;
}

const MenuItem = ({ menu, store }: MenuItemProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddMenu = () => {
    addItem(menu, store); // 순서 수정: menu가 먼저, store가 두 번째
  };

  return (
    <Container>
      <Thumbnail />
      <MenuInfo>
        <NameWrapper>
          <MenuName>{menu.name}</MenuName>
          {menu.isBest && <BestBadge>BEST</BestBadge>}
        </NameWrapper>
        <MenuPrice>{menu.price.toLocaleString()}원</MenuPrice>
        <MenuIngredients>{menu.ingredients}</MenuIngredients>
      </MenuInfo>
      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </Container>
  );
};

export default MenuItem;

const Container = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px 0;
  align-items: center;
`;

const Thumbnail = styled.div`
  width: 54px;
  height: 54px;
  background-color: #ececec;
  border-radius: 27px;
`;

const MenuInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const MenuName = styled.h3`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 17px;
  line-height: 100%;
  color: #333d4b;
  margin: 0;
`;

const BestBadge = styled.span`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 17px;
  color: #3182f6;
`;

const MenuPrice = styled.span`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;
  color: #6B7684;
`;

const MenuIngredients = styled.p`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 13px;
  line-height: 140%;
  color: #6b7684;
  margin: 0;
`;