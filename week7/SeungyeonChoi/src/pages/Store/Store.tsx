import OrderBar from "../../components/OrderBar/OrderBar";
import StoreHeader from "../../components/StoreHeader/StoreHeader";
import MenuItem from "../../components/MenuItem/MenuItem";
import stores from "../../models/stores";

const Store = () => {
  const store = stores[0];

  return (
    <>
    <main className="w-[390px] h-[844px] bg-white mx-auto relative overflow-hidden">
      <div className="px-6 pt-6">
        <button onClick={() => window.history.back()}>
          <img 
          src="/src/assets/chevron-left.svg" 
          alt="뒤로가기 아이콘"
          className="w-6 h-6 mb-4" />
        </button>
      </div>

      <StoreHeader />
      <div className="px-6 mt-4 mb-2 text-[17px] text-[#6B7684] font-semibold">샐러드</div>
      <div className="mb-[120px]">
        {store.menus.map((menu) => (
          <MenuItem key={menu.id} name={menu.name} price={menu.price} ingredients={menu.ingredients} isBest={menu.isBest} />
        ))}
      </div>

      <OrderBar />
    </main>
    </>
  );
};

export default Store;
