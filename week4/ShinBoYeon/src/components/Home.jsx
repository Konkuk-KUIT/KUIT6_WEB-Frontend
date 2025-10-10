import { Header } from "./Header";
import { Content } from "./Content";
import { Plus } from "./Plus";
import { BottomNav } from "./BottomNav";
import "../App.css";

function Home() {
  return (
    <div>
      <Header />
      <Content />
      <Plus />
      <BottomNav />
    </div>
  );
}

export default Home