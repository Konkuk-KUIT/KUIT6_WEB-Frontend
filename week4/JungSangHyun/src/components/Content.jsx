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

            <div className="item__info__interest">
              {/* TODO: 댓글/좋아요 표시 */}
            </div>
          </div>
        </article>
      </li>

      <img src="/line.svg" alt="separator" />
    </>
  );
};

export default Content;
