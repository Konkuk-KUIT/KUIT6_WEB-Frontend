import marketModel from "./model/marketModel";

import {Header} from "./component/Header";
import {Content} from "./component/Content";
import {BottomNav} from "./component/BottomNav";

export default function Home () {
    return (
        <>
            <Header location={marketModel.location} />
            <button className="floating-button"><img src="icons/plus.svg"/></button>
            <Content items={marketModel.items} />
            <BottomNav/>
        </>
        
    )
}

