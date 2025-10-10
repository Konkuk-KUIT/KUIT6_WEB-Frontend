import "./App.css";
import marketModel from "./model/marketModel";
import { navModel } from "./model/navModel";

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="header__left">
          <span className="header__location">{marketModel.location} ▼</span>
        </div>
        <div className="header__icons">
          <img src="/Search.svg" alt="검색" />
          <img src="/Menu.svg" alt="메뉴" />
          <img src="/Notification.svg" alt="알림" />
        </div>
      </header>

      <main className="content">
        {marketModel.items.map((item) => (
          <div className="item" key={item.title}>
            <img
              src={`/${item.image}`}
              alt={item.title}
              className="item__image"
            />
            <div className="item__info">
              <h3 className="item__title">{item.title}</h3>
              <p className="item__meta">
                {item.location} · {item.timeAgo}
              </p>
              <p className="item__price">{item.price}</p>

              <div className="item__footer">
                {item.comments > 0 && (
                  <span className="icon-text">
                    <img src="/bx_chat.svg" alt="댓글" className="icon" />
                    {item.comments}
                  </span>
                )}
                {item.likes > 0 && (
                  <span className="icon-text">
                    <img src="/heart.svg" alt="좋아요" className="icon" />
                    {item.likes}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </main>

      <nav className="bottom-nav">
        {navModel.map((item) => (
          <a href="/" key={item.name} className="nav-element">
            <img src={`/${item.iconsrc}`} alt={item.name} />
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Home;
