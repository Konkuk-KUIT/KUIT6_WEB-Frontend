import "./App.css";
import { navModel } from "./model/navModel";
import marketModel from "./model/marketModel";


const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <span className="location">군자동</span>
        <img src="/arrow.svg" alt="arrow" className="icon arrow" />
      </div>
      <div className="header-right">
        <img src="/search.svg" alt="search" className="icon" />
        <img src="/list.svg" alt="list" className="icon" />
        <img src="/bell.svg" alt="bell" className="icon" />
      </div>
    </header>
  );
};


const Content = () => {
  return (
    <main className="content">
      {marketModel.items
        .map((item, index) => (
          <div key={index} className="product-card">
            <img src={`/${item.image}`} alt={item.title} className="product-img" />
            <div className="product-info">
              <div className="product-title">{item.title}</div>
              <div className="product-sub">
                {item.location} · {item.timeAgo}
              </div>
              <div className="product-price">{item.price}</div>

              <div className="product-icons">
                {item.comments > 0 && (
                  <span>
                    <img src="/chatting.svg" alt="chat" /> {item.comments}
                  </span>
                )}
                {item.likes > 0 && (
                  <span>
                    <img src="/like.svg" alt="like" /> {item.likes}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
    </main>
  );
};

const NavElement = ({ item }) => {
  return (
    <li key={item.name}>
      <a href="/" className="nav-element">
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
          <NavElement item={item} />
        ))}
      </ul>
    </nav>
  );
};

const FloatingButton = () => {
  return (
    <button className="floating-btn">
      <img src="/plus.svg" alt="plus" className="plus-icon" />
    </button>
  );
};


function Home() {
  return (
    <div>
      <Header />  
      <BottomNav />
      <Content />
      <FloatingButton />
    </div>
  );
}

export default Home;
