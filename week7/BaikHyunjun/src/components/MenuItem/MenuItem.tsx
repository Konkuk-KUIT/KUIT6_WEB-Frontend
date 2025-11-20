import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder';
import AddButton from '../AddButton/AddButton';
import './MenuItem.css';

interface Menu {
  name: string;
  price: number | string;
  ingredients: string;
  isBest?: boolean;
}

interface MenuItemProps {
  menu: Menu;
}

const MenuItem = ({ menu }: MenuItemProps) => {
  return (
    <div className="menu-item">
      <ImagePlaceholder shape="circle" size={80} />
      <div className="menu-content">
        <div className="menu-info">
          <div className="menu-name-row">
            <h3 className="menu-name">{menu.name}</h3>
            {menu.isBest && <span className="best-badge">BEST</span>}
          </div>
          <div className="menu-price">{typeof menu.price === 'number' ? menu.price.toLocaleString() : menu.price}원</div>
          <p className="menu-ingredients">{menu.ingredients}</p>
        </div>
        <AddButton />
      </div>
    </div>
  );
};

export default MenuItem;
