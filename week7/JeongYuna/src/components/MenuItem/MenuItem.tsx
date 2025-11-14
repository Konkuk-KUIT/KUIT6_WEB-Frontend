import Button from "../Button";

interface Menu {
  id: number;
  name: String;
  isBest: boolean;
  price: number | String;
  ingredients: String;

}

interface MenuItemProps {
  menu: Menu | undefined;
}

const MenuItem = ({ menu }: MenuItemProps) => {
  const handleAddMenu = () => {};

  return (
    <div className="flex flex-row items-center gap-[1rem] p-[0.5rem]">
      <img src="https://placehold.co/54x54?text=\n" className="rounded-full m-[0.2rem]"/>
      <div className="flex flex-col justify-start items-start m-[0px] flex-1 text-left">
        <div className="flex flex-row gap-[0.5rem]"><h3 className="text-[17px] text-[#333D48] font-[600] font-pretendard p-[0px] m-[0px]">{menu?.name}</h3>{menu?.isBest? <div>BEST</div> : ""}</div>
        <span className="text-[13px] text-[#6B7684] font-[500] font-pretendard p-[0px] m-[0px]">{menu?.price}원</span>
        <p className="text-[13px] text-[#6B7684] font-[500] font-pretendard p-[0px] m-[0px]">{menu?.ingredients}</p>
      </div>
      <Button onClick={handleAddMenu} type="button" size="sm" className="shrink-0">
        담기
      </Button>
    </div>
  );
};

export default MenuItem;
