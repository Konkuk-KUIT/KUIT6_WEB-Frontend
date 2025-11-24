// src/pages/Store/Stores.tsx
import { useNavigate, useParams } from "react-router-dom";
import left_chevron from "../../assets/left_chevron.svg";
import { stores } from "../../models/stores";
import OrderBar from "../../components/OrderBar/OrderBar";
import MenuItem from "../../components/MenuItem/MenuItem";

const Stores = () => {
  const params = useParams();
  const navigate = useNavigate();
  const storeId = Number(params.id);

  const target = stores.find((s) => s.id === storeId);

  if (!target) {
    return (
      <div>
        <div className="mt-[10px] ml-[17px]">
          <img onClick={() => navigate("/store")} src={left_chevron} alt="뒤로가기" />
        </div>
        <div className="p-6">가게를 찾을 수 없습니다.</div>
      </div>
    );
  }

  return (
    <div>
      <div className="mt-[10px] ml-[17px]">
        <img onClick={() => navigate("/store")} src={left_chevron} alt="뒤로가기" />
      </div>

      <div className="mb-36">
        <div>
          <div className="font-['Pretendard'] mt-[26px] ml-[24px] color-[#191F28] text-[26px] font-bold">
            {target.name}
          </div>
          {/* ... 생략된 가게 정보 ... */}
        </div>

        <div>
          <div className="pt-[26px] pl-6 pb-[11px] text-[17px] font-semibold text-[#6B7684]">
            샐러드
          </div>
          {target.menus.map((menu) => (
            <div key={menu.id ?? `${menu.name}-${menu.price}`}>
              <MenuItem
                id={menu.id}
                name={menu.name}
                price={menu.price}
                ingredients={menu.ingredients}
                // 여기서 가게정보를 전달
                storeId={target.id}
                storeName={target.name}
                deliveryFee={target.deliveryFee}
                minOrderPrice={target.minDeliveryPrice}
              />
            </div>
          ))}
        </div>
      </div>

      <OrderBar />
    </div>
  );
};

export default Stores;
