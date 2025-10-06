
import "../App.css";
import marketModel from "../model/marketModel";

const Content = () => {
  return (
    <main className="content">
      {marketModel.items.map((item, index) => (
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

export default Content;
