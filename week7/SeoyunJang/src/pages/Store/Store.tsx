import Header from "../../shared/Header";
import StoreItem from "./components/StoreItem";
import { STORE_ITEMS } from "../../modules/stores";
import OrderBar from "../../shared/OrderBar";

const Store = () => {
  return (
    <div>
        <Header title="샐러드" showBack link="/"/>
        <div>
            <img src="" alt="" />
            <div className="pb-[111px]">
                {STORE_ITEMS.map((item, idx) => ( <StoreItem key={idx} {...item} />))}
            </div>
        </div>
        <footer>
            <OrderBar></OrderBar>
        </footer>
    </div>
  );
};

export default Store;
