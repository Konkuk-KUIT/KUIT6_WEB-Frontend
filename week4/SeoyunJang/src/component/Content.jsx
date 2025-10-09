export const Content = ({ items }) => {
  return (
    <div className="main_container_wrapper">
      {items.map((item) => 
        {const {isSold,comments,likes} = item;
        return (
        isSold && ( // isSold가 true일 때만 렌더링
          <article key={item.id} className="main_container">
            <div className="image_container">
              <img src={`./${item.image}`} alt={`${item.title} 이미지`} />
            </div>
            <section className="textandicon_container">
              <div className="text_container">
                <span className="name">{item.title}</span>
                <span className="place">{item.location} · {item.timeAgo}</span>
                <span className="price">{item.price}</span>
              </div>
              <section className="icon_container">
                {comments > 0 && ( //댓글 0보다 클때만 렌더링
                  <div className="comment_section">
                    <button className="comment_button">
                      <img src="icons/comment.svg" alt="댓글 아이콘" />
                    </button>
                    <span>{item.comments}</span>
                  </div>
                )}
                {likes > 0 && ( //좋아요 0보다 클 때만 렌더링
                  <div className="heart_section">
                    <button className="heart_button">
                      <img src="icons/heart.svg" alt="좋아요 아이콘" />
                    </button>
                    <span>{item.likes}</span>
                  </div>
                )}
              </section>
            </section>
          </article>
        ))}
      )}
    </div>
  );
};