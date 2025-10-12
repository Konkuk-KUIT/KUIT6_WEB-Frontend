import "../App.css";

const Header = ({ location = "군자동" }) => {
  const icons = [
    { src: "/search.svg", alt: "search" },
    { src: "/list.svg", alt: "list" },
    { src: "/bell.svg", alt: "bell" },
  ];

  return (
    <header className="header">
      <div className="header-left">
        <span className="location">{location}</span>
        <img src="/arrow.svg" alt="arrow" className="icon arrow" />
      </div>
      <div className="header-right">
        {icons.map(({ src, alt }) => (
          <img key={alt} src={src} alt={alt} className="icon" />
        ))}
      </div>
    </header>
  );
};

export default Header;
