import stores from "../../models/stores";
import StoreListItem from "../../components/StoreListItem/StoreListItem";
import OrderBar from "../../components/OrderBar/OrderBar";

export default function Stores() {
  return (
    <main className="w-[390px] h-[844px] bg-white mx-auto relative overflow-hidden">
      <div className="px-6 pt-6">
        <button onClick={() => window.history.back()}>
          <img
            src="/src/assets/chevron-left.svg"
            alt="뒤로가기 아이콘"
            className="w-6 h-6 mb-4"
          />
        </button>
        <h2 className="text-[26px] font-bold mb-3">샐러드</h2>

        {stores.map((store, index) => (
          <StoreListItem key={store.id} ranking={index + 1} store={store} />
        ))}
      </div>
      <OrderBar />
    </main>
  );
}
