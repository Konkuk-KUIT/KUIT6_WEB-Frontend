import styled from "styled-components";
import useCartStore from "../pages/Store/useCartStore";
import Arrow from "../../public/grayarrow.svg";

const OrderItem = () => {
    const items = useCartStore((state) => state.items);
    const grouped = items.reduce(
        (acc, item) => {
            const id = item.menu.id;
            const existing = acc[id];

            if (existing) 
                existing.count += 1;
            else
                acc[id] = {item, count: 1};

            return acc;
        },
        {} as Record<number, {item:(typeof items)[number]; count: number}>
    );

    const groups = Object.values(grouped);
    if (groups.length === 0) {
        return null;
    }
    
    return (
        <>
            {groups.map(({item, count}) => (
            <StyledItemInfo key={item.menu.id}>
                <StyledItemImage/>
                <StyledItemDesc>
                    <StyledItemName>{item.menu.name}</StyledItemName>
                    <StyledItemIngredients>{item.menu.ingredients}</StyledItemIngredients>
                    <StyledItemPrice>{(item.menu.price*count).toLocaleString()}원</StyledItemPrice>
                </StyledItemDesc>
                <StyledItemNum>
                    <span>{count}개</span>
                    <img src={Arrow} alt="arrow"/>
                </StyledItemNum>
            </StyledItemInfo>
            ))}
        </>
    )
}

const StyledItemInfo = styled.div`
  width: 100%;
  height: 110px;
  padding-left: 24px;
  display: flex;
  gap: 16px;
  box-sizing: border-box;
`;

const StyledItemImage = styled.div`
  margin-top: 19px;
  width: 54px;
  height: 57px;
  border-radius: 8px;
  background: #ECECEC;
  box-sizing: border-box;
`;

const StyledItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
`;

const StyledItemName = styled.div`
  color: #333D4B;
  font-size: 17px;
  font-weight: 700;
`;

const StyledItemIngredients = styled.div`
  width: 210px;
  color: #6B7684;
  font-size: 13px;
  font-weight: 500;
`;

const StyledItemPrice = styled.div`
  color: #6B7684;
  font-size: 13px;
  font-weight: 500;
`;

const StyledItemNum = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
  height: 100%;
  align-items: center;
  color: #6B7684;
  font-size: 15px;
  font-weight: 500;
`;

export default OrderItem;