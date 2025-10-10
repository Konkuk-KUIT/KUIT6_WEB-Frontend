import {navModel} from '../model/navModel.js';

const NavElement = ({item}) => {
  return(
    <li>
      <a href='/' className='nav-element'>
        <img src={item.iconSrc} alt={item.name} />
        <span className='nav-lavel'>{item.name}</span>
      </a>
    </li>
  )
};
const BottomNav = () => {
  return (
    <nav>
      <ul className='bottom-nav'>
        {navModel.map((item) => (
          <NavElement item={item} key={item.name}/>
        ))}
      </ul>
    </nav>
  )
};

export default BottomNav;