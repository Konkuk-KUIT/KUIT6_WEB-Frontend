import "./App.css";
import "./reset.css";
import Header from "./components/Header";
import Content from "./components/Content";
import FixedButton from "./components/FixedButton";
import BottomNav from "./components/BottomNav";
import navModel from "./model/navModel";
import marketModel from "./model/marketModel";

function App() {
  return (
    <div>
      <Header location={marketModel.location} />
      <Content items={marketModel.items} />
      <FixedButton />
      <BottomNav navItems={navModel} />
    </div>
  );
}

export default App;
