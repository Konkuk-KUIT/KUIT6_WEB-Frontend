import Button from "../Button";
import './OrderBar.css';

interface Menu {
  price: number;
}

const OrderBar = () => {
  const menus: Menu[] = [];

  const handleOrder = () => {};

  const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0) || 12100;

  return (
    <div className="order-bar-container">
      <div className="order-info">
        <span className="order-label">총 주문금액</span>
        <span className="order-price">{totalPrice.toLocaleString()}원</span>
      </div>
      <Button onClick={handleOrder} type="button" size="lg">
        주문하기
      </Button>
    </div>
  );
};

export default OrderBar;
