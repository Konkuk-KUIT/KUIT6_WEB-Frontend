import { useParams } from "react-router-dom";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreHeader from "../../components/StoreHeader/StoreHeader";
import MenuItem from "../../components/MenuItem/MenuItem";
import stores from "../../models/stores";

const Store = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const store = stores.find((s) => s.id === Number(storeId));

  if (!store) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600">가게를 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <>
      <div className="px-6 pt-6">
        <button onClick={() => window.history.back()} className="cursor-pointer">
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
