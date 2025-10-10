import marketModel from './model/marketModel.js';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import BottomNav from './components/BottomNav.jsx';

import "./reset.css";
import './App.css';

// const Header = ({location}) => {
//   const actions = [
//     { id: "search", src: "assets/Search.svg", alt: "검색" },
//     { id: "menu", src: "assets/Menu.svg", alt: "메뉴" },
//     { id: "notification", src: "assets/Notification.svg", alt: "알림" },
//   ];

//   return (
//     <header className="app-header">
//       <div className="header-title">
//         <span>{location}</span>
//         <button aria-label="지역 선택">
//           <img
//             src="assets/Expand_Arrow.svg"
//             alt="expand"
//             width="14"
//             height="14"
//           />
//         </button>
//       </div>
//       <div className="header-actions">
//         {actions.map(({ id, src, alt }) => (
//           <button key={id} aria-label={alt}>
//             <img src={src} alt={alt} />
//           </button>
//         ))}
//       </div>
//     </header>
//   );
// };

// const ItemCard = ({ item }) => {
//   const {
//     image,
//     title,
//     location,
//     timeAgo,
//     price,
//     comments,
//     likes,
//   } = item;

//   return (
//     <li className="card">
//       <a href="#" aria-label={title} className='card-link'>
//         <img
//           className="card-thumb"
//           src={`/assets/${image}`}
//           alt={title}
//         />
//         <div className="card-body">
//           <div className="card-title">{title}</div>
//           <div className="card-meta">{location} · {timeAgo}</div>
//           <div className="card-price">{price}</div>
//           <div className="card-stats">
//             {comments > 0 && (
//               <span>
//                 <img src="assets/Chat.svg" alt="채팅" />
//                 {comments}
//               </span>
//             )}
//             {likes > 0 && (
//               <span>
//                 <img src="assets/Like.svg" alt="관심" />
//                 {likes}
//               </span>
//             )}
//           </div>
//         </div>
//       </a>
//     </li>
//   );
// };

// const Content = ({ items }) => {
//   const soldOnly = items.filter(({ isSold }) => isSold === true);
//   return (
//     <main className="content">
//       <ul className="list">
//         {soldOnly.map((item) => (
//           <ItemCard key={item.id} item={item} />
//         ))}
//       </ul>
//     </main>
//   );
// };

// const NavElement = ({item}) => {
//   return(
//     <li>
//       <a href='/' className='nav-element'>
//         <img src={item.iconSrc} alt={item.name} />
//         <span className='nav-lavel'>{item.name}</span>
//       </a>
//     </li>
//   )
// };
// const BottomNav = () => {
//   return (
//     <nav>
//       <ul className='bottom-nav'>
//         {navModel.map((item) => (
//           <NavElement item={item} key={item.name}/>
//         ))}
//       </ul>
//     </nav>
//   )
// };

function App() {
  const {location, items} = marketModel;
  return (
    <div>
      <Header location={location}/>
      <Content items={items}/>
      <BottomNav/>
    </div>
  )
}

export default App
