import './App.css';
import './SearchSongEngine';
import SearchSongEngine from './SearchSongEngine';

function App() {

  let searchSongs = (e) => 
    console.log("the event is " + e);
  
  return (
     <div className="App">
   
        <SearchSongEngine/>
    </div>
  );
}

export default App;
