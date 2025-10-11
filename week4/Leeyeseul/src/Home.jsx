import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";
import marketModel from "./model/marketModel"; 

const Home = () => {
  return (
    <div className="home">
      <Header marketModel={marketModel} /> 
      <Content marketModel={marketModel} /> 
      <BottomNav />
    </div>
  );
};

export default Home;
