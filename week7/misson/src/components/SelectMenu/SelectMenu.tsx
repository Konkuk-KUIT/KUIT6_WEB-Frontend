import right_chevron from "../../assets/right_chevron.svg";

type storeDataProp = {
  name: string;
  price: number;
};

const SelectMenu = ({ name, price }: storeDataProp) => {
  return (
    <div className="w-full h-[116px] flex justify-between pr-5">
      <div className="w-[54px] h-[54px] bg-[#ECECEC] rounded-lg mt-4 ml-6"></div>
      <div className="mt-4 ml-[17px]">
        <div className="font-['Pretendard'] text-[#333D4B] font-semiBold text-[17px]">
          {name}
        </div>
        <div className="font-['Pretendard'] text-[#6B7684] font-medium text-[13px]">
          추천소스, 채소볼, 베이컨추가, 시저드레싱 추가
        </div>
        <div className="font-['Pretendard'] text-[#6B7684] font-medium text-[13px]">
          {price}원
        </div>
      </div>
      <div className="flex items-center gap-3.5">
        <div className="text-[#6B7684] font-medium text-[15px] font-['Pretendard']">
          1개
        </div>
        <div>
          <img src={right_chevron} alt="이동" />
        </div>
      </div>
    </div>
  );
};

export default SelectMenu;
