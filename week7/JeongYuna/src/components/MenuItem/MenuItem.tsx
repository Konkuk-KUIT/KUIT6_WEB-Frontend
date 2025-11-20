import Button from "../Button";
import useCartStore from "../../pages/Cart/useCartStore";

interface Menu {
  id: number,
  name: String,
  isBest: boolean,
  price: number,
  ingredients: String,
}

const MenuItem = ({ menu, handleChooseStore }: {menu: Menu, handleChooseStore:()=>void}) => {
  const addMenu = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => { 
    handleChooseStore();
    addMenu({...menu});
  };

  return (
    <div className="flex flex-row items-center gap-[1rem] p-[0.5rem]">
      <img src="https://placehold.co/54x54?text=\n" className="rounded-full m-[0.2rem]"/>
      <div className="flex flex-col justify-start items-start m-[0px] flex-1 text-left">
        <div className="flex flex-row gap-[0.5rem]"><h3 className="text-[17px] text-[#333D48] font-[600] font-pretendard p-[0px] m-[0px]">{menu?.name}</h3>{menu?.isBest? <div className="text-[17px] text-[#3182F6] font-[600] font-pretendard">BEST</div> : ""}</div>
        <span className="text-[13px] text-[#6B7684] font-[500] font-pretendard p-[0px] m-[0px]">{menu.price}원</span>
        <p className="text-[13px] text-[#6B7684] font-[500] font-pretendard p-[0px] m-[0px]">{menu.ingredients}</p>
      </div>
      <Button onClick={handleAddMenu} type="button" size="sm" className="shrink-0">
        담기
      </Button>
    </div>
  );
};

export default MenuItem;
export type { Menu };