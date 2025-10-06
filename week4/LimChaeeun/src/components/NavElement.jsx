const NavElement = ({ item }) => {
  return (
    <li key={item.name}>
      <a href="/" className="nav-item">
        <img src={item.iconSrc} alt={item.name} />
        {item.name}
      </a>
    </li>
  );
};

export default NavElement;
