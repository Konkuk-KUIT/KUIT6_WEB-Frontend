import './reset.css'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import BottomNav from './components/BottomNav'
import items from './models/marketModel'
import taps from './models/tapModel'

function App() {
  return (
      <>
        <Header location="군자동" icons={["search", "menu", "notification"]} />
        <Content items={items}/>
        <BottomNav taps={taps}/>
      </>
  )
}

export default App
