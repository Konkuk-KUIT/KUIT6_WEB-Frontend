import Header from '../../components/Header/Header';
import Button from '../../components/Button';
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder';
import warningIcon from '../../assets/Group 2.png';
import './Cart.css';

const Cart = () => {
  const orderAmount = 10600;
  const deliveryFee = 2000;
  const totalAmount = orderAmount + deliveryFee;
  const minOrderPrice = 13000;
  const isMinOrderMet = orderAmount >= minOrderPrice;

  return (
    <div className="cart-container">
      <div className="cart-header">
        <Header />
        <button className="cancel-order-button" type="button">
          주문취소
        </button>
      </div>

      <div className="store-info-section">
        <div className="store-name-row">
          <h1 className="store-name">샐로리 한남점</h1>
          {!isMinOrderMet && (
            <div className="min-order-warning">
              <span className="warning-text">최소금액 미달</span>
              <img src={warningIcon} alt="경고" className="warning-icon" />
            </div>
          )}
        </div>
      </div>

      <div className="cart-item">
        <ImagePlaceholder shape="square" size={80} />
        <div className="cart-item-info">
          <h3 className="cart-item-name">토마토 샐러드</h3>
          <p className="cart-item-description">추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</p>
          <div className="cart-item-price-row">
            <span className="cart-item-price">{orderAmount.toLocaleString()}원</span>
            <div className="cart-item-quantity">
              <span>1개</span>
              <span className="arrow">›</span>
            </div>
          </div>
        </div>
      </div>

      <button className="add-more-button" type="button">
        더 담기 +
      </button>

      <div className="order-summary">
        <div className="summary-row">
          <span className="summary-label">주문금액</span>
          <span className="summary-value">{orderAmount.toLocaleString()}원</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">배달요금</span>
          <span className="summary-value">{deliveryFee.toLocaleString()}원</span>
        </div>
        <div className="summary-row total">
          <span className="summary-label">총 결제금액</span>
          <span className="summary-value">{totalAmount.toLocaleString()}원</span>
        </div>
      </div>

      <div className="payment-button-container">
        <div className="min-order-notice">
          최소 주문금액 {minOrderPrice.toLocaleString()}원
        </div>
        <Button type="button" size="xl" disabled={!isMinOrderMet}>
          {totalAmount.toLocaleString()}원 결제하기
        </Button>
      </div>
    </div>
  );
};

export default Cart;
