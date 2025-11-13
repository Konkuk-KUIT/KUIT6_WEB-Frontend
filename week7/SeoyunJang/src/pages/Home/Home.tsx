import { Link } from "react-router-dom";
import FoodCard from "./components/FoodCard";
import { HOME_MENUS } from "../../modules/stores";
import OrderBar from "../../shared/OrderBar";
import Header from "../../shared/Header";

const Home = () => {
  return (
    <div>
        <Header 
            title="오늘은 무엇을 먹을까요?" 
            subtitle="한남중앙로 40길 (한남 빌리지)(으)로 배달 >"
            style="flex flex-col gap-[13px]"
        >
        </Header>
        <div className="flex flex-col items-center justify-center pt-[70px]">
            <Link to="/store">
                <div className="grid grid-cols-3 gap-[9px] mb-6">
                    {HOME_MENUS.map((menu) => (
                    <FoodCard key={menu.name} foodName={menu.name} imgSrc={menu.imgSrc} />
                    ))}
                </div>
            </Link>
        </div>
        <footer className="overflow-auto">
            <OrderBar/>
        </footer>
    </div>
  );
};

export default Home;
