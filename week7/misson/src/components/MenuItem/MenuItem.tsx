import Button from "../Button";
import useCartStore from "../../pages/Store/useCartStore";

interface Menu {
  name: string;
  price: number;
  ingredients: string;
}

const MenuItem = ({ name, price, ingredients }: Menu) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const handleAddMenu = () => {
    addMenu({ name, price, ingredients })
  };

  return (
    <div className="flex justify-around items-center my-4">
      <div className="w-16 h-16 bg-[#ECECEC] rounded-full"></div>
      <div className="w-[205px]">
        <h3 className="text-[17px] font-semibold">{name}</h3>
        <span className="text-[13px] font-medium">{price}원</span>
        <p className="text-[13px] font-medium">{ingredients}</p>
      </div>
      <div onClick={handleAddMenu}>
        <Button type="button" size="sm">
          담기
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
