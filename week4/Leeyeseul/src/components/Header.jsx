import "../App.css";
import marketModel from "../model/marketModel";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <span className="header__location">{marketModel.location} ▼</span>
      </div>
      <div className="header__icons">
        <img src="/Search.svg" alt="검색" />
        <img src="/Menu.svg" alt="메뉴" />
        <img src="/Notification.svg" alt="알림" />
      </div>
    </header>
  );
};

export default Header;
