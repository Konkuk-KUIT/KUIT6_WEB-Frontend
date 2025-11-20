import CartItem from "../../components/CartItem/CartItem";
import CartSummary from "../../components/CartSummary/CartSummary";

const Cart = () => {
  const store = {
    name: "샐로리 한남점",
    minDeliveryPrice: 13000,
    deliveryFee: 2000,
  };

  const items = [
    {
      id: 1,
      name: "토마토 샐러드",
      extra: "추천소스, 채소볼, 베이컨추가, 시저드레싱 추가",
      quantity: 1,
      price: 10600,
    },
  ];

  const totalOrder = items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  const finalPrice = totalOrder + store.deliveryFee;

  return (
    <div className="pb-32">
      {/* 헤더 */}
      <div className="flex items-center justify-between px-5 py-4 border-b-16 border-[#F2F4F6]">
        <button onClick={() => window.history.back()}>
          <img src="/src/assets/chevron-left.svg" className="w-5 h-5" />
        </button>
        <span className="font-semibold">주문취소</span>
      </div>

      {/* 매장 정보 */}
      <div className="px-5 py-4 bg-white flex justify-between text-sm">
        <span className="font-semibold text-[17px] text-[#6B7684]">{store.name}</span>
        <div className="flex items-center gap-1 text-[#F04452]">
          <span className="text-[15px]">최소금액 미달</span>
          <img src="/src/assets/warning.svg" className="w-3 h-3" />
        </div>
      </div>

      {/* 담은 메뉴들 */}
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="px-5 py-4 text-[17px] text-[#3182F6] text-center font-semibold border-b-16 border-[#F2F4F6]">더 담기 +</div>

      <CartSummary totalOrder={totalOrder} deliveryFee={store.deliveryFee} finalPrice={finalPrice} minDeliveryPrice={store.minDeliveryPrice} />
    </div>
  );
};

export default Cart;
