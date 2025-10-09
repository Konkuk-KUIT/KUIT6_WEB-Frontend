import "../App.css";

const Content = ({items}) => {
    return (
        <main className="itemlist">
            {items.filter(({isSold}) => isSold)
            .map(({title, location, timeAgo, price, image, comments, likes}) => (
                <section key={title} className="item-section">
                    <a href="/">
                        <div className="item">
                            <img src={image} alt={title} />
                            <aside className="item-right">
                                <div className="item-exp">
                                    <span className="item-exp__title">{title}</span>
                                    <div className="item-exp__desc">
                                        <span>{location}</span>
                                        <span>·</span>
                                        <span>{timeAgo}</span>
                                    </div>
                                    <span className="item-exp__price">{price}</span>
                                </div>
                                <div className="item-reaction">
                                    {comments > 0 && (
                                        <div className="item-reaction__type">
                                            <img src="/comment.svg" alt="comment-img" />
                                            <span>{comments}</span>
                                        </div>
                                    )}
                                    {likes > 0 && (
                                        <div className="item-reaction__type">
                                            <img src="/heart.svg" alt="heart-img" />
                                            <span>{likes}</span>
                                        </div>
                                    )}
                                </div>
                            </aside>
                        </div>
                    </a>
                    <div className="item-borderline"></div>
                </section>
            ))}
        </main>
    );
};

export default Content;