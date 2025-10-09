import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import FloatingButton from "./components/FloatingButton";
import BottomNav from "./components/BottomNav";
import marketModel from "./model/marketModel";
import { navModel } from "./model/navModel";

function Home() {
    return (
        <>
            <Header location={marketModel.location} icon={marketModel.headerImg} />
            <Content items={marketModel.items}/>
            <FloatingButton />
            <BottomNav icon={navModel}/>
        </>
    );
}

export default Home;