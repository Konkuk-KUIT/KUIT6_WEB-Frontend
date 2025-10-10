import { navModel } from './model/navModel';
import marketModel from './model/marketModel';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { BottomNav } from './components/BottomNav';
import { FloatingButton } from './components/FloatingButton';
import './App.css';

// const Header = ({ location }) => {
//   return (
//     <header className="header">
//       <div className="location-selector">
//         <h3>{location}</h3>
//         <span className="arrow-down">▼</span>
//       </div>
//       <div className="header-icons">
//         <img src="/search.svg" alt="검색" />
//         <img src="/menu.svg" alt="메뉴" />
//         <img src="/bell.svg" alt="알림" />
//       </div>
//     </header>
//   );
// };


// const Content = ({ items }) => {
//   return (
//     <main className="product-list">
//       {items.map((item) => (
//         <div key={item.title} className="product-item">
//           <img src={item.image} alt={item.title} className="product-image" />
//           <div className="product-info">
//             <h4 className="product-title">{item.title}</h4>
//             <div className="product-meta">
//               <span>{item.location}</span>
//               <span>·</span>
//               <span>{item.timeAgo}</span>
//             </div>
//             <div className="product-price">{item.price}</div>
//           </div>
//           <div className="product-engagement">
//             {item.comments > 0 && (
//               <span>
//                 <img src="/chat2.svg" alt="댓글" className="engagement-icon" /> {item.comments}
//               </span>
//             )}
//             {item.likes > 0 && (
//               <span>
//                 <img src="/heart2.svg" alt="좋아요" className="engagement-icon" /> {item.likes}
//               </span>
//             )}
//           </div>
//         </div>
//       ))}
//     </main>
//   );
// };

// const BottomNav = () => {
//   return (
//     <nav>
//       <ul className='bottom-nav'>
//         {navModel.navItems.map((item) => (
//           <li key={item.name}>
//             <a href="/" className='nav-element'>
//               <img src={item.iconSrc} alt={item.name} />
//               {item.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   )
// };

// const FloatingButton = () => {
//   return <button className="floating-button">+</button>;
// };

function App() {
  return (
    <div>
      <Header location={marketModel.location} />
      <Content items={marketModel.items} />
      <FloatingButton />
      <BottomNav navModel={navModel}/>
    </div>
  )
}

export default App
