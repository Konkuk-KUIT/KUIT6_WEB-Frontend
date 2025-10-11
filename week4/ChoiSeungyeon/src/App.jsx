import marketModel from './model/marketModel.js';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import BottomNav from './components/BottomNav.jsx';

import "./reset.css";
import './App.css';

function App() {
  const {location, items} = marketModel;
  return (
    <div>
      <Header location={location}/>
      <Content items={items}/>
      <BottomNav/>
    </div>
  )
}

export default App
