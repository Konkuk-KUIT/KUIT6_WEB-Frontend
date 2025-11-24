import Button from "../../components/Button";
import useCartStore from "../../Pages/Store/useCartStore";

interface Menu {
  id: number;     
  name: string;
  price: number;
  ingredients: string;
}

interface StoreInfo {
  id: number;
  name: string;
  minDeliveryPrice: number;
  deliveryFee: number;
}

interface MenuItemProps {
  menu: Menu;
  storeInfo: StoreInfo;
}

const MenuItem = ({ menu, storeInfo }: MenuItemProps) => {
  const addMenu = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => {
    addMenu(menu, storeInfo);
  };

  return (
    <div>
      <h3>{menu.name}</h3>
      <span>{menu.price}</span>
      <p>{menu.ingredients}</p>
      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </div>
  );
};

export default MenuItem;
