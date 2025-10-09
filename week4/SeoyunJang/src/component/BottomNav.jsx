export const BottomNav = ({navModel}) => (
  <nav>
    <ul className="bottom-nav">
      {navModel.map((item) => (
        <li key={item.name}>
          <a href="/" className="nav-element">
            <img src={item.iconSrc} alt={item.name} />
            <span>{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);