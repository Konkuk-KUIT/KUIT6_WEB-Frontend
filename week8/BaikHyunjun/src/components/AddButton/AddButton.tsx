import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import useCartStore, { type CartMenuItem, type CartStore } from '../../store/cartStore';
import './AddButton.css';

interface Menu {
  id: number;
  name: string;
  price: number | string;
  ingredients: string;
  isBest?: boolean;
}

interface Store {
  id: number;
  name: string;
  deliveryFee: number;
  minDeliveryPrice: number;
}

interface AddButtonProps {
  menu: Menu;
  store: Store;
}

const AddButton = ({ menu, store }: AddButtonProps) => {
  const navigate = useNavigate();
  const addMenu = useCartStore((state) => state.addMenu);

  const handleAdd = () => {
    // 메뉴 정보를 CartMenuItem 형식으로 변환
    const cartMenu: CartMenuItem = {
      id: menu.id,
      name: menu.name,
      price: typeof menu.price === 'number' ? menu.price : Number(menu.price.replace(/[^0-9]/g, '')),
      ingredients: menu.ingredients,
      isBest: menu.isBest,
      quantity: 1,
    };

    // 가게 정보를 CartStore 형식으로 변환
    const cartStore: CartStore = {
      id: store.id,
      name: store.name,
      deliveryFee: store.deliveryFee,
      minDeliveryPrice: store.minDeliveryPrice,
    };

    // 전역 상태에 메뉴 추가 (다른 가게 메뉴 추가 시 경고 처리도 포함)
    addMenu(cartMenu, cartStore);

    // 장바구니 페이지로 이동
    navigate('/Cart');
  };

  return (
    <Button onClick={handleAdd} type="button" size="sm">
      담기
    </Button>
  );
};

export default AddButton;

