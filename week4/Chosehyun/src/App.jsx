import { navModel } from './model/navModel';
import './App.css';

const Header = () => {};

const Content = () => {};

const NavElement: ({ item }: { item: any }) => JSX.Element = ({ item } : {item}) => {
  return (
  <li key={item.name}>
    <a href="/" className='nav-element'>
      <img src={item.iconSrc} alt={item.name} />
      <span>{item.name}</span>
    </a>
  </li>
  );
};


const BottomNav = () => {
  return (
    <nav>
      <ul className='bottom-nav'>
        {navModel.navItems.map((item) => (
          <li key={item.name}>
          <a href="/" className='nav-element'>
            <img src={item.iconSrc} alt={item.name} />
            <span>{item.name}</span>
          </a>
        </li>
        )
      )
    }
      </ul>
    </nav>
  )
};

function App() {
  return (
    <div>
      App
    </div>
  )
}

export default App
