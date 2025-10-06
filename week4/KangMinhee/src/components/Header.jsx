
import "../App.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <span className="location">군자동</span>
        <img src="/arrow.svg" alt="arrow" className="icon arrow" />
      </div>
      <div className="header-right">
        <img src="/search.svg" alt="search" className="icon" />
        <img src="/list.svg" alt="list" className="icon" />
        <img src="/bell.svg" alt="bell" className="icon" />
      </div>
    </header>
  );
};

export default Header;
