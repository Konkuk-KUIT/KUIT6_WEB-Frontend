export const Header = ({ location }) => {
  return (
    <header className="main_header">
      <section className="location_container">
        <h1>{location}</h1>
        <button><img src="icons/more.svg" alt="더보기 아이콘"/></button>
      </section>
      <section className="header_icon_container">
        <button><img src="icons/search.svg" alt="검색 아이콘"/></button>
        <button><img src="icons/list.svg" alt="목록 아이콘"/></button>
        <button><img src="icons/alarm.svg" alt="알람 아이콘"/></button>
      </section>
    </header>
  );
};