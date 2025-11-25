import CartHeader from "./components/CartHeader";
import CartItem from "./components/CartItem";
import CartDescription from "./components/CartDescription";
import Button from "../../shared/Button";
import useCartStore from "../Stores/useCartStore";

const Cart = () => {
    const totalPrice = useCartStore((state) => state.totalPrice);

    return (
        <div>
            <CartHeader />
            <CartItem />

            <CartDescription
                totalPrice={totalPrice}
                deliveryFee={2000}
                finalPrice={totalPrice + 2000}
            />

            <div className="flex flex-col gap-[20px] justify-center items-center h-[130px] bg-white absolute bottom-0 w-full">
                <span className="text-[17px] text-[#6B7684]">최소 주문금액 13,000원</span>
                <Button size="xl" disabled={totalPrice + 2000 < 13000}>
                    {(totalPrice + 2000).toLocaleString()}원 결제하기
                </Button>
            </div>

            <div className="flex justify-center py-[20px] border-b-[16px] border-[#F2F4F6]">
                <button className="flex gap-[3px]">
                    <span className="text-[17px] text-[#3182F6] font-semibold">더담기</span>
                    <img src="/plus.svg" />
                </button>
            </div>
        </div>
    );
};

export default Cart;
