import "../App.css";
import { navModel } from "../model/navModel";

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      {navModel.map((item) => (
        <a href="/" key={item.name} className="nav-element">
          <img src={`/${item.iconsrc}`} alt={item.name} />
          <span>{item.name}</span>
        </a>
      ))}
    </nav>
  );
};

export default BottomNav;
