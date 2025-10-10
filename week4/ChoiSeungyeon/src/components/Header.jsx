const Header = ({location}) => {
  const actions = [
    { id: "search", src: "assets/Search.svg", alt: "검색" },
    { id: "menu", src: "assets/Menu.svg", alt: "메뉴" },
    { id: "notification", src: "assets/Notification.svg", alt: "알림" },
  ];

  return (
    <header className="app-header">
      <div className="header-title">
        <span>{location}</span>
        <button aria-label="지역 선택">
          <img
            src="assets/Expand_Arrow.svg"
            alt="expand"
            width="14"
            height="14"
          />
        </button>
      </div>
      <div className="header-actions">
        {actions.map(({ id, src, alt }) => (
          <button key={id} aria-label={alt}>
            <img src={src} alt={alt} />
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;