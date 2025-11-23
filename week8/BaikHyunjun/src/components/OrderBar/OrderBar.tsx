import Button from "../Button";
import useCartStore from '../../store/cartStore';
import './OrderBar.css';

const OrderBar = () => {
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const totalPrice = getTotalPrice();

  const handleOrder = () => {
    // 주문하기 버튼 클릭 시 동작 (추후 구현)
  };

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
