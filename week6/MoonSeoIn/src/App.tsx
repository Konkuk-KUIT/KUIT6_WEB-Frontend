import "./App.css";
import "./reset.css";
import Header from "./components/Header.tsx";
import Content from "./components/Content.tsx";
import FixedButton from "./components/FixedButton.tsx";
import BottomNav from "./components/BottomNav.tsx";
import navModel from "./model/navModel.ts";
import marketModel from "./model/marketModel.ts";

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
