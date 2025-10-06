import "./App.css";
import marketModel from "./model/marketModel";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div>
      <Header location={marketModel.location} />
      <Content />
      <BottomNav />
    </div>
  );
}

export default App;
