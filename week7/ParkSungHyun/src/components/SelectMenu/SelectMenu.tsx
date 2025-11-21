import right_chevron from "../../assets/right_chevron.svg";

type SelectMenuProps = {
  name: string;
  price: number;
  description?: string;
  quantity: number;
};

const SelectMenu = ({ name, price, description, quantity }: SelectMenuProps) => {
  return (
    <div className="w-full h-[116px] flex justify-between pr-[20px]">
      <div className="w-[54px] h-[54px] bg-[#ECECEC] rounded-[8px] mt-4 ml-6"></div>
      <div className="mt-4 ml-[17px]">
        <div className="font-['Pretendard'] text-[#333D4B] font-semibold text-[17px]">
          {name}
        </div>
        <div className="font-['Pretendard'] text-[#6B7684] font-medium text-[13px]">
          {description || "선택된 옵션이 없습니다."}
        </div>
        <div className="font-['Pretendard'] text-[#6B7684] font-medium text-[13px]">
          {price.toLocaleString()}원
        </div>
      </div>
      <div className="flex items-center gap-[14px]">
        <div className="text-[#6B7684] font-medium text-[15px] font-['Pretendard']">
          {quantity}개
        </div>
        <div>
          <img src={right_chevron} alt="이동" />
        </div>
      </div>
    </div>
  );
};

export default SelectMenu;

