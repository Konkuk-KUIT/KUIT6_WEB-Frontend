import { navModel } from "./model/navModel";
import "./App.css";
import "./Home.jsx"
import Home from "./Home.jsx";

const Header = () => {};
const Content = () => {};
const NavElement = ({ item }) => {
  return (
    <li key={item.name}>
      <a href="/" className="nav-element">
        <img src={item.iconsrc} alt={item.name} />
        <span>{item.name}</span>
      </a>
    </li>
  );
};

const BottomNav = () => {
  return (
    <nav>
      <ul className="bottom-nav">
        {navModel.map((item) => (
          <NavElement key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      App
      <Home/>
    </div>
  );
}

export default App;


