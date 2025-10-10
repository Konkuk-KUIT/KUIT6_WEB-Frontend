import "../App.css";

const Content = ({ marketModel }) => { 
  return (
    <main className="content">
      {marketModel.items
        .filter((item) => item.isSold) 
        .map(({ title, image, location, timeAgo, price, comments, likes }) => ( 
          <div className="item" key={title}>
            <img src={image} alt={title} className="item__image" />
            <div className="item__info">
              <h3 className="item__title">{title}</h3>
              <p className="item__meta">
                {location} · {timeAgo}
              </p>
              <p className="item__price">{price}</p>
              <div className="item__footer">
                {comments > 0 && ( 
                  <span className="icon-text">
                    <img src="/bx_chat.svg" alt="댓글" className="icon" />
                    {comments}
                  </span>
                )}
                {likes > 0 && ( 
                  <span className="icon-text">
                    <img src="/heart.svg" alt="좋아요" className="icon" />
                    {likes}
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
