import marketModel from "../model/marketModel";

export const Content = () => {
  return (
    <section className="content">
      {marketModel.items.map((item) => (
        item.isSold ?
          <div key={item.title} className="content-product">
            <img src={item.image} />
            <div className="info-container">
              <div className="info-textbox">
                <h3 className="product-name">{item.title}</h3>
                <h3 className="product-location">{item.location} · {item.timeAgo}</h3>
                <h3 className="product-price">{item.price}</h3>
              </div>
              <div className="info-awa">
                <div className="product-chats">
                  {item.comments > 0 ?
                    <div className="awa-container">
                      <img src="/chatting.svg" />
                      <span className="awa-num">{item.comments}</span>
                    </div>
                    : null}
                </div>
                <div className="product-likes">
                  {item.likes > 0 ?
                    <div className="awa-container">
                      <img src="/heart.svg" />
                      <span className="awa-num">{item.likes}</span>
                    </div>
                    : null}
                </div>
              </div>
            </div>
          </div> : null
      ))}
    </section>
  )
};