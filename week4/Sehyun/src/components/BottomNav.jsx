
export const BottomNav = ({navModel}) => {
  return (
    <nav>
      <ul className='bottom-nav'>
        {navModel.navItems.map((item) => (
          <li key={item.name}>
            <a href="/" className='nav-element'>
              <img src={item.iconSrc} alt={item.name} />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
};