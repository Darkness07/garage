import { useState } from 'react';
import About from '../../components/About/About';
import AllWinner from '../../components/AllWinner/AllWinner';
import CasesByRarity from '../../components/CasesByRarity/CasesByRarity';
import Footer from '../../components/Footer/Footer';
import FreeСase from '../../components/FreeKace/FreeСase';

import Header from '../../components/Header/Header';
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom';
import LogIn from '../../components/LogIn/LogIn';
import './App.scss';

function App() {
  const [LogInOpen, setLogInOpen] = useState(false)
  return (
    <div className="App">
      <Header setLogInOpen={setLogInOpen} />
      <HeaderBottom />
      <AllWinner />
      <FreeСase />
      <CasesByRarity />
      <FreeСase />
      <About />
      <Footer />
      <LogIn LogInOpen={LogInOpen} setLogInOpen={setLogInOpen} />
    </div>
  );
}

export default App;
