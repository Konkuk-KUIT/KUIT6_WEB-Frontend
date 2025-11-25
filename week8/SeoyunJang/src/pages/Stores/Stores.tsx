import Header from "../../shared/Header";
import FoodItem from "./components/FoodItem";
import { FOOD_ITEMS, STORES } from "../../modules/stores";
import OrderBar from "../../shared/OrderBar";
import Description from "./components/StoresDescription";
import { useParams } from "react-router-dom";

const Stores = () => {
  const { id } = useParams();
  const storeId = Number(id);
  const store = STORES.find((s) => s.id === storeId);
  if (!store) return <div>가게를 찾을 수 없어요</div>;

  return (
    <div>
        <Header title={store.name} showBack link="/store"/>
        <Description
          rating={store.rating}
          reviewCount={store.reviewCount}
          payment={store.payment}
          minOrder={store.minOrder}
          deliveryTime={store.deliveryTime}
        />

        <h3 className="text-[#6B7684] text-[17px] px-[24px] pt-[26px] border-t border-[#E5E8EB]">샐러드</h3>
        <div>
            <img src="" alt="" />
            <div className="pb-[111px]">
                {FOOD_ITEMS.map((item, idx) => ( <FoodItem key={idx} {...item} storeName={store.name} storeId={store.id}/>))}
            </div>
        </div>
        <footer>
            <OrderBar to="/cart"></OrderBar>
        </footer>
    </div>
  );
};

export default Stores;
