// import React from "react";
import CategoryCard from "../../components/MenuItem/CategoryCard";
import foods from "../../models/foods";
import OrderBar from "../../components/OrderBar/OrderBar";

const Home = () => {
  return(
    <>
      <div className="pt-[25px] pb-[4px] pl-[24px] pr-[68px] flex flex-col gap-[13px] mt-[41px]">
        <div className="text-[26px] font-bold">오늘은 무엇을 먹을까요?</div>
        <div className="text-[17px] font-medium">한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt; </div>
      </div>
      <div className="grid grid-cols-3 gap-x-[9px] gap-y-[10px] mt-[70px] mx-[24px] mb-[180px]">
        {foods.map((food) => (
          <CategoryCard name={food.name} image={food.image}/>
        ))}
      </div>
      <OrderBar/>
    </>
  )
};

export default Home;
