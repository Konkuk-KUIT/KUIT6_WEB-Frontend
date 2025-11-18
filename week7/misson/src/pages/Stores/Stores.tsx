import { useNavigate, useParams } from "react-router-dom";
import left_chevron from "../../assets/left_chevron.svg";
import { stores } from "../../models/stores";
import OrderBar from "../../components/OrderBar/OrderBar";
import MenuItem from "../../components/MenuItem/MenuItem";

const Stores = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="mt-[10px] ml-[17px]">
        <img
          onClick={() => navigate("/store")}
          src={left_chevron}
          alt="뒤로가기"
        />
      </div>
      <div className="mb-36">
        {stores
          .filter((items) => items.id === Number(params.id))
          .map((item) => (
            <div>
              <div>
                <div className="font-['Pretendard'] mt-[26px] ml-[24px] color-[#191F28] text-[26px] font-bold">
                  {item.name}
                </div>
                <div className="flex gap-[9px] pt-[6px] pb-3 pl-[46px]">
                  <div className="font-['Pretendard'] text-[17px] font-semibold">
                    {item.rate}
                  </div>
                  <div className="font-['Pretendard'] text-[16px] font-medium">
                    리뷰{item.reviewCnt}
                  </div>
                </div>
                <div className="border-b-1 border-[#E5E8EB]">
                  <div className="font-['Pretendard'] pt-[10px] pl-6 text-[15px] font-medium">
                    결제방법 토스결제만 현장결제 안됨
                  </div>
                  <div className="font-['Pretendard'] pt-[10px] pl-6 text-[15px] font-medium">
                    최소주문 {item.minDeliveryPrice}원
                  </div>
                  <div className="font-['Pretendard'] pb-[14px] pt-[10px] pl-6 text-[15px] font-medium">
                    배달시간 약 {item.minDeliveryTime}-{item.maxDeliveryTime}분
                  </div>
                </div>
              </div>
              <div>
                <div className="pt-[26px] pl-6 pb-[11px] text-[17px] font-semibold text-[#6B7684]">
                  샐러드
                </div>
                {item.menus.map((items) => (
                  <MenuItem
                    name={items.name}
                    price={items.price}
                    ingredients={items.ingredients}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
      <OrderBar />
    </div>
  );
};

export default Stores;
