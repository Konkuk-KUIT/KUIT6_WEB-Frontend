import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import FloatingButton from "./components/FloatingButton";
import BottomNav from "./components/BottomNav";

function Home() {
    return (
        <>
        <Header />
        <Content />
        <FloatingButton/>
        <BottomNav/>
        </>
    );
}

export default Home;