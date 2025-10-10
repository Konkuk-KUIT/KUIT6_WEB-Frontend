import { navModel } from "../model/navModel.js";

const NavElement = ({ item }) => {
  return (
    <li>
      <a href="/" className="nav-element">
        <img src={item.iconSrc} alt={item.name} />
        {item.name}
      </a>
    </li>
  );
};

const BottomNav = () => {
  return (
    <nav>
      <ul className="bottom-nav">
        {navModel.map((item) => (
          <NavElement key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;
