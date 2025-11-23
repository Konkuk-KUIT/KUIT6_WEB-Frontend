import { useNavigate } from 'react-router-dom';
import stores from '../../models/stores';
import Header from '../../components/Header/Header';
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder';
import OrderBar from '../../components/OrderBar/OrderBar';
import './Stores.css';

interface ID {
  id : number,
  name : string,
  reviewCnt : number,
  minDeliveryTime : number,
  maxDeliveryTime : number,
  deliveryFee : number
}

const Stores = () => {
  const navigate = useNavigate();

  const handleStoreClick = (storeId: number) => {
      navigate(`/stores/${storeId}`);
  };

  return (
    <div className="stores-container">
      <Header />
      <div className="stores-title-section">
        <h1 className="stores-title">샐러드</h1>
      </div>

      <div className="stores-list">
        {stores.map((store : ID, index : number ) => (
          <div 
            key={store.id} 
            className="store-item"
            onClick={() => handleStoreClick(store.id)}
            style={{ cursor: 'pointer' }}
          >
            <ImagePlaceholder shape="square" size={80} />
            <div className="store-info">
              {index < 3 && (
                <span className="store-rank">{index + 1}위</span>
              )}
              <h2 className="store-name">{store.name}</h2>
              <div className="store-rating">
                <span className="star">★</span>
                <span className="rate">{store.rate}</span>
                <span className="review-count">({store.reviewCnt.toLocaleString()})</span>
              </div>
              <div className="store-delivery">
                {store.minDeliveryTime}분~{store.maxDeliveryTime}분 · 배달비 {store.deliveryFee.toLocaleString()}원
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="order-bar">
        <OrderBar />
      </div>
    </div>
  );
};

export default Stores;
