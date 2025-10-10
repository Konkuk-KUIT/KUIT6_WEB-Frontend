import React from 'react';
import {navModel} from "../src/model/navModel";

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <ul>
        {navModel.map((item) => (
          <li key={item.name}>
            <a href="/" className="nav-element">
              <img src={item.iconSrc} alt={item.name} />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;
