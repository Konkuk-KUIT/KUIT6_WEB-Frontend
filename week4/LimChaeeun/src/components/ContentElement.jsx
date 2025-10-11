const ContentElement = ({ item }) => {
  return (
    item.isSold && (
      <li key={item.id} className="content-element">
        <a href="/" className="content-item">
          <img src={`content/${item.image}`} alt={item.title} />
          <div className="content-item__info">
            <div className="content-item__text">
              <span className="content-item__title">{item.title}</span>
              <span className="content-item__meta">
                {item.location}·{item.timeAgo}
              </span>
              <span className="content-item__price">{item.price}</span>
              {item.isSold === true && (
                <span className="content-item__isSold">{"(판매완료)"}</span>
              )}
            </div>
            <div className="content-item__icons">
              {item.comments > 0 && (
                <span className="content-item__comment">
                  <img src="content/chat-icon.svg" alt="comment"></img>{" "}
                  {item.comments}
                </span>
              )}
              {item.likes > 0 && (
                <span className="content-item__likes">
                  <img src="content/heart-icon.svg" alt="likes"></img>{" "}
                  {item.likes}
                </span>
              )}
            </div>
          </div>
        </a>
      </li>
    )
  );
};

export default ContentElement;
