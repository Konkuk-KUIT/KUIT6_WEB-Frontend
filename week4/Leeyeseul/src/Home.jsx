import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Content />
      <BottomNav />
    </div>
  );
};

export default Home;
