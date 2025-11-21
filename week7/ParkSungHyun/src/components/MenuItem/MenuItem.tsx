import Button from "../Button";
import useCartStore from "../../pages/Store/useCartStore";
import type { Menu, Store } from "../../types/store";

interface MenuItemProps {
  menu: Menu;
  store: Store;
}

const formatPrice = (price: number) => `${price.toLocaleString()}원`;

const MenuItem = ({ menu, store }: MenuItemProps) => {
  const addMenu = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => {
    addMenu(
      {
        id: store.id,
        name: store.name,
        minDeliveryPrice: store.minDeliveryPrice,
        deliveryFee: store.deliveryFee,
      },
      menu,
    );
  };

  return (
    <div className="flex justify-around items-center my-4">
      <div className="w-16 h-16 bg-[#ECECEC] rounded-full"></div>
      <div className="w-[205px]">
        <h3 className="text-[17px] font-semibold">{menu.name}</h3>
        <span className="text-[13px] font-medium">{formatPrice(menu.price)}</span>
        <p className="text-[13px] font-medium">{menu.ingredients}</p>
      </div>
      <Button type="button" size="sm" onClick={handleAddMenu}>
        담기
      </Button>
    </div>
  );
};

export default MenuItem;

