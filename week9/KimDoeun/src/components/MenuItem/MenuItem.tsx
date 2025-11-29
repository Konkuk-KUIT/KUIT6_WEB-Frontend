// src/components/MenuItem/MenuItem.tsx
import Button from "../Button";
import useCartStore from "../../pages/Store/useCartStore";

interface Menu {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  isBest: boolean;
}

interface MenuItemProps extends Menu {
  storeId: number;
  storeName: string;
  deliveryFee: number;
  minDeliveryPrice: number;
}

const MenuItem = ({
  id,
  name,
  price,
  ingredients,
  isBest,
  storeId,
  storeName,
  deliveryFee,
  minDeliveryPrice,
}: MenuItemProps) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const setStoreInfo = useCartStore((state) => state.setStoreInfo);
  const cartStoreId = useCartStore((state) => state.storeId);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleAddMenu = () => {
    if (cartStoreId === 0) {
      setStoreInfo({
        id: storeId,
        name: storeName,
        deliveryFee,
        minDeliveryPrice,
      });
      addMenu({ id, name, price, ingredients });
      return;
    }

    if (cartStoreId !== storeId) {
      const answer = window.confirm(
        "이미 다른 가게의 메뉴가 담겨 있습니다.\n장바구니를 비우고 현재 메뉴를 담을까요?"
      );

      if (!answer) return;

      clearCart();
      setStoreInfo({
        id: storeId,
        name: storeName,
        deliveryFee,
        minDeliveryPrice,
      });
      addMenu({ id, name, price, ingredients });
      return;
    }
    addMenu({ id, name, price, ingredients });
  };

  return (
    <div className="flex flex-row items-center justify-left mt-[16px] mb-[16px]">
      <img
        src="https://placehold.co/54x54"
        alt="메뉴이미지"
        className="rounded-[27px] ml-[24px] mr-[16px]"
      />
      <div className="flex flex-col gap-[5px] mr-[30px] w-[210px]">
        <h3 className="text-[17px] text-[#333D4B] font-[600]">
          {name}
          {isBest && (
            <span className="text-[17px] font-[600] text-[#3182F6] ml-[6px]">
              BEST
            </span>
          )}
        </h3>
        <span className="text-[13px] text-[#6B7684]">
          {price.toLocaleString()}
        </span>
        <p className="text-[13px] text-[#6B7684]">{ingredients}</p>
      </div>
      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </div>
  );
};

export default MenuItem;
