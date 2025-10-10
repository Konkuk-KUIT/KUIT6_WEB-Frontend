import './App.css'
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import FloatingButton from '../components/FloatingButton';
import BottomNav from '../components/BottomNav';
import {navModel} from "./model/navModel";

function App() {
  // 상품 데이터를 App 컴포넌트에서 관리
  const products = [
    {
      id: 1,
      title: "에어팟 프로",
      location: "군자동",
      time: "3일 전",
      price: "220,000원",
      image: "/Rectangle 2.png",
      comments: 3,
      likes: 11,
      isSold: false
    },
    {
      id: 2,
      title: "바이레도 블랑쉬 50ml",
      location: "광진구 구의제3동",
      time: "26초 전",
      price: "4,000원",
      image: "/Rectangle 2-2.png",
      likes: 2,
      isSold: false
    },
    {
      id: 3,
      title: "샌드위치",
      location: "동대문구 휘경동",
      time: "끌올 59초 전",
      price: "8,000원",
      image: "/Rectangle 2-3.png",
      isSold: true
    },
    {
      id: 4,
      title: "아이폰 13프로맥스",
      location: "군자동",
      time: "1일 전",
      price: "1,000,000원",
      image: "/Rectangle 2-4.png",
      isSold: false
    },
    {
      id: 5,
      title: "커피머신",
      location: "구리시 교문1동",
      time: "1초 전",
      price: "100,000원",
      image: "/image.png",
      isSold: false
    }
  ];

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ProductList products={products} />
      </main>
      <FloatingButton />
      <BottomNav navItems={navModel} />
    </div>
  );
}

export default App