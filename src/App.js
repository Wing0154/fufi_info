import logo from './logo.svg';
import './App.css';
import Dashboard from '../src/component/Dashboard'
import Aboutus from '../src/component/Aboutus'
import TradeKia from '../src/component/ecosystem/Tradekiya'
import FufiedgeWallet from '../src/component/ecosystem/FufiedgeWallet'
import Trade0x from '../src/component/ecosystem/Trade0x'
import CryptoxIN from '../src/component/ecosystem/CryptoxIN'
import TradeBRO from '../src/component/ecosystem/TradeBRO'
import Metaverse from '../src/component/Metaverse'
import Timeline from '../src/component/timeline/Timeline'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navigation from '../src/navigation/Navigation'

import Footer from '../src/component/footer/footer'



function App() {
  return (
    <>
    <Router>
      <Navigation />
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route> 
      <Route path="/aboutus" element={<Aboutus/>}></Route>
      <Route path="/TradeKia" element={<TradeKia/>}></Route>
      <Route path="/FufiedgeWallet" element={<FufiedgeWallet/>}></Route>
      <Route path="/Trade0x" element={<Trade0x/>}></Route>
      <Route path="/CryptoxIN" element={<CryptoxIN/>}></Route>
      <Route path="/TradeBRO" element={<TradeBRO/>}></Route>
      <Route path="/Metaverse" element={<Metaverse/>}></Route>
      <Route path="/Timeline" element={<Timeline/>}></Route>
    
    </Routes>
    <Footer />
    </Router>
  
    </>
    
  );
}

export default App;
