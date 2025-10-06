import "../App.css";

const Content = ({ items }) => {
  return (
    <main className="content">
      {items
        .filter(({ isSold }) => isSold)
        .map(({ title, location, timeAgo, price, image, comments, likes }, index) => (
          <div key={index} className="product-card">
            <img src={`/${image}`} alt={title} className="product-img" />
            <div className="product-info">
              <div className="product-title">{title}</div>
              <div className="product-sub">
                {location} · {timeAgo}
              </div>
              <div className="product-price">{price}</div>

              <div className="product-icons">
                {comments > 0 && (
                  <span>
                    <img src="/chatting.svg" alt="chat" /> {comments}
                  </span>
                )}
                {likes > 0 && (
                  <span>
                    <img src="/like.svg" alt="like" /> {likes}
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
