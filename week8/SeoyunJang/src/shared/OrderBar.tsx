import Button from "./Button";
import { Link } from "react-router-dom";
import useCartStore from "../pages/Stores/useCartStore";

interface OrderBarProps {
  to?: string;
}

const OrderBar = ({to} : OrderBarProps) => {
  const handleOrder = () => {};
  
  const menus = useCartStore((state) => state.menus);

  return (
    <div className="fixed bottom-0 w-full h-[111px] flex justify-between items-center bg-white
                rounded-tl-[12px] rounded-tr-[12px] px-[24px]
                shadow-[0_-8px_8px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col gap-[5px]">
            <div className="text-[15px] text-[#6B7684]">총 주문금액</div>
            <div className="text-[17px] text-[#4E5968]">{ menus.reduce((acc,cur) => acc + cur.price,0)}원</div>
        </div>

        {to ? (
          <Link to={to}>
            <Button type="button" size="lg">
              주문하기
            </Button>
              </Link>
          ) : (
            <Button onClick={handleOrder} type="button" size="lg">
              주문하기
            </Button>
        )}
    </div>
  );
};

export default OrderBar;
