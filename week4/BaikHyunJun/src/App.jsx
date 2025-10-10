import './App.css'
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import FloatingButton from '../components/FloatingButton';
import BottomNav from '../components/BottomNav';


function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ProductList />
      </main>
      <FloatingButton />
      <BottomNav />
    </div>
  );
}

export default App