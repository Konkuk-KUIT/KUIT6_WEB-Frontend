import "../App.css";

const Header = ({location, icon}) => {
    return (
        <header className="header">
            <div className="header__left">
                <span>{location}</span>
                <a href="/">
                    <img src="/expand.svg" alt="expandArrow-img"/>
                </a>
            </div>
            <ul className="header__right">
                {icon.map(({name, src}) => (
                    <li key={name}>
                        <a href="/">
                            <img src={src} alt={name}/>
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;