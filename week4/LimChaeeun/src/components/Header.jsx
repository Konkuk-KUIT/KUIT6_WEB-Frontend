import "./Header.css";

const Header = ({ location }) => {
  return (
    <header>
      <div className="header-inner">
        <div className="header-inner__title">
          {location}
          <button>
            <img src="header/expand-arrow.svg" alt="expand-arrow" />
          </button>
        </div>
        <div className="header-inner__icons">
          <button>
            <img src="header/search.svg" alt="search" />
          </button>
          <button>
            <img src="header/menu.svg" alt="menu" />
          </button>
          <button>
            <img src="header/notification.svg" alt="notification" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
