import "../App.css";

const NavElement = ({ name, iconSrc }) => {
  return (
    <li>
      <a href="/" className="nav-element">
        <img src={iconSrc} alt={name} />
        {name}
      </a>
    </li>
  );
};

export default NavElement;
