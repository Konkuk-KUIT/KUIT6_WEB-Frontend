import left_chevron from "../../assets/left_chevron.svg";
import SelectMenu from "../../components/SelectMenu/SelectMenu";
import Button from "../../components/Button";
import warning from "../../assets/warning.svg";
import { useNavigate } from "react-router-dom";
import useCartStore from "../Store/useCartStore";

const Cart = () => {
  const navigate = useNavigate();
  const menus = useCartStore((state) => state.menus);
  const PRICE = menus.reduce((acc, cur) => acc + cur.price, 0);
  const reset = useCartStore((state) => state.reset);

  return (
    <div>
      <div className="flex justify-between pr-[15px] pt-[9px] pl-2.5 pb-3">
        <img onClick={() => navigate(-1)} src={left_chevron} alt="뒤로가기" />
        <div onClick={() => {
          alert("주문이 취소되었습니다.");
          navigate("/store") 
          reset();
        }} className="text-[16px] font-semibold font-['Pretendard']">
          주문취소
        </div>
      </div>
      <div className="w-full h-4 bg-[#F2F4F6]"></div>
      <div>
        <div className="flex justify-between px-6 pt-[26px] pb-3">
          <div className="font-bold text-[17px] font-['Pretendard'] text-[#6B7684]">
            샐로리 한남점
          </div>
          {PRICE + 2000 < 13000 && (<div className="flex items-center justify-center gap-1.5">
            <div className="font-['Pretendard'] font-medium text-[15px] text-[#F04452]">
              최소금액 미달
            </div>
            <img src={warning} alt="경고" className="w-[13px] h-[13px]" />
          </div>)}
          
        </div>
        <div>
          {menus.map((menu) => (
            <SelectMenu name={menu.name} price={menu.price} />
          ))}
        </div>
        <div className="flex font-['Pretendard'] text-[#3182F6] items-center justify-center pt-[19px] pb-5 border-t border-t-gray-300">
          더 담기 +
        </div>
      </div>
      <div className="w-full h-4 bg-[#F2F4F6]"></div>
      <div>
        <div className="flex justify-between px-6 py-2">
          <div className="text-[#8b95A1]">주문금액</div>
          <div>{ PRICE.toLocaleString()}원</div>
        </div>
        <div className="flex justify-between px-6 py-2">
          <div className="text-[#8b95A1]">배달요금</div>
          <div>2,000원</div>
        </div>
        <div className="flex justify-between px-6 py-4">
          <div>총 결제금액</div>
          <div className="font-semibold">{(PRICE+2000).toLocaleString()}원</div>
        </div>
      </div>
      <div className="w-full fixed bottom-0 mb-4 flex flex-col justify-center items-center">
        <div className="mb-5 text-4 font-medium text-[#6b7684]">
          최소 주문금액 13,000원
        </div>
        {PRICE + 2000 >= 13000 ? <Button type="button" size="xl">
          {(PRICE + 2000).toLocaleString()}원 결제하기
        </Button>:<Button type="button" size="xl" disabled={true} >
          {(PRICE+2000).toLocaleString()}원 결제하기
        </Button>}
        
      </div>
    </div>
  );
};

export default Cart;
