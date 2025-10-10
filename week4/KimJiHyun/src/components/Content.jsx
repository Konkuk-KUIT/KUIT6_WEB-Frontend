const Content = ({ items }) => {
    return (
        <section className="content">
            {items
                .filter(({ isSold }) => !isSold) // isSold가 false인 상품만 필터링
                .map(({ title, location, timeText, price, img, chats, likes }) => (
                    <div key={title}>
                        <article className="trade-listing">
                            <img src={img} alt="상품 이미지" className="trade-listing__image" />
                            <div className="item">
                                <button className="item-info">
                                    <h1 className="item-info__name">{title}</h1>
                                    <div className="item-info__upload">
                                        {location} · {timeText}
                                    </div>
                                    <div className="item-info__price">{price}</div>
                                </button>
                                <div className="trade-listing__demand">
                                    {chats > 0 && (
                                        <button className="trade-listing__icon">
                                            <img src="/icons/chat.svg" alt="채팅" /> {chats}
                                        </button>
                                    )}
                                    {likes > 0 && (
                                        <button className="trade-listing__icon">
                                            <img src="/icons/heart.svg" alt="좋아요" />
                                            {likes}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </article>
                        <div className="border"></div>
                    </div>
                ))}
        </section>
    );
};

export default Content;
