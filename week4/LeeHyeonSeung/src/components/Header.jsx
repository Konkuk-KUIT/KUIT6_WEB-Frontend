import "../App.css";

const Header = ({ location }) => {
  return (
    <header className="header">
      <button className="location">
        <span>{location}</span>
        <img src="/header/expand-arrow.svg" alt="드롭다운" />
      </button>
      <div className="header-icons">
        <button className="icon-button">
          <img src="/header/search.svg" alt="돋보기" />
        </button>
        <button className="icon-button">
          <img src="/header/menu.svg" alt="메뉴" />
        </button>
        <button className="icon-button">
          <img src="/header/notification.svg" alt="알림" />
        </button>
      </div>
    </header>
  );
};

export default Header;