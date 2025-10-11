import "./App.css";
import navModel from "./model/navModel";
import Home from "./Home.jsx";

const Header = ({ location }) => {
  return (
    <header className="main_header">
      <section className="location_container">
        <h1>{location}</h1>
        <button><img src="icons/more.svg" alt="더보기 아이콘"/></button>
      </section>
      <section className="header_icon_container">
        <button><img src="icons/search.svg" alt="검색 아이콘"/></button>
        <button><img src="icons/list.svg" alt="목록 아이콘"/></button>
        <button><img src="icons/alarm.svg" alt="알람 아이콘"/></button>
      </section>
    </header>
  );
};

const Content = ({ items }) => {
  return (
    <div className="main_container_wrapper">
      {items.map((item) => 
        item.isSold && ( // isSold가 true일 때만 렌더링
          <article key={item.id} className="main_container">
            <div className="image_container">
              <img src={`./${item.image}`} alt={`${item.title} 이미지`} />
            </div>
            <section className="textandicon_container">
              <div className="text_container">
                <span className="name">{item.title}</span>
                <span className="place">{item.location} · {item.timeAgo}</span>
                <span className="price">{item.price}</span>
              </div>
              <section className="icon_container">
                {item.comments > 0 && ( //댓글 0보다 클때만 렌더링
                  <div className="comment_section">
                    <button className="comment_button">
                      <img src="icons/comment.svg" alt="댓글 아이콘" />
                    </button>
                    <span>{item.comments}</span>
                  </div>
                )}
                {item.likes > 0 && ( //좋아요 0보다 클 때만 렌더링
                  <div className="heart_section">
                    <button className="heart_button">
                      <img src="icons/heart.svg" alt="좋아요 아이콘" />
                    </button>
                    <span>{item.likes}</span>
                  </div>
                )}
              </section>
            </section>
          </article>
        )
      )}
    </div>
  );
};

const BottomNav = () => (
  <nav>
    <ul className="bottom-nav">
      {navModel.map((item) => (
        <li key={item.name}>
          <a href="/" className="nav-element">
            <img src={item.iconSrc} alt={item.name} />
            <span>{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

function App() {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App;
