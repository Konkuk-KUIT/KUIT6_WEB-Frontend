import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder';
import AddButton from '../AddButton/AddButton';
import './MenuItem.css';

interface Menu {
  id: number;
  name: string;
  price: number | string;
  ingredients: string;
  isBest?: boolean;
}

interface Store {
  id: number;
  name: string;
  deliveryFee: number;
  minDeliveryPrice: number;
}

interface MenuItemProps {
  menu: Menu;
  store: Store;
}

const MenuItem = ({ menu, store }: MenuItemProps) => {
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
        <AddButton menu={menu} store={store} />
      </div>
    </div>
  );
};

export default MenuItem;
