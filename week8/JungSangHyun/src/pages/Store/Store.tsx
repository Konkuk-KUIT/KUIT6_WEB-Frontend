import { useNavigate, useParams } from "react-router-dom";
import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar.tsx";
import useStoreStore from "../../stores/useStoreStore";

const Store = () => {
  const { storeId } = useParams();
  const store = useStoreStore((state) => state.getStore(Number(storeId)));
  

  const navigate = useNavigate();

  if (!store) return <div>가게 정보를 찾을 수 없습니다.</div>;

  return (
    <div className="w-[390px] h-[844px] mx-auto flex flex-col bg-white">

      <div className="px-5 pt-10 pb-4">
        <button className="text-[24px] cursor-pointer hover:bg-gray-100" onClick={() => navigate('/store')}>‹</button>
        <h2 className="text-[28px] font-bold mt-3">{store.name}</h2>

        <div className="flex items-center gap-2 mt-2 text-[#6B7684]">
          <img src="/star.svg" alt="star" className="w-4 h-4" />
          <span className="text-[15px] font-semibold text-[#333D4B]">
            {store.rate}
          </span>
          <span className="text-[15px]">
            리뷰{store.reviewCnt.toLocaleString()}
          </span>
        </div>

        <div className="flex flex-col gap-1 mt-4 text-[15px] text-[#6B7684] leading-[22px]">
          <p>결제방법  토스결제만 현장결제 안됨</p>
          <p>
            최소주문{" "}
            <span className="font-semibold text-[#333D4B]">
              {store.minDeliveryPrice.toLocaleString()}원
            </span>
          </p>
          <p>
            배달시간  약 {store.minDeliveryTime}~{store.maxDeliveryTime}분
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-[120px]">
        <h3 className="text-[#6B7684] text-[18px] font-semibold mb-4">
          샐러드
        </h3>

        {store.menus.map((menu) => (
          <MenuItem key={menu.id} menu={menu} storeId={store.id} />
        ))}
      </div>
      <OrderBar></OrderBar>
    </div>
  );
};

export default Store;
