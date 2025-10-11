import "./BottomNav.css";

export const BottomNav = ({model}) => {
  return (
    <nav className="bottom-bar">
      <ul className="bottom-nav">
        {model.map(item => (
          <li key={item.name}>
            <a href="/" className="nav-element">
              <img src={item.iconSrc} alt={item.name} />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
};