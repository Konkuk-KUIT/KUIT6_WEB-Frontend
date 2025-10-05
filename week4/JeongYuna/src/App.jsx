import './reset.css'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import BottomNav from './components/BottomNav'

let items = [
  {id: 1, title: "에어팟 프로", location: "군자동", date:  new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), price: "220,000원", img: "airpods-pro.png", chats: 3, likes: 11, isSold: true},
  {id: 2, title: "바이레도 블랑쉬 50ml", location: "광진구 구의제3동", date: new Date(Date.now() - 26 * 1000), price: "4,000원", img: "byredo-blanche.png", chats: 0, likes: 2, isSold: false, },
  {id: 3, title: "샌드위치", location: "동대문구 휘경동", date: new Date(Date.now() - 59 * 1000), price: "8,000원", img: "sandwich.png", chats: 0, likes: 0, isSold: false,},
  {id: 4, title: "아이폰 13프로맥스", location: "용인시 수지구", date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), price: "1,000,000원", img: "iphone-13-pro-max.png", chats: 0, likes: 0, isSold: true,},
  {id: 5, title: "커피머신", location: "구리시 교문1동", date: new Date(Date.now() - 1 * 1000), price: "100,000원", img: "coffee-machine.png", chats: 0, likes: 0, isSold: true,},
  {id: 6, title: "컴퓨터 구조론", location: "서울시 화양동", date: new Date(Date.now() - 1 * 60 * 1000), price: "11,000원", img: "coffee-machine.png", chats: 0, likes: 0, isSold: true,},
  {id: 7, title: "맥북 에어 m1 13인치", location: "광주", date: new Date(Date.now() - 13 * 60 * 1000), price: "600,000원", img: "coffee-machine.png", chats: 4, likes: 12, isSold: true,},
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
