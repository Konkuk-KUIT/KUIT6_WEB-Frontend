import styled from "styled-components";

interface CartItemProps {
  name: string;
  ingredients: string;
  price: number;
  quantity: number;
  onQuantityChange?: (newQuantity: number) => void;
}

const CartItem = ({ name, ingredients, price, quantity }: CartItemProps) => {
  return (
    <ItemContainer>
      <Thumbnail />
      <InfoSection>
        <MenuName>{name}</MenuName>
        <Ingredients>{ingredients}</Ingredients>
        <Price>{price.toLocaleString()}원</Price>
      </InfoSection>
      <Quantity>{quantity}개</Quantity>
    </ItemContainer>
  );
};

export default CartItem;

// style
const ItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 24px;
  border-bottom: 1px solid #f2f3f6;
`;

const Thumbnail = styled.div`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: #f2f3f6;
`;

const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const MenuName = styled.h3`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

const Ingredients = styled.span`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 200px;
`;

const Price = styled.span`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Quantity = styled.span`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
