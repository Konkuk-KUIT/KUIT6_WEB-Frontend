import { navModel } from "./model/navModel.js";
import marketModel from "./model/marketModel.js"
import "./App.css"

const Header = () => {
  return(
    <header className="header">
      <div className="header-ele">
        <ul>{marketModel.location}</ul>
        <img src="./icon.svg" alt="아래 화살표" className="header-icon"/>
      </div>
      <div className="header-icons">
        <img src="./icon_search.svg" alt="검색" />
        <img src="./icon_menu.svg" alt="메뉴" />
        <img src="./icon_alarm.svg" alt="알람" />
      </div>
    </header>
  )
};

const Content = () => {
  return (
    <div className="market-list">
      {marketModel.items.map((item, index) => (
        <><div key={index} className="market-item">
          {/* 상품 이미지 */}
          <img
            src={item.image}
            alt={item.title}
            className="market-item__image" />

          {/* 상품 정보 */}
          <div className="market-item__info">
            <div className="market-item__all">
              <h2 className="market-item__title">{item.title}</h2>
              <div className="market-item__localtime">
                <p className="market-item__location">{item.location}</p>
                <p>·</p>
                <p className="market-item__time">{item.timeAgo}</p>
              </div>
              <p className="market-item__price">{item.price}</p>
            </div>
            {/* 댓글/좋아요 (0이면 표시 안 함) */}
            <div className="market-item__status">
              {item.comments > 0 && (
                <span className="market-item__comments">
                  <img src="./image/chat.svg" alt="chat" />
                  {item.comments}</span>
              )}
              {item.likes > 0 && (
                <span className="market-item__likes">
                  <img src="./image/heart.svg" alt="하트 로고" />
                  {item.likes}</span>
              )}
            </div>
          </div>
        </div><div className="line"></div></>
      ))}
    </div>
  );
};

const BottomNav = () => {
  return(
    <nav>
      <ul className="bottom-nav">
        {
          navModel.map((item) => (
            <li key={item.name}>
              <a className="nav-element">
                <img src={item.iconSrc}/>
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
     <Header/>
     <Content/>
     <BottomNav/>
    </div>
  );
}

export default App
