import { navModel } from "./model/navModel";
import marketModel from "./model/marketModel";
import "./App.css";

const Header = () => {
  const icons = ["search", "bar", "noti"];
  return (
    <header className="header">
      <div className="header-location">
        <p className="location-p">군자동</p>
        <img src="/arrow-down.svg" alt="아래 화살표" />
      </div>
      <div className="header-icons">
        {/* 
        <button><img src="search.svg" alt="검색"/></button>
        <button><img src="bar.svg" alt="목록"/></button>
        <button><img src="noti.svg" alt="알람"/></button> 
        */}
        {icons.map(icon => (
          <button key={icon} type="button" aria-label={icon}>
            <img className="icon-img" src={`/${icon}.svg`} alt={icon} />
          </button>
        ))}
      </div>
    </header>
  )
};

const Content = () => {
  return (
    <section className="content">
      {marketModel.items.map((item) => (
        <div key={item.title} className="content-product">
          <img src={item.image} />
          <div className="info-container">
            <div className="info-textbox">
              <h3 className="product-name">{item.title}</h3>
              <h3 className="product-location">{item.location} · {item.timeAgo}</h3>
              <h3 className="product-price">{item.price}</h3>
            </div>
            <div className="info-awa">
              <div className="product-chats">
                {item.comments > 0 ?
                  <div className="awa-container">
                    <img src="/chatting.svg" />
                    <span className="awa-num">{item.comments}</span>
                  </div>
                  : null}
              </div>
              <div className="product-likes">
                {item.likes > 0 ?
                  <div className="awa-container">
                    <img src="/heart.svg" />
                    <span className="awa-num">{item.likes}</span>
                  </div>
                  : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
};

const Plus = () => {
  return (
    <div className="btn-floating">
      <img src="/plus.svg" />
    </div>
  );
};

const NavElement = ({ item }) => {
  return (
    <li key={item.name}>
      <a href="/" className="nav-element">
        <img src={item.iconSrc} alt={item.name} />
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
    <div>
      <Header />
      <Content />
      <Plus />
      <BottomNav />
    </div>
  );
}

export default App