import styled from "styled-components";
import Button from "../Button";

interface Menu {
  name: string;
  price: number | string;
  ingredients: string;
  isBest?: boolean;
}

interface MenuItemProps {
  menu: Menu;
}

const MenuItem = ({ menu }: MenuItemProps) => {
  const handleAddMenu = () => {
    console.log(`${menu.name} 담기`);
  };

  return (
    <ItemContainer>
      <Thumbnail />
      <InfoSection>
        <NameRow>
          <MenuName>{menu.name}</MenuName>
          {menu.isBest && <BestTag>BEST</BestTag>}
        </NameRow>
        <Price>{menu.price.toLocaleString()}원</Price>
        <Ingredients>{menu.ingredients}</Ingredients>
      </InfoSection>

      <AddButton onClick={handleAddMenu} type="button" size="sm">
        담기
      </AddButton>
    </ItemContainer>
  );
};

export default MenuItem;

// style
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 24px;
`;

const Thumbnail = styled.div`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 27px;
  background-color: #f2f3f6;
`;

const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const MenuName = styled.span`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
`;

const BestTag = styled.span`
  color: #3182f6;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
`;

const Price = styled.span`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
`;

const Ingredients = styled.span`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
  width: 200px;
`;

const AddButton = styled(Button)`
  height: 32px;
  font-size: 14px;
  padding: 0 10px;
  border-radius: 6px;
  background: #3182f6;
  color: #fff;
  font-weight: 500;
`;
