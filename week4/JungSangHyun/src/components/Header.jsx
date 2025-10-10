import { marketModel } from "../model/marketModel.js";

const Header = () => {
  return (
    <header className="header">
      <div className="header__location">
        <p className="location">{marketModel.location}</p>
        <button className="locaton-btn">
          <img src="/icon/expand-arrow.svg" alt="expand" />
        </button>
      </div>

      <div className="header__btn">
        <button className="search-btn">
          <img src="/icon/search.svg" alt="search" />
        </button>

        <button className="menu-btn">
          <img src="/icon/menu.svg" alt="menu" />
        </button>

        <button className="notification-btn">
          <img src="/icon/notification.svg" alt="notification" />
        </button>
      </div>
    </header>
  );
};

export default Header;
