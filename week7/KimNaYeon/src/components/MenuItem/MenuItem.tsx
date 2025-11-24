import styled from "styled-components";
import Button from "../Button";

type Props = {
  menus: {
    id: number,
    name: string,
    isBest: boolean,
    price: number,
    ingredients: string,
  }[];
}

const MenuItem = ({ menus } : Props) => {
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
          <Button type="button" size="sm">
            담기
          </Button>
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
