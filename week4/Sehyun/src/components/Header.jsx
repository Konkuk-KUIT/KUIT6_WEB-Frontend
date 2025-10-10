export const Header = ({ location }) => {
  return (
    <header className="header">
      <div className="location-selector">
        <h3>{location}</h3>
        <span className="arrow-down">▼</span>
      </div>
      <div className="header-icons">
        <img src="/search.svg" alt="검색" />
        <img src="/menu.svg" alt="메뉴" />
        <img src="/bell.svg" alt="알림" />
      </div>
    </header>
  );
};