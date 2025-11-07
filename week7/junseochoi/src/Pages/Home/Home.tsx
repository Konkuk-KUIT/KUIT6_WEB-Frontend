import { Link } from "react-router-dom";
import FoodCard from "../../components/FoodCard";

const Home = () => {
  return (
    <div>
      Home
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <Link to="/page1">page1으로 이동하기</Link>
    </div>
  );
};

export default Home;
