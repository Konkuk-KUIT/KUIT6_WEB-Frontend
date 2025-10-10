import React from 'react';

const BottomNav = ({ navItems }) => {
  // 비구조화 할당 사용
  const { name, iconSrc } = navItems[0] || {};
  
  return (
    <nav className="bottom-nav">
      <ul>
        {navItems.map((item) => {
          // 각 네비게이션 아이템에 대해 비구조화 할당 사용
          const { name, iconSrc } = item;
          
          return (
            <li key={name}>
              <a href="/" className="nav-element">
                <img src={iconSrc} alt={name} />
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
