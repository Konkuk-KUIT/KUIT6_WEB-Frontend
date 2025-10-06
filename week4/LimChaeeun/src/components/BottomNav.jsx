import NavElement from "./NavElement";
import navModel from "../model/navModel";
import "./BottomNav.css";

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
