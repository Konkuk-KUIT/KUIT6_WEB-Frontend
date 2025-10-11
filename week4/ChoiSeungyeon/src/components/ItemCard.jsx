
const ItemCard = ({ item }) => {
  const {
    image,
    title,
    location,
    timeAgo,
    price,
    comments,
    likes,
  } = item;

  return (
    <li className="card">
      <a href="#" aria-label={title} className='card-link'>
        <img
          className="card-thumb"
          src={`/assets/${image}`}
          alt={title}
        />
        <div className="card-body">
          <div className="card-title">{title}</div>
          <div className="card-meta">{location} · {timeAgo}</div>
          <div className="card-price">{price}</div>
          <div className="card-stats">
            {comments > 0 && (
              <span>
                <img src="assets/Chat.svg" alt="채팅" />
                {comments}
              </span>
            )}
            {likes > 0 && (
              <span>
                <img src="assets/Like.svg" alt="관심" />
                {likes}
              </span>
            )}
          </div>
        </div>
      </a>
    </li>
  );
};

export default ItemCard;