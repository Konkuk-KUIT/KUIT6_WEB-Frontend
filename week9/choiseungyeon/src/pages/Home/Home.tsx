import FoodCard from "../../components/FoodCard/FoodCard";
import OrderBar from "../../components/OrderBar/OrderBar";

const Home = () => {
  return (
    <main className="w-[390px] h-[844px] bg-white mx-auto relative overflow-hidden">
      <div className="pt-[25px] pl-[24px] pb-1 mt-[41px] mb-[74px]">
        <div className="text-[#191F28] text-[26px] font-bold font-['Pretendard']">
          오늘은 무엇을 먹을까요?
        </div>
        <div className="text-[#333D4B] text-[17px] font-medium font-['Pretendard']">
          한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;
        </div>
      </div>
      <FoodCard />
      <OrderBar />
    </main>
  );
};

export default Home;
