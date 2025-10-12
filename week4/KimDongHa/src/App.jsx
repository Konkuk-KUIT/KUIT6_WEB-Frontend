import navModel from './model/navModel';
import marketModel from './model/marketModel';
import "./App.css"
import "./reset.css"

const Header = () => {
  return (
    <header className="header">
      <div className="left-h">
        <p>군자동</p>
        <img src="header/Expand Arrow.png" alt="" />
      </div>
      <div className="right-h">
        <img src="header/Search.svg" alt="" />
        <img src="header/Menu.svg" alt="" />
        <img src="header/Notification.png" alt="" />
      </div>
    </header>
  )
};

const Content = () => {
  return (
    <main className="main">
      <ul className="main-list">
        {marketModel.items.map((item) => (
          <li className="main-element" key={item.title}>
            <div className="left">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="right">
              <p className="item-name">{item.title}</p>
              <div className="loc">
                <span className="location">{item.location}</span>
                <span> · </span>
                <span className="time">{item.timeAgo}</span>
              </div>
              <p className="price">{item.price}</p>
            </div>
            <div className="meta">
              <p>{item.comments > 0 && <div><img src="additional/bx_chat.svg" alt="" /> <span>{item.comments}</span></div> } {item.likes > 0 && <div><img src="additional/heart.svg" alt="" /> <span>{item.likes}</span></div> }</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

const NavElement = ({item}) => {
  return (
    <li key={item.name}>
      <a className="nav-element" href="/">
        <img src={item.iconSrc} alt={item.name}/>
        {item.name}
      </a>
    </li>
  )
};

const BottomNav = () => {
  return(
    <nav>
      <ul className="bottom-nav">
        {navModel.map((item) => (
          <NavElement key={item.name} item={item}/>
        ))}
      </ul>
      <div className='orange-button'>
        <img src="additional/Plus Math.png" alt="plus" />
      </div>
    </nav>
  )
};

function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <BottomNav/>
    </div>
  )
}

export default App
