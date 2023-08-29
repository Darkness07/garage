import About from '../../components/About/About';
import AllWinner from '../../components/AllWinner/AllWinner';
import CasesByRarity from '../../components/CasesByRarity/CasesByRarity';
import Footer from '../../components/Footer/Footer';
import FreeСase from '../../components/FreeKace/FreeСase';

import Header from '../../components/Header/Header';
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeaderBottom/>
      <AllWinner/>
      <FreeСase/>
      <CasesByRarity/>
      <FreeСase/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
