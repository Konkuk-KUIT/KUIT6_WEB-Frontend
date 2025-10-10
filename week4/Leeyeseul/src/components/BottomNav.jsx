import "../App.css";
import { navModel } from "../model/navModel";

const BottomNav = () => {
  return (
    <>
      <nav className="bottom-nav">
        {navModel.map(({ name, iconsrc }) => ( 
          <a href="/" key={name} className="nav-element">
            <img src={`/${iconsrc}`} alt={name} />
            <span>{name}</span>
          </a>
        ))}
      </nav>

      <button className="plus-btn">
        <img src="/Plus Math.svg" alt="추가" />
      </button>
    </>
  );
};

export default BottomNav;