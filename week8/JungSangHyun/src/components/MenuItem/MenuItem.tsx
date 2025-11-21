import useCartStore from "../../stores/useCartStore";
import Button from "../Button";

// /store/:storeId 페이지의 컴포넌트
interface Menu {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  isBest?: boolean;
}

interface MenuItemProps {
  menu: Menu;
  storeId: number;
}

const MenuItem = ({ menu, storeId }: MenuItemProps) => {
  const addMenu = useCartStore((state) => state.addMenu);
  
  const handleAddMenu = () => {
    addMenu(menu, storeId);
  };

  return (
    <div className="flex items-start justify-between py-5 border-b border-gray-100 hover:bg-gray-100">
      <div className="size-16 bg-gray-200 rounded-full"></div>

      <div className="flex-1 ml-4">
        <div className="flex items-center gap-1">
          <span className="text-[17px] font-semibold text-[#333D4B]">
            {menu.name}
          </span>

          {menu.isBest && (
            <span className="text-[14px] font-semibold text-[#3182F6]">
              BEST
            </span>
          )}
        </div>

        <p className="text-[15px] font-medium text-[#333D4B] mt-1">
          {menu.price.toLocaleString()}원
        </p>

        <p className="text-[14px] text-[#6B7684] mt-1 leading-5">
          {menu.ingredients}
        </p>
      </div>

      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </div>
  );
};

export default MenuItem;
