import { navModel } from "./model/navModel";
import { marketModel } from "./model/marketModel";
import "./App.css";
import {Header} from "./components/Header";
import {BottomNav} from "./components/BottomNav";
import { Content } from "./components/Content";

function App() {
  return (
    <div>
      <Header location={marketModel.location}/>
      <Content items={marketModel.items}/>
      <BottomNav model={navModel}/>
    </div>
  )
}

export default App
