const BottomNav = ({ tabs }) => {
    return (
        <nav>
            {tabs.map(({ name, img }) => (
                <a key={name} className="tab">
                    <img src={img} alt={name} />
                    {name}
                </a>
            ))}
        </nav>
    );
};

export default BottomNav;
