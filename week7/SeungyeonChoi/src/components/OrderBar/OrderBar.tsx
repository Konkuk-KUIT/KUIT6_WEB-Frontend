import Button from "../Button";
import { Link } from "react-router-dom";

const OrderBar = () => {

  const handleOrder = () => {};

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] bg-white rounded-t-2xl shadow-[0_-2px_8px_rgba(0,0,0,0.1)] p-4 flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-[#6B7684] text-[15px]">총 주문금액</span>
        <span className="text-[17px]">12,100원</span>
      </div>

      <Link to="/cart">
        {" "}
        <Button onClick={handleOrder} type="button" size="lg">
          주문하기
        </Button>
      </Link>
    </div>
  );
};

export default OrderBar;
