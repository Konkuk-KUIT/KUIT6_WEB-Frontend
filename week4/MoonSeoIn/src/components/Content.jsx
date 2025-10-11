const Content = ({ items }) => {
  return (
    <div className="container">
      {items.map((item, index) => {
        const { title, location, timeAgo, price, image, comments, likes, isSold } = item;

        return (
          isSold && (
            <article key={index} className="market-item">
              <img src={`./${image}`} alt={title} className="item-image" />
              <div className="item-info">
                <h3 className="item-title">{title}</h3>
                <p className="item-details">
                  {location} · {timeAgo}
                </p>
                <p className="item-price">{price}</p>
                <div className="item-stats">
                  {comments > 0 && (
                    <span className="item-comments">
                      <img src="./comment.svg" alt="댓글" />
                      {comments}
                    </span>
                  )}
                  {likes > 0 && (
                    <span className="item-likes">
                      <img src="./heart.svg" alt="좋아요" />
                      {likes}
                    </span>
                  )}
                </div>
              </div>
            </article>
          )
        );
      })}
    </div>
  );
};

export default Content;
