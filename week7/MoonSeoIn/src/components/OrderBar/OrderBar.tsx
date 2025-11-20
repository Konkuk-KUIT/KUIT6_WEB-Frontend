import Button from "../Button";
import { Link } from "react-router-dom";
import useCartStore from "../../pages/Store/useCartStore";

const OrderBar = () => {
  const { store, getTotalPrice } = useCartStore();
  const totalPrice = getTotalPrice();
  const finalPrice = store ? totalPrice + store.deliveryFee : totalPrice;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white rounded-t-2xl shadow-[0_-2px_8px_rgba(0,0,0,0.1)] p-4 flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-[#6B7684] text-[15px]">총 주문금액</span>
        <span className="text-[17px]">{finalPrice.toLocaleString()}원</span>
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
