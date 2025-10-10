import "../App.css";
import marketModel from "../model/marketModel";

const Content = () => {
  return (
    <main className="content">
      {marketModel.items.map((item) => (
        <div className="item" key={item.title}>
          <img src={item.image} alt={item.title} className="item__image" />
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
  );
};

export default Content;
