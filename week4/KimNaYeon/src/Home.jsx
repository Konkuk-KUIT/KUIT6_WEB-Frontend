import marketModel from "./model/marketModel";
import { navModel } from "./model/navModel";
import "./App.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                <span>{marketModel.location}</span>
                <a href="/">
                    <img src="/expand.svg" alt="expandArrow-img"/>
                </a>
            </div>
            <ul className="header__right">
                {marketModel.headerImg.map((img) => (
                    <li key={img.name}>
                        <a href="/">
                            <img src={img.src} alt={img.name}/>
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
};

const Content = () => {
    return (
        <main className="itemlist">
            {marketModel.items.map((item) => (
                <section key={item.title} className="item-section">
                    <a href="/">
                        <div className="item">
                            <img src={item.image} alt={item.title} />
                            <aside className="item-right">
                                <div className="item-exp">
                                    <span className="item-exp__title">{item.title}</span>
                                    <div className="item-exp__desc">
                                        <span>{item.location}</span>
                                        <span>·</span>
                                        <span>{item.timeAgo}</span>
                                    </div>
                                    <span className="item-exp__price">{item.price}</span>
                                </div>
                                <div className="item-reaction">
                                    {item.comments > 0 && (
                                        <div className="item-reaction__type">
                                            <img src="/comment.svg" alt="comment-img" />
                                            <span>{item.comments}</span>
                                        </div>
                                    )}
                                    {item.likes > 0 && (
                                        <div className="item-reaction__type">
                                            <img src="/heart.svg" alt="heart-img" />
                                            <span>{item.likes}</span>
                                        </div>
                                    )}
                                </div>
                            </aside>
                        </div>
                    </a>
                    <div className="item-borderline"></div>
                </section>
            ))}
        </main>
    );
};

const FloatingButton = () => {
    return (
        <a href="/">
            <div className="plus-button">
                <img src="/plus.svg" alt="plus-img"/>
            </div>
        </a>
    );
};

const NavElement = ({item}) => {
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
          <NavElement key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  );
};

function Home() {
    return (
        <>
        <Header />
        <Content />
        <FloatingButton/>
        <BottomNav/>
        </>
    );
}

export default Home;