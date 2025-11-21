import { useNavigate } from "react-router-dom";
import useCartStore from "../../stores/useCartStore";
import useStoreStore from "../../stores/useStoreStore";

const Cart = () => {
  const navigate = useNavigate();
  const { storeId, menus, removeMenu, clearCart } = useCartStore();
  const store = useStoreStore((state) => state.getStore(storeId ?? -1));

  if (!store || menus.length === 0) {
    return (
      <div className="w-[390px] h-[844px] bg-white mx-auto flex flex-col items-center justify-center">
        <p className="text-[#333D4B] text-[18px] font-semibold mb-4">장바구니가 비어있습니다.</p>
        <button 
          onClick={() => navigate('/store')}
          className="bg-[#3182F6] text-white px-6 py-3 rounded-xl font-medium cursor-pointer"
        >
          가게 목록으로 가기
        </button>
      </div>
    );
  }

  const orderPrice = menus.reduce((acc, menu) => acc + menu.price * menu.quantity, 0);
  const deliveryFee = 2000;
  const totalPrice = orderPrice + deliveryFee;
  const isBelowMin = orderPrice < store.minDeliveryPrice;

  const handleClearCart = () => {
    if (window.confirm("주문을 취소하시겠습니까? 장바구니가 비워집니다.")) {
      clearCart();
      navigate('/store');
    }
  };

  return (
    <div className="w-[390px] h-[844px] bg-white mx-auto flex flex-col">

      <div className="px-5 pt-10 pb-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <button className="text-[24px] cursor-pointer hover:bg-gray-100" onClick={() => navigate(`/store/${store.id}`)}>‹</button>
          <button 
            className="text-[16px] text-[#333D4B] cursor-pointer hover:text-red-500"
            onClick={handleClearCart}
          >
            주문취소
          </button>
        </div>
      </div>

      <div className="px-5 py-4 flex justify-between items-center">
        <h2 className="text-[20px] font-semibold text-[#333D4B]">
          {store.name}
        </h2>

        {isBelowMin && (
          <div className="text-[14px] font-semibold text-red-500 flex items-center gap-1">
            최소금액 미달 ❗
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        {menus.map((menu) => (
          <div key={menu.id} className="px-5 py-4 border-b border-gray-200 flex items-start gap-4">
            <div className="size-16 bg-gray-200 rounded-md"></div>

            <div className="flex-1">
              <p className="text-[17px] font-bold text-[#333D4B]">
                {menu.name}
              </p>

              <p className="text-[14px] text-[#6B7684] mt-1 leading-5">
                {menu.ingredients}
              </p>

              <p className="text-[16px] font-medium text-[#333D4B] mt-1">
                {(menu.price * menu.quantity).toLocaleString()}원
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-[16px] font-medium">{menu.quantity}개</span>
              <button 
                className="text-[14px] text-[#6B7684] border border-gray-300 px-2 py-1 rounded hover:bg-gray-50 cursor-pointer"
                onClick={() => removeMenu(menu.id)}
              >
                삭제
              </button>
            </div>
          </div>
        ))}

        <div className="py-4 text-center border-b border-gray-200">
          <button 
            className="text-[#3182F6] text-[17px] font-semibold cursor-pointer"
            onClick={() => navigate(`/store/${store.id}`)}
          >
            더 담기 +
          </button>
        </div>
      </div>

      <div className="px-5 py-6 text-[16px] text-[#333D4B] space-y-4 bg-gray-50">
        <div className="flex justify-between text-[#6B7684]">
          <span>주문금액</span>
          <span className="text-[#333D4B]">{orderPrice.toLocaleString()}원</span>
        </div>

        <div className="flex justify-between text-[#6B7684]">
          <span>배달요금</span>
          <span className="text-[#333D4B]">{deliveryFee.toLocaleString()}원</span>
        </div>

        <div className="flex justify-between font-semibold text-[18px] pt-4 border-t border-gray-200">
          <span>총 결제금액</span>
          <span>{totalPrice.toLocaleString()}원</span>
        </div>
      </div>

      <div className="px-5 text-center text-[#6B7684] text-[15px] mt-2">
        최소 주문금액 {store.minDeliveryPrice.toLocaleString()}원
      </div>

      <div className="px-5 mt-4 mb-8">
        <button
          disabled={isBelowMin}
          className={`w-full py-4 rounded-xl text-[17px] font-semibold cursor-pointer
            ${isBelowMin
              ? "bg-[#DCE6F9] text-[#8BA4D8] cursor-not-allowed"
              : "bg-[#3182F6] text-white hover:bg-[#2b72d7]"
            }`}
          onClick={() => {
            alert("결제를 진행합니다.");
          }}
        >
          {totalPrice.toLocaleString()}원 결제하기
        </button>
      </div>

    </div>
  );
};

export default Cart;
