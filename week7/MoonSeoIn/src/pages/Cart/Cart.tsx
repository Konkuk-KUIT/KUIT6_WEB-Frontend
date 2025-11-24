import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import CartSummary from "../../components/CartSummary/CartSummary";
import useCartStore from "../../pages/Store/useCartStore";

const Cart = () => {
  const navigate = useNavigate();
  const { menus, store, clearCart, getTotalPrice } = useCartStore();

  const handleCancel = () => {
    clearCart();
    if (store) {
      navigate(`/store/${store.id}`);
    } else {
      navigate("/");
    }
  };

  if (!store || menus.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-lg text-gray-600 mb-4">장바구니가 비어있습니다.</p>
        <button onClick={() => navigate("/")} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          홈으로 가기
        </button>
      </div>
    );
  }

  const totalOrder = getTotalPrice();
  const finalPrice = totalOrder + store.deliveryFee;
  const isBelowMin = finalPrice < store.minDeliveryPrice;

  return (
    <div className="pb-32">
      {/* 헤더 */}
      <div className="flex items-center justify-between px-5 py-4 border-b-16 border-[#F2F4F6]">
        <button onClick={() => window.history.back()} className="cursor-pointer">
          <img src="/src/assets/chevron-left.svg" className="w-5 h-5" />
        </button>
        <button onClick={handleCancel}>
          <span className="font-semibold">주문취소</span>
        </button>
      </div>

      {/* 매장 정보 */}
      <div className="px-5 py-4 bg-white flex justify-between text-sm">
        <span className="font-semibold text-[17px] text-[#6B7684]">{store.name}</span>
        {isBelowMin && (
          <div className="flex items-center gap-1 text-[#F04452]">
            <span className="text-[15px]">최소금액 미달</span>
            <img src="/src/assets/warning.svg" className="w-3 h-3" />
          </div>
        )}
      </div>

      {/* 담은 메뉴들 */}
      {menus.map((menu) => (
        <CartItem
          key={menu.id}
          item={{
            id: menu.id,
            name: menu.name,
            extra: menu.ingredients,
            quantity: menu.quantity,
            price: menu.price,
          }}
        />
      ))}

      <div className="px-5 py-4 text-[17px] text-[#3182F6] text-center font-semibold border-b-16 border-[#F2F4F6]">더 담기 +</div>

      <CartSummary totalOrder={totalOrder} deliveryFee={store.deliveryFee} finalPrice={finalPrice} minDeliveryPrice={store.minDeliveryPrice} />
    </div>
  );
};

export default Cart;
