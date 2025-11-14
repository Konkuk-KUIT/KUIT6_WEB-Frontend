import Button from "../Button";
import { Link } from "react-router-dom";
interface Menu {
  price: number;
}

const OrderBar = () => {
  const menus: Menu[] = [];

  const handleOrder = () => {};

  const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0);

  // todo /cart 경로로 menus.name, menus.price, 담은 갯수, 최소 금액 여부 넘겨줘야 함
  return (
    <div className="w-full h-[110px] px-5 py-4 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)] flex items-center justify-between rounded-t-[20px]">
      <div className="flex flex-col">
        <span className="text-[#8B95A1] text-[14px]">총 주문금액</span>
        <span className="text-[22px] font-bold text-[#333D4B]">{totalPrice}원</span>
      </div>
      <Link to = "/cart">
        <Button className="cursor-pointer" type="button" size="lg"  onClick={handleOrder}>
          주문하기
        </Button>
      </Link>
    </div>
  );
};

export default OrderBar;
