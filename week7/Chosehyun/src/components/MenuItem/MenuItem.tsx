import Button from "../Button";
import useCartStore from "../../pages/Store/useCartStore";

interface Menu {
  name: string;
  price: number;
  ingredients: string;
}

interface MenuItemProps {
  menu: Menu;
}

const MenuItem: React.FC<MenuItemProps> = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const handleAddMenu = () => {
  addMenu(menu);
  };

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
