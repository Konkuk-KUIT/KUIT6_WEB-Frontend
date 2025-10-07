import "./App.css";
import "./reset.css";
import navModel from "./model/navModel";
import marketModel from "./model/marketModel";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <span>{marketModel.location}</span>
        <img src="./dropdown.svg" alt="드롭다운 버튼" />
      </div>
      <div className="header-icons">
        <button>
          <img src="./search.svg" alt="검색 버튼" />
        </button>
        <button>
          <img src="./menu.svg" alt="메뉴 버튼" />
        </button>
        <button>
          <img src="./alarm.svg" alt="알림 버튼" />
        </button>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="container">
      {marketModel.items.map((item, index) => (
        <article key={index} className="market-item">
          <img src={`./${item.image}`} alt={item.title} className="item-image" />
          <div className="item-info">
            <h3 className="item-title">{item.title}</h3>
            <p className="item-details">
              {item.location} · {item.timeAgo}
            </p>
            <p className="item-price">{item.price}</p>
            <div className="item-stats">
              {item.comments > 0 && (
                <span className="item-comments">
                  <img src="./comment.svg" alt="댓글" />
                  {item.comments}
                </span>
              )}
              {item.likes > 0 && (
                <span className="item-likes">
                  <img src="./heart.svg" alt="좋아요" />
                  {item.likes}
                </span>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

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

const FixedButton = () => {
  return (
    <button className="fixed-btn">
      <img src="./plus.svg" alt="글쓰기 버튼" />
    </button>
  );
};

function App() {
  return (
    <div>
      <Header />
      <Content />
      <FixedButton />
      <BottomNav />
    </div>
  );
}

export default App;
