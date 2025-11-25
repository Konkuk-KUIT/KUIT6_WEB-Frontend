import { useParams } from "react-router-dom";
import stores from "../../models/stores";
import Button from "../Button";
import useCartStore from "../../pages/Store/useCartStore";

interface Menu {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  isBest: boolean;
}

// interface MenuItemProps {
//   menu: Menu;
// }

const MenuItem = ({ id, name, price, ingredients, isBest }: Menu) => {
  const { id: storeIdParam } = useParams();
  const addMenu = useCartStore((state) => state.addMenu);
  const setStoreInfo = useCartStore((state) => state.setStoreInfo);
  const cartStoreId = useCartStore((state) => state.storeId);
  const clearCart = useCartStore((state) => state.clearCart);

  const storeId = Number(storeIdParam);
  const store = stores.find((s) => s.id === storeId);

  const handleAddMenu = () => {
    if (cartStoreId === 0) {
      if (store) {
        setStoreInfo({
          id: store.id,
          name: store.name,
          deliveryFee: store.deliveryFee,
          minDeliveryPrice: store.minDeliveryPrice,
        });
      }
      addMenu({ id, name, price, ingredients });
      return;
    }

    if (cartStoreId !== storeId) {
      const answer = window.confirm(
        "이미 다른 가게의 메뉴가 담겨 있습니다.\n장바구니를 비우고 현재 메뉴를 담을까요?"
      );

      if (!answer) return; 

      clearCart();

      if (store) {
        setStoreInfo({
          id: store.id,
          name: store.name,
          deliveryFee: store.deliveryFee,
          minDeliveryPrice: store.minDeliveryPrice,
        });
      }

      addMenu({ id, name, price, ingredients });
      return;
    }

    addMenu({ id, name, price, ingredients });
  };

  return (
    <div className="flex flex-row items-center justify-left mt-[16px] mb-[16px]">
      <img src="https://placehold.co/54x54" alt="메뉴이미지" className="rounded-[27px] ml-[24px] mr-[16px]" />
      <div className="flex flex-col gap-[5px] mr-[30px] w-[210px]">
        <h3 className="text-[17px] text-[#333D4B] font-[600]">
          {name}
          {isBest && <span className="text-[17px] font-[600] text-[#3182F6] ml-[6px]">BEST</span>}
        </h3>
        <span className="text-[13px] text-[#6B7684]">{price.toLocaleString()}</span>
        <p className="text-[13px] text-[#6B7684]">{ingredients}</p>
      </div>
      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </div>
  );
};

export default MenuItem;
