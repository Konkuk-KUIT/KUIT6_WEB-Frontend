import "./App.css";
import "./reset.css";
import Header from "./components/Header";
import Content from "./components/Content";
import FixedButton from "./components/FixedButton";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <FixedButton />
      <BottomNav />
    </div>
  );
}

export default App;
