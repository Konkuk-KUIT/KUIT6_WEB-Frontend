import Header from "../../shared/Header";
import FoodItem from "../Store/components/FoodItem";
import { FOOD_ITEMS } from "../../modules/stores";
import OrderBar from "../../shared/OrderBar";
import Description from "./components/StoresDescription";

const Stores = () => {
  return (
    <div>
        <Header title="샐로리 한남점" showBack link="/store"/>
        <Description/>
        <h3 className="text-[#6B7684] text-[17px] px-[24px] pt-[26px] border-t border-[#E5E8EB]">샐러드</h3>
        <div>
            <img src="" alt="" />
            <div className="pb-[111px]">
                {FOOD_ITEMS.map((item, idx) => ( <FoodItem key={idx} {...item} />))}
            </div>
        </div>
        <footer>
            <OrderBar to="/cart"></OrderBar>
        </footer>
    </div>
  );
};

export default Stores;
