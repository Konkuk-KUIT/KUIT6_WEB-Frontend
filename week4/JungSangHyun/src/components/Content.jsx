const Content = ({ item }) => {
  return (
    <>
      <li>
        <article className="item">
          <img src={item.image} className="item__image" alt={item.title} />
          <div className="item__info">
            <div className="item__info__header">
              <h4 className="item__name">{item.title}</h4>
              <p className="item__upload-info">
                <span>{item.location}</span>
                <span>·</span>
                <span>{item.timeAgo}</span>
              </p>
              <p className="item__price">{item.price}</p>
            </div>

            {(item.comments > 0 || item.likes > 0) && (
            <div className="item__info__interest">
                {item.comments > 0 && (
                <span className="interest-item">
                    <img
                    src="/icon/chat.svg"
                    alt="comments"
                    className="interest-icon"
                    />
                    {item.comments}
                </span>
                )}
                {item.likes > 0 && (
                <span className="interest-item">
                    <img
                    src="/icon/like.svg"
                    alt="likes"
                    className="interest-icon"
                    />
                    {item.likes}
                </span>
                )}
            </div>
            )}

          </div>
        </article>
      </li>

      <img src="/line.svg" alt="separator" />
    </>
  );
};

export default Content;
