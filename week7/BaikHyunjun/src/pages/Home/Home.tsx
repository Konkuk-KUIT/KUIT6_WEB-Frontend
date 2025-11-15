import { useNavigate } from 'react-router-dom';
import OrderBar from '../../components/OrderBar/OrderBar';
import pizzaIcon from '../../assets/image 2.png';
import saladIcon from '../../assets/image 2-2.png';
import burgerIcon from '../../assets/image 2-3.png';
import koreanIcon from '../../assets/image 2-4.png';
import bunsikIcon from '../../assets/image 2-5.png';
import chickenIcon from '../../assets/image 2-6.png';
import sushiIcon from '../../assets/image 2-7.png';
import sandwichIcon from '../../assets/image 2-8.png';
import pastaIcon from '../../assets/image 2-9.png';
import dessertIcon from '../../assets/image 2-10.png';
import coffeeIcon from '../../assets/image 2-11.png';
import moreIcon from '../../assets/image 2.png';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: '피자', icon: pizzaIcon },
    { id: 2, name: '샐러드', icon: saladIcon },
    { id: 3, name: '햄버거', icon: burgerIcon },
    { id: 4, name: '한식', icon: koreanIcon },
    { id: 5, name: '분식', icon: bunsikIcon },
    { id: 6, name: '치킨', icon: chickenIcon },
    { id: 7, name: '초밥', icon: sushiIcon },
    { id: 8, name: '샌드위치', icon: sandwichIcon },
    { id: 9, name: '파스타', icon: pastaIcon },
    { id: 10, name: '디저트', icon: dessertIcon },
    { id: 11, name: '커피', icon: coffeeIcon },
    { id: 12, name: '더보기', icon: moreIcon },
  ];

  const handleCategoryClick = (categoryId: number) => {
    if (categoryId === 2) {
      navigate('/Stores');
    }
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">오늘은 무엇을 먹을까요?</h1>
        <div className="delivery-address">
          한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;
        </div>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <button
            key={category.id}
            className="category-button"
            type="button"
            onClick={() => handleCategoryClick(category.id)}
            style={{ cursor: category.id === 2 ? 'pointer' : 'default' }}
          >
            <img src={category.icon} alt={category.name} className="category-icon" />
            <span className="category-name">{category.name}</span>
          </button>
        ))}
      </div>

      <div className="order-bar">
        <OrderBar />
      </div>
    </div>
  );
};

export default Home;
