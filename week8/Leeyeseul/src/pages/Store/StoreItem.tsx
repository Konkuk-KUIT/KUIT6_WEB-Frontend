import styled from "styled-components";
import stores from "../../models/stores";
import Button from "../../components/Button"
import useCartStore from "./useCartStore";
type Menu = (typeof stores)[number]["menus"][number];

interface CartItemProps {
  menu: Menu;
  storeId: number;        
  storeName: string;     
  deliveryFee: number;    
  minOrderAmount: number; 
}

const CartItem = ({ menu, storeId, storeName, deliveryFee, minOrderAmount }: CartItemProps) => {
  const { menus, addMenu, clearCart } = useCartStore();                                         

  const handleAdd = () => {                                                                    
    const hasItems = menus.length > 0;                                                         
    const currentStoreId = hasItems ? menus[0].storeId : undefined;                              

    if (hasItems && currentStoreId !== storeId) {                                                
      const ok = window.confirm(                                                                 
        "다른 가게의 메뉴가 담겨 있습니다. 장바구니를 비우고 이 가게 메뉴를 담을까요?"
      );                                                                                         
      if (!ok) return;                                                                           
      clearCart();                                                                               
    }                                                                                            

    addMenu({                                                                                  
      name: menu.name,                                                                         
      price: menu.price,                                                                      
      ingredients: menu.ingredients,                                                            
      storeId,                                                                                  
      storeName,                                                                              
      deliveryFee,                                                                            
      minOrderAmount,                                                                            
    });                                                                                          
  };                                                                                             

  return (
    <Row>
      <Thumb />

      <Info>
        <Name>{menu.name}</Name>
        <Price>{menu.price.toLocaleString()}원</Price>
        <Ingredients>{menu.ingredients}</Ingredients>
      </Info>

      <ButtonBox>
        <Button size="sm" onClick={handleAdd}>담기</Button> 
      </ButtonBox>
    </Row>
  );
};

export default CartItem;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f1f3f5;
`;

const Thumb = styled.div`
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #e9ecef;
  margin-right: 12px;
`;

const Info = styled.div`
  flex: 1;                 
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 2px;
`;

const Price = styled.div`
  font-size: 13px;
  color: #495057;
  margin-bottom: 2px;
`;

const Ingredients = styled.div`
  font-size: 12px;
  color: #868e96;
`;

const ButtonBox = styled.div`
  flex-shrink: 0;
  margin-left: 12px;       
`;
