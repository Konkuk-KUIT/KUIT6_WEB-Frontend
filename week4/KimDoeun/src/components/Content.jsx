import "./Content.css";

export const Content = ({items}) => {
  return (
    <section className="content">
      {items.map(item => (
        <div className="content-wrapper" key={item.title}>
          <img src={item.image} alt={item.title} />
          <div className="content-item">
            <div className="content-item__info">
              <p className="item__title">{item.title}</p>
              <p className="item__location">
                {item.location}·{item.timeAgo}
              </p>
              <p className="item__price">{item.price}</p>
            </div>
            <div className="content-item__reaction">
              {item.comments > 0 ?
                <span><img src="content/chat.svg" alt="contentChat" />{item.comments}</span> : ""}
              {item.likes > 0 ?
                <span><img src="content/heart.svg" alt="contentLikes" />{item.likes}</span> : ""}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};