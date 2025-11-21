import Button from "../Button";
import useCartStore from "../../stores/useCartStore";

// /store/:storeId 페이지의 컴포넌트
interface Menu {
  name: string;
  price: number | string;
  ingredients: string;
}

interface MenuItemProps {
  menu: Menu;
}

const MenuItem = ({ menu }: MenuItemProps) => {
  const { addMenu } = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => {
    addMenu(menu);
  };

  // todo 담기 눌렀을때 담은 정보 alert
  return (
    <div>
      <h3>{menu.name}</h3>
      <span>{menu.price}</span>
      <p>{menu.ingredients}</p>
      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </div>
  );
};

export default MenuItem;
