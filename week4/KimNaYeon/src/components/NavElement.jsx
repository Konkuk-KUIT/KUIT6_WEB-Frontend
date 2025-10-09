import "../App.css";

const NavElement = ({item}) => {
  return (
    <li key={item.name}>
      <a href="/" className="nav-element">
        <img src={item.iconSrc} alt={item.name} />
        {item.name}
      </a>
    </li>
  );
};

export default NavElement;