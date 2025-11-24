import { useNavigate } from "react-router-dom";
import OrderBar from "../../components/OrderBar/OrderBar";

const Home = () => {
  const navigate = useNavigate();

  interface Food{
    name: string;
    img: string;
  }

  const foods :Food[] = [
    { name: "피자", img: "/pizza.svg" }, { name: "샐러드", img: "/salad.svg" }, { name: "햄버거", img: "/hamburger.svg" },
    { name: "한식", img: "/koreanFood.svg" }, { name: "분식", img: "/schoolFood.svg" }, { name: "치킨", img: "/chicken.svg" },
    { name: "초밥", img: "/sushi.svg" }, { name: "샌드위치", img: "/sandwich.svg" }, { name: "파스타", img: "/pasta.svg" },
    { name: "디저트", img: "/donut.svg" }, { name: "커피", img: "/coffee.svg" }
  ];

  // function
  const openMoreFoods = () => {

  }

  return (
    <div className="mx-auto w-[390px] h-[844px] flex flex-col justify-between bg-white">
      <section className="flex flex-col gap-[13px] pt-[25px]  pr-[68px] pb-[70px]">
          <h3 className="text-[#191F28] font-pretendard text-[26px] font-bold leading-normal">
            오늘은 무엇을 먹을까요?
          </h3>
        
          <div className="flex gap-1">
            <span className="text-[#333D4B] font-pretendard text-[17px] font-medium leading-normal">
            한남중앙로 40길 (한남 빌리지)(으)로 배달
            </span>
          
            <button className="cursor-pointer text-[#333D4B] font-pretendard text-[17px] font-medium leading-normal">
                &gt; 
            </button>
          </div>
          
      </section>

      <section className="pb-50">
        <ul className="grid grid-cols-3 gap-[9px] justify-center">
         
          {foods.map((food) => (
            <li
              key={food.name}
              className="flex w-[108px] pt-[12px] pb-[13px] flex-col  justify-center
                        items-center gap-[4px] rounded-[8px] bg-[#FAFAFB] cursor-pointer hover:bg-gray-200"
              onClick={() => {
                if (food.name === "샐러드") {
                  navigate("/store");
                }
              }}
            >
              <img src={food.img} alt={`${food.name} 이미지`} className="w-7 h-7" />
              <span className="mt-2 text-[14px] font-semibold text-[#333D4B]">{food.name}</span>
            </li>
          ))}

          
          <li
            onClick={openMoreFoods}
            className="flex w-[108px] pt-[12px] pb-[13px] flex-col  justify-center
                        items-center gap-[4px] rounded-[8px] bg-[#FAFAFB] cursor-pointer hover:bg-gray-200"
          >
            <img src="/threeDots.svg" className="w-7 h-7" />
            <span className="mt-2 text-[14px] font-semibold text-[#333D4B]">더보기</span>
          </li>
        </ul>
      </section>

      <OrderBar></OrderBar>
    </div>
  );
};

export default Home;
