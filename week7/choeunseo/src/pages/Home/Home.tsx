import FoodCard from "../../components/FoodCard/FoodCard";
import { foodCategories } from "../../models/stores";
import OrderBar from "../../components/OrderBar/OrderBar";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="pt-[25px] pl-[24px] pb-1 mt-[41px] mb-[74px]">
        <div className="color-[#191F28] text-[26px] font-bold">
          오늘은 무엇을 먹을까요?
        </div>
        <div className="color-[#333D4B] text-[17px] font-medium">
          한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;
        </div>
      </div>
      <div
        onClick={() => navigate("/store")}
        className="grid grid-cols-3 gap-[9px] px-6"
      >
        {foodCategories.map((item) => (
          <FoodCard foodSrc={item.image} foodName={item.name} />
        ))}
      </div>
      <OrderBar />
    </>
  );
};

export default Home;
