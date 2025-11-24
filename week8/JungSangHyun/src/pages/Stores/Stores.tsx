import { Link, useNavigate } from "react-router-dom";
import OrderBar from "../../components/OrderBar/OrderBar.tsx";
import useStoreStore from "../../stores/useStoreStore";

const Stores = () => {
  const stores = useStoreStore((state) => state.stores);

  const navigate = useNavigate();

  return (
    <div className="w-[390px] h-[844px] mx-auto flex flex-col bg-white">
      
      <div className="px-5 pt-10 pb-4">
        <button className="text-[24px] cursor-pointer hover:bg-gray-100" onClick={() => navigate('/')}>‹</button>
        <h2 className="text-[32px] font-bold mt-4">샐러드</h2>
      </div>

      <section className="flex-1 overflow-y-auto px-5 pb-5">
        {stores.map((store, index) => (
          <Link key={store.id} to = {`/store/${store.id}`}>
            <article className="flex gap-4 py-4 border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
              
              <div className="size-16 bg-gray-200 rounded-md"></div>

              <div>
                <div className="flex flex-col">
                  <span className="text-[15px] text-[#6B7684]">{index + 1}위</span>
                  <span className="text-[18px] font-semibold text-[#333D4B]">
                    {store.name}
                  </span>
                </div>

                <div className="flex items-center gap-1 mt-1 text-[#6B7684] text-[14px]">
                  <img src="star.svg"></img>
                  {store.rate}
                  <span>
                    ({store.reviewCnt.toLocaleString()})
                  </span>
                </div>

                <div className="text-[14px] text-[#6B7684] mt-1">
                  {store.minDeliveryTime}분~{store.maxDeliveryTime}분 · 배달비{" "}
                  {store.deliveryFee.toLocaleString()}원
                </div>
              </div>

            </article>
          </Link>
        ))}
      </section>
      <OrderBar />
    </div>
  );
};

export default Stores;
