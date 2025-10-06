import "../App.css";
import { navModel } from "../model/navModel";
import NavElement from "./NavElement";

const BottomNav = () => {
  return (
    <nav>
      <ul className="bottom-nav">
        {navModel.map((item) => (
          <NavElement item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;
