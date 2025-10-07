import marketModel from "../model/marketModel";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <span>{marketModel.location}</span>
        <img src="./dropdown.svg" alt="드롭다운 버튼" />
      </div>
      <div className="header-icons">
        <button>
          <img src="./search.svg" alt="검색 버튼" />
        </button>
        <button>
          <img src="./menu.svg" alt="메뉴 버튼" />
        </button>
        <button>
          <img src="./alarm.svg" alt="알림 버튼" />
        </button>
      </div>
    </div>
  );
};

export default Header;
