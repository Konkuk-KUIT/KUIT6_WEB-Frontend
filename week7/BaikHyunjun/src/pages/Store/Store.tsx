import stores from '../../models/stores';
import Header from '../../components/Header/Header';
import MenuItem from '../../components/MenuItem/MenuItem';
import OrderBar from '../../components/OrderBar/OrderBar';
import './Store.css';

const Store = () => {
  // 샐로리 한남점 (id: 1)만 표시
  const store = stores.find((s) => s.id === 1);

  if (!store) {
    return <div>가게를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="store-container">
      <Header />
      <div className="store-info-section">
        <h1 className="store-title">{store.name}</h1>
        <div className="store-rating-info">
          <span className="star">★</span>
          <span className="rate">{store.rate}</span>
          <span className="review-count">리뷰{store.reviewCnt.toLocaleString()}</span>
        </div>
        <div className="store-detail-row">
          <span className="detail-label">결제방법</span>
          <span className="detail-value">토스결제만 현장결제 안됨</span>
        </div>
        <div className="store-detail-row">
          <span className="detail-label">최소주문</span>
          <span className="detail-value">{store.minDeliveryPrice.toLocaleString()}원</span>
        </div>
        <div className="store-detail-row">
          <span className="detail-label">배달시간</span>
          <span className="detail-value">약 {store.minDeliveryTime}-{store.maxDeliveryTime}분</span>
        </div>
      </div>

      <div className="menu-section">
        <h2 className="menu-section-title">샐러드</h2>
        <div className="menu-list">
          {store.menus.map((menu) => (
            <MenuItem key={menu.id} menu={menu} />
          ))}
        </div>
      </div>

      <div className="order-bar">
        <OrderBar />
      </div>
    </div>
  );
};

export default Store;
