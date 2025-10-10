import "./Header.css";

export const Header = ({location}) => {
  return (
    <header className="header">
      <div className="header-title">
        {location}
        <button><img src="header/expandArrow.svg" alt="expandArrow" /></button>
      </div>
      <div className="header-menu">
        <button><img src="header/search.svg" alt="search" /></button>
        <button><img src="header/menu.svg" alt="menu" /></button>
        <button><img src="header/notification.svg" alt="notification" /></button>
      </div>
    </header>
  )
};