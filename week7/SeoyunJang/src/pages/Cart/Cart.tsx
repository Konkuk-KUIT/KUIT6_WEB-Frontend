import CartHeader from "./components/CartHeader";
import CartItem from "./components/CartItem";
import CartDescription from "./components/CartDescription";
import { CART_TAG } from "../../modules/stores";
import Button from "../../shared/Button";


const Cart = () => {
    return (
            <div>
                <CartHeader/>
                <CartItem/>
                <CartDescription items={CART_TAG}/>
                <div className="flex flex-col gap-[20px] justify-center items-center h-[130px] bg-white absolute bottom-0 w-full">
                    <span className="text-[17px] text-[#6B7684]">최소 주문금액 13,000원</span>
                    <Button size="xl" disabled>12,600원 결제하기</Button>
                </div>
                <div className="flex justify-center py-[20px] border-b-[16px] border-[#F2F4F6]">
                <button className="flex gap-[3px]">
                    <span className="text-[17px] text-[#3182F6] font-semibold">더담기</span>
                    <img src="/plus.svg"/>
                </button>
            </div>
            </div>
    );
}

export default Cart;