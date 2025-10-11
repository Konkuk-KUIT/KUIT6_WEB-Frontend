import './reset.css';
import './App.css';

import marketModel from './model/marketModel';
import tabs from './model/tabModel';

import Header from './components/Header';
import Content from './components/content.jsx';
import BottomNav from './components/BottomNav';
import FloatingButton from './components/FloatingButton';
import Border from './components/Border';

function App() {
    return (
        <>
            <Header location="군자동" icons={['search', 'menu', 'notification']} />
            <Border />
            <Content items={marketModel.items} />
            <BottomNav tabs={tabs} />
            <FloatingButton icon="plus.svg" />
        </>
    );
}

export default App;
