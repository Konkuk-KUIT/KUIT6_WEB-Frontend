export const NavElement = ({ item }) => {
  return (
    <li key={item.name}>
      <a href="/" className="nav-element">
        <img src={item.iconSrc} alt={item.name} />
        <span>{item.name}</span>
      </a>
    </li>
  );
};