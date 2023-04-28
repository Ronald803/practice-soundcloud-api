import './App.css';
import Carouser from './components/Carouser';
import Lyrics from './components/Lyrics';
import NameOfTheBand from './components/NameOfTheBand';
import NavBar from './components/NavBar';
import PlayList from './components/PlayList';
import Songs from './components/Songs';


function App() {
  return (
    <div className='app'>
        <NavBar></NavBar>
        <div className='row py-2 bod'>
          <div className='col-sm-3'>
            <NameOfTheBand></NameOfTheBand>
          </div>
          <div className='col-sm-6 container d-flex justify-content-center'>
            <Carouser></Carouser>
          </div>
          <div className='col-sm-3'>
            <PlayList></PlayList>
          </div>
        </div>
    </div>
  );
}

export default App;

//
// 1
// Atom Heart Mother: I. Father's Shout, Ii. Breast Milky, Iii. Mother Fore, Iv. Funky Dung, V. Mind Your Throats Please, Vi. Remergence (Original)
// 2
// If (Original)
// 3
// Summer '68 (Original)
// 4
// Fat Old Sun (Original)
// 5
// Alan's Psychedelic Breakfast: I. Rise And Shine, Ii. Sunny Side Up, Iii. Morning Glory (Original)