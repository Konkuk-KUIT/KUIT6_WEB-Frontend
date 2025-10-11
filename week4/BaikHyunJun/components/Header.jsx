import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="location">
          <span className="location-text">군자동</span>
          <img src="/Expand Arrow.png" alt="드롭다운" className="dropdown-arrow" />
        </div>
        <div className="header-icons">
          <img src="/Search.png" alt="검색" className="header-icon" />
          <img src="/Menu.png" alt="메뉴" className="header-icon" />
          <img src="/Notification.png" alt="알림" className="header-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
