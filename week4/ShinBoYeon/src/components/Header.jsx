export const Header = () => {
  const icons = ["search", "bar", "noti"];
  return (
    <header className="header">
      <div className="header-location">
        <p className="location-p">군자동</p>
        <img src="/arrow-down.svg" alt="아래 화살표" />
      </div>
      <div className="header-icons">
        {/* 
        <button><img src="search.svg" alt="검색"/></button>
        <button><img src="bar.svg" alt="목록"/></button>
        <button><img src="noti.svg" alt="알람"/></button> 
        */}
        {icons.map(icon => (
          <button key={icon} type="button" aria-label={icon}>
            <img className="icon-img" src={`/${icon}.svg`} alt={icon} />
          </button>
        ))}
      </div>
    </header>
  );
};