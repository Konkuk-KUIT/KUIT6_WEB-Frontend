import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Button from '../../components/Button';
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder';
import useCartStore from '../../store/cartStore';
import warningIcon from '../../assets/Group 2.png';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const clearCart = useCartStore((state) => state.clearCart);

  // 장바구니가 비어있는 경우
  if (!store || menus.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-header">
          <Header />
          <button className="cancel-order-button" type="button">
            주문취소
          </button>
        </div>
        <div className="empty-cart">
          <p>장바구니가 비어있습니다.</p>
        </div>
      </div>
    );
  }

  const orderAmount = getTotalPrice();
  const deliveryFee = store.deliveryFee;
  const totalAmount = orderAmount + deliveryFee;
  const minOrderPrice = store.minDeliveryPrice;
  const isMinOrderMet = orderAmount >= minOrderPrice;

  const handleCancelOrder = () => {
    clearCart();
    navigate('/Home');
  };

  const handleAddMore = () => {
    navigate(`/stores/${store.id}`);
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <Header />
        <button className="cancel-order-button" type="button" onClick={handleCancelOrder}>
          주문취소
        </button>
      </div>

      <div className="store-info-section">
        <div className="store-name-row">
          <h1 className="store-name">{store.name}</h1>
          {!isMinOrderMet && (
            <div className="min-order-warning">
              <span className="warning-text">최소금액 미달</span>
              <img src={warningIcon} alt="경고" className="warning-icon" />
            </div>
          )}
        </div>
      </div>

      {menus.map((menu) => (
        <div key={menu.id} className="cart-item">
          <ImagePlaceholder shape="square" size={80} />
          <div className="cart-item-info">
            <h3 className="cart-item-name">{menu.name}</h3>
            <p className="cart-item-description">{menu.ingredients}</p>
            <div className="cart-item-price-row">
              <span className="cart-item-price">{(menu.price * menu.quantity).toLocaleString()}원</span>
              <div className="cart-item-quantity">
                <span>{menu.quantity}개</span>
                <span className="arrow">›</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button className="add-more-button" type="button" onClick={handleAddMore}>
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
