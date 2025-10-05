import "./App.css";
import navModel from "./model/navModel";
import marketModel from "./model/marketModel";

const Header = ({ location }) => {
  return (
    <header>
      <div className="header-inner">
        <div className="header-inner__title">
          {location}
          <button>
            <img src="header/expand-arrow.svg" alt="expand-arrow" />
          </button>
        </div>
        <div className="header-inner__icons">
          <button>
            <img src="header/search.svg" alt="search" />
          </button>
          <button>
            <img src="header/menu.svg" alt="menu" />
          </button>
          <button>
            <img src="header/notification.svg" alt="notification" />
          </button>
        </div>
      </div>
    </header>
  );
};

const ContentElement = ({ item }) => {
  return (
    <li key={item.id} className="content-element">
      <a href="/" className="content-item">
        <img src={`content/${item.image}`} alt={item.title} />
        <div className="content-item__info">
          <div className="content-item__text">
            <span className="content-item__title">{item.title}</span>
            <span className="content-item__meta">
              {item.location}·{item.timeAgo}
            </span>
            <span className="content-item__price">{item.price}</span>
            {item.isSold === true && (
              <span className="content-item__isSold">{"(판매완료)"}</span>
            )}
          </div>
          <div className="content-item__icons">
            {item.comments > 0 && (
              <span className="content-item__comment">
                <img src="content/chat-icon.svg" alt="comment"></img>{" "}
                {item.comments}
              </span>
            )}
            {item.likes > 0 && (
              <span className="content-item__likes">
                <img src="content/heart-icon.svg" alt="likes"></img>{" "}
                {item.likes}
              </span>
            )}
          </div>
        </div>
      </a>
    </li>
  );
};

const Content = () => {
  return (
    <section className="content">
      <ul>
        {marketModel.items.map((item) => (
          <ContentElement key={item.id} item={item} />
        ))}
      </ul>
      <div className="fab">
        <button>
          <img src="content/plus.svg" alt="추가" />
        </button>
      </div>
    </section>
  );
};

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
    <div>
      <Header location={marketModel.location} />
      <Content />
      <BottomNav />
    </div>
  );
}

export default App;
