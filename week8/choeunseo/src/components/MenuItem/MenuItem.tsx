// src/components/MenuItem/MenuItem.tsx
import Button from "../Button";
import useCartStore from "../../pages/Store/useCartStore";

interface MenuProps {
  storeId: number;
  storeName: string;
  deliveryFee: number;
  minOrderPrice: number;
  name: string;
  price: number;
  ingredients?: string;
  id?: number;
}

const MenuItem = ({
  storeId,
  storeName,
  deliveryFee,
  minOrderPrice,
  name,
  price,
  ingredients,
  id,
}: MenuProps) => {
  const addMenu = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => {
    // addMenu의 시그니처: (store, menu)
    addMenu(
      {
        storeId,
        storeName,
        deliveryFee,
        minOrderPrice,
      },
      {
        id,
        name,
        price,
        ingredients,
        quantity: 1,
      }
    );
  };

  return (
    <div className="flex justify-around items-center my-4">
      <div className="w-16 h-16 bg-[#ECECEC] rounded-full"></div>
      <div className="w-[205px]">
        <h3 className="text-[17px] font-semibold">{name}</h3>
        <span className="text-[13px] font-medium">{price}원</span>
        <p className="text-[13px] font-medium">{ingredients}</p>
      </div>
      <div onClick={handleAddMenu}>
        <Button type="button" size="sm">
          담기
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
