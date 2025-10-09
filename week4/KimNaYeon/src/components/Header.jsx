import marketModel from "../model/marketModel";
import "../App.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                <span>{marketModel.location}</span>
                <a href="/">
                    <img src="/expand.svg" alt="expandArrow-img"/>
                </a>
            </div>
            <ul className="header__right">
                {marketModel.headerImg.map((img) => (
                    <li key={img.name}>
                        <a href="/">
                            <img src={img.src} alt={img.name}/>
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;