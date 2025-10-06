
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";
import FloatingButton from "./components/FloatingButton";

function Home() {
  return (
    <div>
      <Header />
      <Content />
      <BottomNav />
      <FloatingButton />
    </div>
  );
}

export default Home;
