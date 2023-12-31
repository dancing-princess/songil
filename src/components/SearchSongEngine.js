import { useState } from 'react';
import './SearchSongEngine.css';
import ResultList from './ResultList.js';


export default function SearchSongEngine() {
    const [songQuery, setSongQuery] = useState("");
    const [searchHistory, setSearchHistory] = useState([]); //recent searches
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [viewMode, setViewMode] = useState('list');     //either list or tiles if I have time


    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("form was submitted");
        setFormSubmitted(true);
        setSearchHistory([...searchHistory, songQuery]);
    }

    console.log("this is the search engine");
    return (
        <div className="searchEngineContanier">
            <form onSubmit={(e) => { handleFormSubmit(e) }}>
                <input name="searchInput" className='searchBar' placeholder='search' value={songQuery} onChange={(e) => setSongQuery(e.target.value)} />
                <button type="submit" value="go"> go </button>
            </form>

            <ResultList query={songQuery} viewMode={viewMode} />
        </div>
    )
}