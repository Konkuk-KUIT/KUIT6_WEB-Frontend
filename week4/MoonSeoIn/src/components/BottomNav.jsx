import navModel from "../model/navModel";

const BottomNav = () => {
  return (
    <nav>
      <ul className="bottom-nav">
        {navModel.map((item) => (
          <li key={item.name}>
            <a href="/" className="nav-element">
              <img src={item.img} alt={item.name} />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;
