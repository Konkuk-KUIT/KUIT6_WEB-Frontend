import "../App.css";
import NavElement from "./NavElement";

const BottomNav = ({ items }) => {
  return (
    <nav>
      <ul className="bottom-nav">
        {items.map(({ name, iconSrc }) => (
          <NavElement key={name} name={name} iconSrc={iconSrc} />
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;
