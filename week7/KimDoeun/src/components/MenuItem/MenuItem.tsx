import Button from "../Button";

interface Menu {
  name: string;
  price: number | string;
  ingredients: string;
  isBest: boolean;
}

interface MenuItemProps {
  menu: Menu;
}

const MenuItem = ({ menu }: MenuItemProps) => {
  const handleAddMenu = () => { };

  return (
    <div className="flex flex-row items-center justify-left mt-[16px] mb-[16px]">
      <img src="https://placehold.co/54x54" alt="메뉴이미지" className="rounded-[27px] ml-[24px] mr-[16px]" />
      <div className="flex flex-col gap-[5px] mr-[30px] w-[210px]">
        <h3 className="text-[17px] text-[#333D4B] font-[600]">
          {menu.name}
          {menu.isBest && <span className="text-[17px] font-[600] text-[#3182F6] ml-[6px]">BEST</span>}
        </h3>
        <span className="text-[13px] text-[#6B7684]">{menu.price.toLocaleString()}</span>
        <p className="text-[13px] text-[#6B7684]">{menu.ingredients}</p>
      </div>
      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </div>
  );
};

export default MenuItem;
