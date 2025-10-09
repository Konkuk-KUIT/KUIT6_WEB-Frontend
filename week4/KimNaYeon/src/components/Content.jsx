import marketModel from "../model/marketModel";
import "../App.css";

const Content = () => {
    return (
        <main className="itemlist">
            {marketModel.items.map((item) => (
                <section key={item.title} className="item-section">
                    <a href="/">
                        <div className="item">
                            <img src={item.image} alt={item.title} />
                            <aside className="item-right">
                                <div className="item-exp">
                                    <span className="item-exp__title">{item.title}</span>
                                    <div className="item-exp__desc">
                                        <span>{item.location}</span>
                                        <span>·</span>
                                        <span>{item.timeAgo}</span>
                                    </div>
                                    <span className="item-exp__price">{item.price}</span>
                                </div>
                                <div className="item-reaction">
                                    {item.comments > 0 && (
                                        <div className="item-reaction__type">
                                            <img src="/comment.svg" alt="comment-img" />
                                            <span>{item.comments}</span>
                                        </div>
                                    )}
                                    {item.likes > 0 && (
                                        <div className="item-reaction__type">
                                            <img src="/heart.svg" alt="heart-img" />
                                            <span>{item.likes}</span>
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