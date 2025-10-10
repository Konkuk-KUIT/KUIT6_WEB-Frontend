import { navModel } from "./model/navModel";
import { marketModel } from "./model/marketModel";
import "./App.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        {marketModel.location}
        <button><img src="header/expandArrow.svg" alt="expandArrow" /></button>
      </div>
      <div className="header-menu">
        <button><img src="header/search.svg" alt="search" /></button>
        <button><img src="header/menu.svg" alt="menu" /></button>
        <button><img src="header/notification.svg" alt="notification" /></button>
      </div>
    </header>
  )
};

const Content = () => {
  return (
    <section className="content">
      {marketModel.items.map(item => (
        <div className="content-wrapper">
          <img src={item.image} alt={item.title} />
          <div className="content-item">
            <div className="content-item__info">
              <p className="item__title">{item.title}</p>
              <p className="item__location">
                {item.location}·{item.timeAgo}
              </p>
              <p className="item__price">{item.price}</p>
            </div>
            <div className="content-item__reaction">
              {item.comments > 0 ?
                <span><img src="content/chat.svg" alt="contentChat" />{item.comments}</span> : ""}
              {item.likes > 0 ?
                <span><img src="content/heart.svg" alt="contentLikes" />{item.likes}</span> : ""}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const BottomNav = () => {
  return (
    <nav className="bottom-bar">
      <ul className="bottom-nav">
        {navModel.map(item => (
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

function App() {
  return (
    <div>
      <Header />
      <Content />
      <BottomNav />
    </div>
  )
}

export default App
