import arrow from "../../assets/arrow.svg";
import advice from "../../assets/advice.svg";
import stores from "../../models/stores";
import OrderMenu from "../../components/MenuItem/OrderMenu";
import Button from "../../components/Button";

const store = stores.find((s) => s.id === 1);
const menu = store?.menus.find((m) => m.id === 1);

const sum = menu?.price;
const total = sum! + store?.deliveryFee!;

const Cart = () => {
  const handleOrder = () => { };

  return (
    <>
      <div className="flex flex-row items-center justify-between w-full ml-[10px] mt-[54px] mb-[14px]">
        <img src={arrow} alt="이전" />
        <span className="text-[16px] text-[#333D4B] font-[600]">주문취소</span>
      </div>
      <hr className="border-0 h-[16px] bg-[#F2F4F6]" />
      <div className="ml-[24px] mt-[16px] flex flex-row items-center justify-between">
        <span className="text-[17px] text-[#6B7684] font-bold">샐로리 한남점</span>
        {sum! < store?.minDeliveryPrice! &&
          <div>
            <span className="text-[#F04452] text-[15px] mr-[6px]">최소금액 미달</span>
            <img src={advice} alt="경고" className="inline" />
          </div>
        }
      </div>
      <OrderMenu menu={menu!} />
      <div className="py-[19px] text-[17px] font-[600] text-[#3182F6] flex justify-center items-center">더 담기 +</div>
      <hr className="border-0 h-[16px] bg-[#F2F4F6]" />
      <div>
        <p className="flex flex-row justify-between items-center py-[8px] px-[24px]">
          <span className="text-[17px] text-[#8B95A1]">주문금액</span>
          <span className="text-[17px] text-[#505967]">{sum?.toLocaleString()}</span>
        </p>
        <p className="flex flex-row justify-between items-center py-[8px] px-[24px]">
          <span className="text-[17px] text-[#8B95A1]">배달요금</span>
          <span className="text-[17px] text-[#505967]">{store?.deliveryFee.toLocaleString()}</span>
        </p>
        <p className="flex flex-row justify-between items-center py-[17px] px-[24px] text-[17px] text-[#4E5968]">
          <span>총 결제금액</span>
          <span className="font-[600]">
            {total.toLocaleString()}
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-[19px] w-full fixed bottom-[21px]">
        <p className="text-[17px] text-[#6B7684]">최소 주문금액 {store?.minDeliveryPrice.toLocaleString()}원</p>
        <Button onClick={handleOrder} type="button" size="xl" disabled={sum! < store?.minDeliveryPrice!}>
          {total.toLocaleString()}원 결제하기
        </Button>
      </div>
    </>
  )
};

export default Cart;
