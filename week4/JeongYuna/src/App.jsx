import './reset.css'
import './App.css'

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

const Content = ({items}) => {
  return (
    <section className='content'>
      {items.map( (item) => (
        <article key={item.id} className='trade-listing'>
          <img src={`/src/assets/${item.img}`} alt="상품 이미지" className='trade-listing__image'></img>
          <div className='item'>
            <button className='item-info'>
              <h1 className='item-info__name'>{item.title}</h1>
              <div className='item-info__upload'>
                {item.location} · {(formatRelativeTime(item.date))}
              </div>
              <div className='item-info__price'>{item.price}</div>
            </button>
            <div className='trade-listing__demand'>
              {item.chats == 0? null : <button className='trade-listing__icon'><img src="/src/assets/chat.svg"/> {item.chats}</button>}
              {item.likes == 0? null : <button className='trade-listing__icon'><img src="/src/assets/heart.svg"/>{item.likes}</button>}
            </div>
          </div>
        </article>
      )
      )}
    </section>
  )
};

const BottomNav = ({taps}) => {
  return (
    <nav>
      {
        taps.map( (tap) => (
          <a key={tap.name} className='tap'>
            <img src={`/src/assets/${tap.img}`}/>
            {tap.name}
          </a>
          )
        )
      }
    </nav>
  )
};

const item = {
  id: 0,
  title: "",
  img: "img.svg",
  location: "군자동",
  date: new Date(),
  price: 0,
  chats: 0,
  likes: 0,
  isSold: false
}

const formatRelativeTime = (date) => {
  const diff = Date.now() - date.getTime(); // 밀리초

  const seconds = Math.floor(diff / 1000);  // 초
  if (seconds < 60) return `${seconds}초 전`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}분 전`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}시간 전`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}일 전`;

  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `${weeks}주 전`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months}개월 전`;

  const years = Math.floor(day / 365);
  return `${years}년 전`;
}

let items = [
  {...item, id: 1, title: "에어팟 프로", location: "군자동", date:  new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), price: "220,000원", img: "airpods-pro.png", chats: 3, likes: 11, isSold: true},
  {...item, id: 2, title: "바이레도 블랑쉬 50ml", location: "광진구 구의제3동", date: new Date(Date.now() - 26 * 1000), price: "4,000원", img: "byredo-blanche.png", chats: 0, likes: 2, isSold: false, },
  {...item, id: 3, title: "샌드위치", location: "동대문구 휘경동", date: new Date(Date.now() - 59 * 1000), price: "8,000원", img: "sandwich.png", chats: 0, likes: 0, isSold: false,},
  {...item, id: 4, title: "아이폰 13프로맥스", location: "용인시 수지구", date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), price: "1,000,000원", img: "iphone-13-pro-max.png", chats: 0, likes: 0, isSold: true,},
  {...item, id: 5, title: "커피머신", location: "구리시 교문1동", date: new Date(Date.now() - 1 * 1000), price: "100,000원", img: "coffee-machine.png", chats: 0, likes: 0, isSold: true,},
  {...item, id: 6, title: "컴퓨터 구조론", location: "서울시 화양동", date: new Date(Date.now() - 1 * 60 * 1000), price: "11,000원", img: "coffee-machine.png", chats: 0, likes: 0, isSold: true,},
  {...item, id: 7, title: "맥북 에어 m1 13인치", location: "광주", date: new Date(Date.now() - 13 * 60 * 1000), price: "600,000원", img: "coffee-machine.png", chats: 4, likes: 12, isSold: true,},
]

let taps = [
  {name: "홈", img: "home.svg"},
  {name: "동네생활", img: "news.svg"},
  {name: "내 근처", img: "map.svg"},
  {name: "채팅", img: "chatting.svg"},
  {name: "나의 당근", img: "me.svg"}
]

function App() {
  return (
      <div>
        <Header location="군자동" icons={["search", "menu", "notification"]} />
        <Content items={items}/>
        <BottomNav taps={taps}/>
      </div>
  )
}

export default App
