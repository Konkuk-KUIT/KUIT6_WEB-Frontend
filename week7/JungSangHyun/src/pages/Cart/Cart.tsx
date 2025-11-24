import stores from "../../models/stores.ts";

const Cart = () => {
  // 샐로리 한남점
  const store = stores.find((s) => s.id === 1);

  // 토마토 샐러드 1개 담긴 상태
  const item = store?.menus[0]; // 첫 메뉴
  const quantity = 1;
  
  // todo 담은 메뉴 전역상태를 map하여 렌더링하는 구조로 변경해야 함

  const orderPrice = item!.price * quantity;
  const deliveryFee = store!.deliveryFee;
  const totalPrice = orderPrice + deliveryFee;

  const isBelowMin = totalPrice < store!.minDeliveryPrice;

  return (
    <div className="w-[390px] h-[844px] bg-white mx-auto flex flex-col">

      <div className="px-5 pt-10 pb-4 border-b border-gray-200">
        <div className="flex justify-between">
          <button className="text-[24px] cursor-pointer hover:bg-gray-100">‹</button>
          <button className="text-[16px] text-[#333D4B] cursor-pointer">주문취소</button>
        </div>
      </div>

      <div className="px-5 py-4 flex justify-between items-center">
        <h2 className="text-[20px] font-semibold text-[#333D4B]">
          {store!.name}
        </h2>

        {isBelowMin && (
          <div className="text-[14px] font-semibold text-red-500 flex items-center gap-1">
            최소금액 미달 ❗
          </div>
        )}
      </div>

      <div className="px-5 py-4 border-b border-gray-200 flex items-start gap-4">

        <div className="w-[64px] h-[64px] bg-gray-200 rounded-md"></div>

        <div className="flex-1">
          <p className="text-[17px] font-bold text-[#333D4B]">
            {item!.name}
          </p>

          <p className="text-[14px] text-[#6B7684] mt-1 leading-[20px]">
            기타 추가 소스
          </p>

          <p className="text-[16px] font-medium text-[#333D4B] mt-1">
            {orderPrice.toLocaleString()}원
          </p>
        </div>

        <div className="flex flex-col items-center justify-center text-[16px]">
          <span>{quantity}개</span>
          <button className="text-[18px] text-[#6B7684]">›</button>
        </div>
      </div>

      <div className="py-4 text-center border-b border-gray-200">
        <button className="text-[#3182F6] text-[17px] font-semibold cursor-pointer">
          더 담기 +
        </button>
      </div>

      <div className="px-5 py-6 text-[16px] text-[#333D4B] space-y-4">
        <div className="flex justify-between text-[#6B7684]">
          <span>주문금액</span>
          <span className="text-[#333D4B]">{orderPrice.toLocaleString()}원</span>
        </div>

        <div className="flex justify-between text-[#6B7684]">
          <span>배달요금</span>
          <span className="text-[#333D4B]">{deliveryFee.toLocaleString()}원</span>
        </div>

        <div className="flex justify-between font-semibold text-[18px]">
          <span>총 결제금액</span>
          <span>{totalPrice.toLocaleString()}원</span>
        </div>
      </div>

      <div className="px-5 text-center text-[#6B7684] text-[15px]">
        최소 주문금액{" "}
        {store!.minDeliveryPrice.toLocaleString()}원
      </div>

      <div className="px-5 mt-4">
        <button
          disabled={isBelowMin}
          className={`w-full py-4 rounded-xl text-[17px] font-semibold 
            ${isBelowMin
              ? "bg-[#DCE6F9] text-[#8BA4D8]"
              : "bg-[#3182F6] text-white"
            }`}
        >
          {totalPrice.toLocaleString()}원 결제하기
        </button>
      </div>

    </div>
  );
};

export default Cart;
