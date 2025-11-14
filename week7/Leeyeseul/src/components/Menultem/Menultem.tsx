import Button from "../Button";

interface Menu {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  isBest?: boolean;
}

interface MenuItemProps {
  menu: Menu;
}

const MenuItem = ({ menu }: MenuItemProps) => {
  return (
    <div className="menu-item">
      <div className="menu-item__info">
        <div className="menu-item__title-row">
          <span className="menu-item__name">{menu.name}</span>
          {menu.isBest && <span className="menu-item__badge">BEST</span>}
        </div>

        <div className="menu-item__ingredients">{menu.ingredients}</div>

        <div className="menu-item__price">{menu.price.toLocaleString()}원</div>
      </div>

      <Button size="sm">담기</Button>
    </div>
  );
};

export default MenuItem;
