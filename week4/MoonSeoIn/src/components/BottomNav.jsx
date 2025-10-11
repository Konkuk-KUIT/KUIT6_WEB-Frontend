const BottomNav = ({ navItems }) => {
  return (
    <nav>
      <ul className="bottom-nav">
        {navItems.map((item) => {
          const { name, img } = item;

          return (
            <li key={name}>
              <a href="/" className="nav-element">
                <img src={img} alt={name} />
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
