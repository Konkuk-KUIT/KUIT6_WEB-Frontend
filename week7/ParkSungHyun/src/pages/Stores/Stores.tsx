import { useNavigate, useParams } from "react-router-dom";
import left_chevron from "../../assets/left_chevron.svg";
import OrderBar from "../../components/OrderBar/OrderBar";
import MenuItem from "../../components/MenuItem/MenuItem";
import useStoreStore from "../Store/useStoreStore";

const Stores = () => {
  const params = useParams();
  const navigate = useNavigate();
  const storeId = Number(params.id);
  const { getStoreById } = useStoreStore();
  const store = getStoreById(storeId);

  if (!store) {
    return (
      <div className="p-6">
        <div className="text-lg font-semibold">가게 정보를 찾을 수 없습니다.</div>
        <button
          type="button"
          className="mt-4 underline text-[#3182F6]"
          onClick={() => navigate("/stores")}
        >
          가게 목록으로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mt-[10px] ml-[17px]">
        <img onClick={() => navigate("/stores")} src={left_chevron} alt="뒤로가기" />
      </div>
      <div className="mb-36">
        <div>
          <div className="font-['Pretendard'] mt-[26px] ml-[24px] color-[#191F28] text-[26px] font-bold">
            {store.name}
          </div>
          <div className="flex gap-[9px] pt-[6px] pb-3 pl-[46px]">
            <div className="font-['Pretendard'] text-[17px] font-semibold">
              {store.rate.toFixed(1)}
            </div>
            <div className="font-['Pretendard'] text-[16px] font-medium">
              리뷰 {store.reviewCnt.toLocaleString()}개
            </div>
          </div>
          <div className="border-b-1 border-[#E5E8EB]">
            <div className="font-['Pretendard'] pt-[10px] pl-6 text-[15px] font-medium">
              결제방법 토스결제만 현장결제 안됨
            </div>
            <div className="font-['Pretendard'] pt-[10px] pl-6 text-[15px] font-medium">
              최소주문 {store.minDeliveryPrice.toLocaleString()}원
            </div>
            <div className="font-['Pretendard'] pb-[14px] pt-[10px] pl-6 text-[15px] font-medium">
              배달시간 약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
            </div>
          </div>
        </div>
        <div>
          <div className="pt-[26px] pl-6 pb-[11px] text-[17px] font-semibold text-[#6B7684]">
            샐러드
          </div>
          {store.menus.map((menu) => (
            <MenuItem key={menu.id} menu={menu} store={store} />
          ))}
        </div>
      </div>
      <OrderBar />
    </div>
  );
};

export default Stores;

