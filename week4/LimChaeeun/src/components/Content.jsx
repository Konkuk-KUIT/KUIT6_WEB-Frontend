import marketModel from "../model/marketModel";
import ContentElement from "./ContentElement";
import "./Content.css";

const Content = () => {
  return (
    <section className="content">
      <ul>
        {marketModel.items.map((item) => (
          <ContentElement key={item.id} item={item} />
        ))}
      </ul>
      <div className="fab">
        <button>
          <img src="content/plus.svg" alt="추가" />
        </button>
      </div>
    </section>
  );
};

export default Content;
