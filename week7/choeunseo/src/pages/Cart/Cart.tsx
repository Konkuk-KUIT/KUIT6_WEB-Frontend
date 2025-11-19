import left_chevron from "../../assets/left_chevron.svg";
import SelectMenu from "../../components/SelectMenu/SelectMenu";
import Button from "../../components/Button";
import warning from "../../assets/warning.svg";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between pr-[15px] pt-[9px] pl-[10px] pb-[12px]">
        <img onClick={() => navigate(-1)} src={left_chevron} alt="뒤로가기" />
        <div onClick={() => navigate("/store")} className="text-[16px] font-semibold font-['Pretendard']">
          주문취소
        </div>
      </div>
      <div className="w-full h-[16px] bg-[#F2F4F6]"></div>
      <div>
        <div className="flex justify-between px-6 pt-[26px] pb-3">
          <div className="font-bold text-[17px] font-['Pretendard'] text-[#6B7684]">
            샐로리 한남점
          </div>
          <div className="flex items-center justify-center gap-[6px]">
            <div className="font-['Pretendard'] font-medium text-[15px] text-[#F04452]">
              최소금액 미달
            </div>
            <img src={warning} alt="경고" className="w-[13px] h-[13px]" />
          </div>
        </div>
        <div>
          <SelectMenu name="토마토 샐러드" price={10600} />
        </div>
        <div className="flex font-['Pretendard'] text-[#3182F6] items-center justify-center pt-[19px] pb-[20px] border-t-1 border-t-gray-300">
          더 담기 +
        </div>
      </div>
      <div className="w-full h-[16px] bg-[#F2F4F6]"></div>
      <div>
        <div className="flex justify-between px-6 py-2">
          <div className="text-[#8b95A1]">주문금액</div>
          <div>10,600원</div>
        </div>
        <div className="flex justify-between px-6 py-2">
          <div className="text-[#8b95A1]">배달요금</div>
          <div>2,000원</div>
        </div>
        <div className="flex justify-between px-6 py-4">
          <div>총 결제금액</div>
          <div className="font-semibold">12,600원</div>
        </div>
      </div>
      <div className="w-full fixed bottom-0 mb-4 flex flex-col justify-center items-center">
        <div className="mb-5 text-4 font-medium text-[#6b7684]">
          최소 주문금액 13,000원
        </div>
        <Button type="button" size="xl">
          12,600원 결제하기
        </Button>
      </div>
    </div>
  );
};

export default Cart;
