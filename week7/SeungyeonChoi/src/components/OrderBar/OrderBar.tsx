import Button from "../Button";
import { Link } from "react-router-dom";
import useCartStore from "../../pages/Store/useCartStore";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);

  const totalPrice = menus.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] h-[77px] bg-white rounded-tl-2xl rounded-tr-2xl shadow-[0px_-8px_16px_0px_rgba(0,0,0,0.10)] flex justify-between items-center px-6">
      <div>
        <div className="text-gray-500 text-base">총 주문금액</div>
        <div className="text-gray-600 text-base font-semibold">
          {totalPrice.toLocaleString()}원
        </div>
      </div>

      <Link to="/cart">
        <Button type="button" size="lg">
          주문하기
        </Button>
      </Link>
    </div>
  );
};

export default OrderBar;
