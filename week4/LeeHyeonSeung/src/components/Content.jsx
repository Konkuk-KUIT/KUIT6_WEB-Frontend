import "../App.css";
import marketModel from "../model/marketModel";

const Content = () => {
  return (
    <div className="content">
      {marketModel.items.map((item, index) => (
        <div key={index}>
          <div className="product-item">
            <img 
              src={`/content/image/${item.image}`} 
              alt={item.title} 
              className="product-image"
            />
            <div className="product-info">
              <div className="product-title">{item.title}</div>
              <div className="product-meta">
                {item.location} · {item.timeAgo}
              </div>
              <div className="product-price">{item.price}</div>
              <div className="product-actions">
                {item.comments > 0 && (
                  <div className="action-item">
                    <img src="/content/chat.svg" alt="채팅" />
                    <span>{item.comments}</span>
                  </div>
                )}
                {item.likes > 0 && (
                  <div className="action-item">
                    <img src="/content/heart.svg" alt="좋아요" />
                    <span>{item.likes}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          {index < marketModel.items.length - 1 && (
            <div className="divider"></div>
          )}
        </div>
      ))}
      <button className="plus-button">
        <img src="/content/plus.svg" alt="플러스버튼" />
      </button>
    </div>
  );
};

export default Content;