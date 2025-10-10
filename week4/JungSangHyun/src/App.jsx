import { navModel } from "./model/navModel.js";
import {marketModel} from "./model/marketModel.js"
import "./App.css"

const Header = () => { 
  return (
    <header className="header">
      <div className="header__location">
        <p className="location">{marketModel.location}</p>
        <button className="locaton-btn">
          <img src = "/icon/expand-arrow.svg"></img>
        </button>
      </div>

      <div className="header__btn">
        <button className="search-btn">
          <img src = "/icon/search.svg"></img>
        </button>

        <button className="menu-btn">
          <img src = "/icon/menu.svg"></img>
        </button>

        <button className="notification-btn">
          <img src = "/icon/notification.svg"></img>
        </button>
      </div>
    </header>
  )
};

const ContentList = () => { 

  return (
    <section>
      <ul className="item-list">
        {marketModel.items.map((item) => (
          <Content key = {item.title} item = {item}></Content>
        ))}
      </ul>
      
      <button className="plus-btn">
        <img src = "/icon/plus.svg"></img>
      </button>
    </section>
  )
};

const Content = ({item}) => {
  
  return (
    <>
    <li>
      <article className="item">
        <img src={item.image} className="item__image"></img>
        <div className="item__info">
          <div className="item__info__header">
            <h4 className="item__name">{item.title}</h4>
            <p className="item__upload-info">
              <span>{item.location}</span>
              <span>·</span>
              <span>{item.timeAgo}</span>
            </p>
            <p className="item__price">{item.price}</p>
          </div>

          {/* todo 조건부 렌더링 */}
          <div className="item__info__interest">

          </div>

        </div>
      </article>
      </li>

      <img src = "/line.svg"></img>
      </>
  )
}

const BottomNav = () => {
  return (
    <nav>
      <ul className="bottom-nav">
        {navModel.map((item) => (
          <NavElement key = {item.name} item={item}></NavElement>
        ))}
      </ul>
    </nav>
  )
};

// bottomNav
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


function App() {
  return (
    <div>
      <Header></Header>
      <ContentList></ContentList>
      <BottomNav></BottomNav>
    </div>
  )
}

export default App
