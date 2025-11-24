import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import CartSummary from "../../components/CartTotal/CartTotal";
import useCartStore from "../Store/useCartStore";

const Cart = () => {
  const navigate = useNavigate();
  const { store, menus, reset } = useCartStore();

  const handleCancel = () => {
    reset(); // 장바구니 비우기
    setTimeout(() => {
      navigate("/stores", { replace: true });
    }, 0);
  };

  // 장바구니 비어 있을 때 처리
  if (!store || menus.length === 0) {
    return (
      <main className="w-[390px] h-[844px] bg-white mx-auto relative overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#F2F4F6]">
          <button
            onClick={() => navigate("/stores", { replace: true })}
            aria-label="이전 페이지로 돌아가기"
          >
            <img
              src="/src/assets/chevron-left.svg"
              alt="뒤로가기"
              className="w-5 h-5"
            />
          </button>
          <button
            onClick={handleCancel}
            className="font-semibold text-[17px] bg-none border-none cur0sor-pointer p-0"
            aria-label="주문취소"
          >
            주문취소
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full text-[#6B7684]">
          <p className="text-[15px] mb-2">장바구니가 비어 있습니다.</p>
          <button
            onClick={() => navigate("/stores", { replace: true })}
            className="mt-2 px-4 py-2 rounded-lg bg-[#3182F6] text-white text-sm"
          >
            가게 목록으로 이동
          </button>
        </div>
      </main>
    );
  }

  const totalOrder = menus.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = store.deliveryFee;
  const finalPrice = totalOrder + deliveryFee;

  return (
    <main className="w-[390px] h-[844px] bg-white mx-auto relative overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#F2F4F6]">
        <button onClick={handleCancel} aria-label="뒤로가기">
          <img
            src="/src/assets/chevron-left.svg"
            alt="뒤로가기"
            className="w-5 h-5"
          />
        </button>
        <button
          onClick={handleCancel}
          className="font-semibold text-[17px] bg-none border-none cursor-pointer p-0"
          aria-label="주문취소"
        >
          주문취소
        </button>
      </div>

      <div className="flex justify-between items-center px-5 py-4 bg-white border-b-16 border-[#F2F4F6]">
        <span className="text-[17px] font-semibold text-[#333D4B]">
          {store.name}
        </span>
        {totalOrder < store.minDeliveryPrice && (
          <div className="flex items-center gap-1 text-[#F04452] text-[15px]">
            <span>최소금액 미달</span>
            <img
              src="/src/assets/warning.svg"
              alt="최소 주문금액 미달"
              className="w-3 h-3"
            />
          </div>
        )}
      </div>

      {menus.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <button
        type="button"
        onClick={() => navigate("/stores")}
        className="w-full px-5 py-4 text-[17px] text-[#3182F6] text-center font-semibold border-b-16 border-[#F2F4F6]"
      >
        더 담기 +
      </button>

      <CartSummary
        totalOrder={totalOrder}
        deliveryFee={deliveryFee}
        finalPrice={finalPrice}
        minDeliveryPrice={store.minDeliveryPrice}
      />
    </main>
  );
};

export default Cart;
