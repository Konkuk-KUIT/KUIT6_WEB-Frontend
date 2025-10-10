import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";
import marketModel from "./model/marketModel";

function App() {
  return (
    <div>
      <Header location={marketModel.location}/>
      <Content />
      <BottomNav />
    </div>
  );
}

export default App;
