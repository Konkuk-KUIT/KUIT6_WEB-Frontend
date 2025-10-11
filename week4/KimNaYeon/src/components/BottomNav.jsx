import NavElement from "./NavElement";
import "../App.css";

const BottomNav = ({icon}) => {
  return (
    <nav>
      <ul className="bottom-nav">
        {icon.map(({name, iconSrc}) => (
          <NavElement key={name} name={name} iconSrc={iconSrc}/>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;