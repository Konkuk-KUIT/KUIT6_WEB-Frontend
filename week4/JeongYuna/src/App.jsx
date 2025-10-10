import './reset.css'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import BottomNav from './components/BottomNav'
import items from './models/marketModel'
import tabs from './models/tabModel'
import FloatingButton from './components/FloatingButton'
import Border from './components/Border'

function App() {
  return (
      <>
        <Header location="군자동" icons={["search", "menu", "notification"]} />
        <Border color="#D9D9D9"/>
        <Content items={items}/>
        <BottomNav tabs={tabs}/>
        <FloatingButton icon="plus.svg"/>
      </>
  )
}

export default App
