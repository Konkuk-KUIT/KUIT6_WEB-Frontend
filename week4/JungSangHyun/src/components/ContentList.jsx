import { marketModel } from "../model/marketModel.js";
import Content from "./Content.jsx";

const ContentList = () => {
  return (
    <section>
      <ul className="item-list">
        {marketModel.items
          .filter((item) => item.isSold) 
          .map((item) => (
            <Content key={item.title} item={item} />
          ))}
      </ul>

      <button className="plus-btn">
        <img src="/icon/plus.svg" alt="add" />
      </button>
    </section>
  );
};

export default ContentList;
