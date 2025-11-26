import left_chevron from "../../assets/left_chevron.svg";
import SelectMenu from "../../components/SelectMenu/SelectMenu";
import Button from "../../components/Button";
import warning from "../../assets/warning.svg";
import { useNavigate } from "react-router-dom";
import useCartStore from "../Store/useCartStore";

const DELIVERY_FEE = 2000;

const Cart = () => {
  const navigate = useNavigate();
  const { store, menus, clearCart } = useCartStore();

  const orderAmount = menus.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const deliveryFee = menus.length ? DELIVERY_FEE : 0;
  const totalAmount = orderAmount + deliveryFee;
  const meetsMinimum = store ? orderAmount >= store.minDeliveryPrice : true;

  const handleCancel = () => {
    clearCart();
    navigate("/stores");
  };

  const handleCheckout = () => {
    if (!menus.length || !meetsMinimum) {
      return;
    }

    if (typeof window !== "undefined") {
      window.alert("주문이 완료되었습니다! 맛있게 드세요.");
    }
    clearCart();
    navigate("/stores");
  };

  const handleAddMore = () => {
    if (store) {
      navigate(`/stores/${store.id}`);
    } else {
      navigate("/stores");
    }
  };

  return (
    <div className="pb-32">
      <div className="flex justify-between pr-[15px] pt-[9px] pl-[10px] pb-[12px]">
        <img onClick={() => navigate(-1)} src={left_chevron} alt="뒤로가기" />
        <button
          type="button"
          onClick={handleCancel}
          className="text-[16px] font-semibold font-['Pretendard']"
        >
          주문취소
        </button>
      </div>
      <div className="w-full h-[16px] bg-[#F2F4F6]"></div>
      <div>
        <div className="flex justify-between px-6 pt-[26px] pb-3">
          <div className="font-bold text-[17px] font-['Pretendard'] text-[#6B7684]">
            {store ? store.name : "장바구니가 비어 있습니다"}
          </div>
          {!meetsMinimum && store && (
            <div className="flex items-center justify-center gap-[6px]">
              <div className="font-['Pretendard'] font-medium text-[15px] text-[#F04452]">
                최소금액 미달
              </div>
              <img src={warning} alt="경고" className="w-[13px] h-[13px]" />
            </div>
          )}
        </div>
        <div>
          {menus.length ? (
            menus.map((menu) => (
              <SelectMenu
                key={menu.id}
                name={menu.name}
                price={menu.price}
                quantity={menu.quantity}
                description={menu.ingredients}
              />
            ))
          ) : (
            <div className="font-['Pretendard'] text-center py-8 text-[#8B95A1]">
              담긴 메뉴가 없습니다. 가게에서 메뉴를 담아보세요!
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={handleAddMore}
          className="w-full font-['Pretendard'] text-[#3182F6] flex items-center justify-center pt-[19px] pb-[20px] border-t-1 border-t-gray-300"
        >
          더 담기 +
        </button>
      </div>
      <div className="w-full h-[16px] bg-[#F2F4F6]"></div>
      <div>
        <div className="flex justify-between px-6 py-2">
          <div className="text-[#8b95A1]">주문금액</div>
          <div>{orderAmount.toLocaleString()}원</div>
        </div>
        <div className="flex justify-between px-6 py-2">
          <div className="text-[#8b95A1]">배달요금</div>
          <div>{deliveryFee.toLocaleString()}원</div>
        </div>
        <div className="flex justify-between px-6 py-4">
          <div>총 결제금액</div>
          <div className="font-semibold">{totalAmount.toLocaleString()}원</div>
        </div>
      </div>
      <div className="w-full fixed bottom-0 mb-4 flex flex-col justify-center items-center">
        <div className="mb-5 text-4 font-medium text-[#6b7684]">
          {store
            ? `최소 주문금액 ${store.minDeliveryPrice.toLocaleString()}원`
            : "가게에서 메뉴를 담아주세요"}
        </div>
        <Button
          type="button"
          size="xl"
          onClick={handleCheckout}
          disabled={!menus.length || !meetsMinimum}
        >
          {totalAmount.toLocaleString()}원 결제하기
        </Button>
      </div>
    </div>
  );
};

export default Cart;

