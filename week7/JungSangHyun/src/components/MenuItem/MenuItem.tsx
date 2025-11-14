import Button from "../Button";

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
  const handleAddMenu = () => {};

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
