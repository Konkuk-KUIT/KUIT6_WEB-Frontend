import Button from "../Button";
import useCartStore from "../../pages/Store/useCartStore";

interface MenuItemProps {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  isBest: boolean;
  storeName: string;
  minDeliveryPrice: number;
  deliveryFee: number;
}

const MenuItem = ({
  id,
  name,
  price,
  ingredients,
  isBest,
  storeName,
  minDeliveryPrice,
  deliveryFee,
}: MenuItemProps) => {
  const addMenu = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => {
    console.log("=== 담기 버튼 클릭 ===");
    console.log("menu:", { id, name, extra: ingredients, price, quantity: 1 });
    console.log("storeInfo:", {
      name: storeName,
      minDeliveryPrice,
      deliveryFee,
    });
  
    addMenu(
      {
        id,
        name,
        extra: ingredients,
        price,
        quantity: 1,
      },
      {
        name: storeName,
        minDeliveryPrice,
        deliveryFee,
      }
    );
  };

  console.log("addMenu 호출 완료");
  

  return (
    <div className="flex items-center px-5 py-2">
      <div className="w-[54px] h-[54px] bg-[#ECECEC] rounded-full mr-4" />
      <div className="flex-1 mr-4">
        <div className="flex items-center gap-2 mb-1">
          <p className="text-[17px] font-semibold">{name}</p>
          {isBest && (
            <span className="text-[17px] text-[#3182F6] font-bold">BEST</span>
          )}
        </div>

        <p className="text-[13px] text-[#6B7684]">{price.toLocaleString()}원</p>
        <p className="text-[13px] text-[#6B7684] mb-1 whitespace-normal break-keep">
          {ingredients}
        </p>
      </div>

      <Button size="sm" type="button" onClick={handleAddMenu}>
        담기
      </Button>
    </div>
  );
};

export default MenuItem;
