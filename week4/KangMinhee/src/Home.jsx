import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";
import FloatingButton from "./components/FloatingButton";
import marketModel from "./model/marketModel";
import { navModel } from "./model/navModel";


function Home() {
  return (
    <div>
      <Header />
      <Content items={marketModel.items} /> 
      <BottomNav items={navModel} />
      <FloatingButton />
    </div>
  );
}

export default Home;
