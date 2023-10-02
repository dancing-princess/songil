import { useState } from 'react';
import './SearchSongEngine.css';
import ResultList from './ResultList.js';


export default function SearchSongEngine() {
    const [songQuery, setSongQuery] = useState("");
   // const [searchResults, setSearchResults] = useState(); //6 results at a time
    const [searchHistory, setSearchHistory] = useState([]); //recent searches
   // const [viewMode, setViewMode] = useState('list');     //either list or tiles if I have time
   
    // const renderResults = () => {
    //     console.log("I will render real results at some point");
    //     return <div>here I will show the results</div>
    // }
    console.log("I am here")
    return (
        <div className="searchEngineContanier">
            <form onSubmit={(e)=> {console.log("the form was submitted", e.target.value);}}>
                <input name="searchInput" className='searchBar' placeholder='search' value={songQuery} onChange={(e) => setSongQuery(e.target.value)} />
                <input type="submit" value="go"/>
            </form>

            <ResultList query = {songQuery}/>
            <input type='button' value="next results"/>
        </div>
    )
}