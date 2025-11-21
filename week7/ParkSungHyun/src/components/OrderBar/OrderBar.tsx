import { useNavigate } from "react-router-dom";
import Button from "../Button";
import useCartStore from "../../pages/Store/useCartStore";

const OrderBar = () => {
  const navigate = useNavigate();
  const menus = useCartStore((state) => state.menus);
  const totalPrice = menus.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0,
  );

  const handleOrder = () => {
    if (!menus.length) {
      return;
    }
    navigate("/cart");
  };

  return (
    <div className="w-full h-[77px] fixed bottom-0 bg-white rounded-tl-2xl rounded-tr-2xl shadow-[0px_-8px_16px_0px_rgba(0,0,0,0.10)] flex justify-between">
      <div className="mt-[16px] ml-[24px]">
        <div className="justify-start text-gray-500 text-base font-normal font-['Pretendard']">
          총 주문금액
        </div>
        <div className="justify-start text-gray-600 text-base font-semibold font-['Pretendard']">
          {totalPrice.toLocaleString()}원
        </div>
      </div>
      <div className="flex items-center mr-6">
        <Button type="button" size="lg" onClick={handleOrder} disabled={!menus.length}>
          주문하기
        </Button>
      </div>
    </div>
  );
};

export default OrderBar;

