import OrderBar from "../../components/OrderBar/OrderBar";
import StoreHeader from "../../components/StoreHeader/StoreHeader";
import MenuItem from "../../components/MenuItem/MenuItem";
import stores from "../../models/stores";
import { useParams } from "react-router-dom";

const Store = () => {
  const { storeId } = useParams<{ storeId: string }>();
   const store = stores.find((s) => s.id === Number(storeId)) ?? stores[0];
  
  return (
    <main className="w-[390px] h-[844px] bg-white mx-auto relative overflow-hidden">
      <div className="px-6 pt-6">
        <button
          onClick={() => window.history.back()}
          aria-label="이전 페이지로"
        >
          <img
            src="/src/assets/chevron-left.svg"
            alt="뒤로가기"
            className="w-6 h-6 mb-4"
          />
        </button>
      </div>

      <StoreHeader store={store} />

      <div className="px-6 mt-4 mb-2 text-[17px] text-[#6B7684] font-semibold">
        샐러드
      </div>

      <div className="mb-[120px]">
        {store.menus.map((menu) => (
          <MenuItem
            key={menu.id}
            id={menu.id}
            name={menu.name}
            price={menu.price}
            ingredients={menu.ingredients}
            isBest={menu.isBest}
            storeName={store.name}
            minDeliveryPrice={store.minDeliveryPrice}
            deliveryFee={store.deliveryFee}
          />
        ))}
      </div>

      <OrderBar />
    </main>
  );
};

export default Store;
