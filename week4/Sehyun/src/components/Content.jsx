export const Content = ({ items }) => {
  return (
    <main className="product-list">
      {items
      .filter((item) => item.isSold === true)
      .map((item) => (
        <div key={item.title} className="product-item">
          <img src={item.image} alt={item.title} className="product-image" />
          <div className="product-info">
            <h4 className="product-title">{item.title}</h4>
            <div className="product-meta">
              <span>{item.location}</span>
              <span>·</span>
              <span>{item.timeAgo}</span>
            </div>
            <div className="product-price">{item.price}</div>
          </div>
          <div className="product-engagement">
            {item.comments > 0 && (
              <span>
                <img src="/chat2.svg" alt="댓글" className="engagement-icon" /> {item.comments}
              </span>
            )}
            {item.likes > 0 && (
              <span>
                <img src="/heart2.svg" alt="좋아요" className="engagement-icon" /> {item.likes}
              </span>
            )}
          </div>
        </div>
      ))}
    </main>
  );
};