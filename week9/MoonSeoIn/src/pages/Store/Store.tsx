import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreHeader from "../../components/StoreHeader/StoreHeader";
import MenuItem from "../../components/MenuItem/MenuItem";
import { getStoreById, type Store as StoreType } from "../../api/storeApi";

const Store = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const [store, setStore] = useState<StoreType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStore = async () => {
      if (!storeId) {
        setError("잘못된 접근입니다.");
        return;
      }

      try {
        const data = await getStoreById(Number(storeId));
        setStore(data);
      } catch {
        setError("가게 정보를 불러올 수 없습니다.");
      }
    };

    fetchStore();
  }, [storeId]);

  if (error || !store) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600">{error || "가게를 찾을 수 없습니다."}</p>
        <button onClick={() => navigate("/")} className="px-4 py-2 text-white bg-blue-500 rounded-lg">
          홈으로 가기
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="px-6 pt-6">
        <button onClick={() => navigate("/stores")} className="cursor-pointer">
          <img src="/src/assets/chevron-left.svg" className="w-6 h-6 mb-4" />
        </button>
      </div>

      <StoreHeader store={store} />

      <div className="px-6 mt-4 mb-2 text-[17px] text-[#6B7684] font-semibold">샐러드</div>

      <div className="mb-[120px]">
        {store.menus.map((menu) => (
          <MenuItem
            key={menu.id}
            menuId={menu.id}
            name={menu.name}
            price={menu.price}
            ingredients={menu.ingredients}
            isBest={menu.isBest}
            store={{
              id: store.id,
              name: store.name,
              deliveryFee: store.deliveryFee,
              minDeliveryPrice: store.minDeliveryPrice,
            }}
          />
        ))}
      </div>

      <OrderBar />
    </>
  );
};

export default Store;
