import styled from "styled-components";
import Button from "../Button";
import useCartStore from "../../pages/Store/useCartStore";
import { useNavigate } from "react-router-dom";

interface Menu {
  id: number,
  name: string,
  isBest: boolean,
  price: number,
  ingredients: string,
}

interface StoreInfo {
  storeId: number;
  storeName: string;
  storeMinDeliveryPrice: number;
  storeDeliveryFee: number;
}

interface Props {
  menus: Menu[];
  storeInfo: StoreInfo;
}

const MenuItem = ({ menus, storeInfo } : Props) => {
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const navigate = useNavigate();

  return (
    <StyledMenuList>
      {menus.map(({id, name, isBest, price, ingredients}) => (
        <StyledMenu key={id}>
          <StyledMenuImage/>
          <StyledMenuDesc>
            <StyledMenuName>
              <span>{name}</span>
              {isBest && (
                <StyledMenuIsBest>BEST</StyledMenuIsBest>
              )}
            </StyledMenuName>
            <StyledMenuPrice>{price.toLocaleString()}원</StyledMenuPrice>
            <StyledMenuIngredients>{ingredients}</StyledMenuIngredients>
          </StyledMenuDesc>
          <div onClick={() => {
            if (items.length === 0 || (items.length > 0 && items[0].store.storeId === storeInfo.storeId)) {
              addItem({
                menu: {id, name, price, ingredients},
                store: storeInfo,
              })
              navigate("/cart");
            } else {
              alert("장바구니에는 동일 가게의 메뉴만 추가할 수 있습니다.")
            }
            }}>
            <Button type="button" size="sm">
              담기
            </Button>
          </div>
        </StyledMenu>
      ))}
    </StyledMenuList>
  );
};

const StyledMenuList = styled.div`
  width: 390px;
`;

const StyledMenu = styled.div`
  width: 390px;
  height: 110px;
  display: flex;
  gap: 16px;
  align-items: center;
  padding-left: 24px;
  box-sizing: border-box;
`;

const StyledMenuImage = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 100%;
  background: #ECECEC;
`;

const StyledMenuDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledMenuName = styled.div`
  display: flex;
  gap: 6px;
  color: #333D4B;
  font-size: 17px;
  font-weight: 600;
`;

const StyledMenuIsBest = styled.span`
  color: #3182F6;
`;

const StyledMenuPrice = styled.span`
  color: #6B7684;
  font-size: 13px;
  font-weight: 500;
`;

const StyledMenuIngredients = styled.div`
  width: 204px;
  padding-right: 3px;
  box-sizing: border-box;
  color: #6B7684;
  font-size: 13px;
  font-weight: 500;
`;

export default MenuItem;
