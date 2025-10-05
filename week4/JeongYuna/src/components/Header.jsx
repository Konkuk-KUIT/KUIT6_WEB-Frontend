const Header = ({location, icons}) => {
  return (
    <header>
        <button className="location">
          <h1 className='my-location'>{location}</h1>
          <img src="/src/assets/expand_arrow.svg" alt="더보기"/>
        </button>
        <div className="icons">
            {icons.map( icon => (
                <button>
                  <img
                    key={icon}
                    src={`/src/assets/${icon}.svg`}
                    alt={icon}
                  />
                </button>
            ))}
        </div>
    </header>
    )
};

export default Header;