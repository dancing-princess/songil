import { useState, useEffect } from "react";
import axios from "axios";
import ResultListItem from "./ResultListItem.js";
import ResultTileItem from "./ResultTileItem.js";

export default function ResultList({ query, viewMode }) {
    const [searchResults, setSearchResults] = useState([]); //6 results at a time
    const [isLoading, setIsLoading] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const [offsetIteretor, setOffsetIteretor] = useState(0);


    //constant query parameters for fetching from spotify api
    const LIMIT = 6;
    const SEARCHTYPE = 'track';
    const AUDIO = 'audio';
    const CLIENT_ID = '0d24b7de024e4321a0e27c874d634344'; // My Spotify API Client ID
    const CLIENT_SECRET = '45d1277d46274171990e844630b59f4b'; // My Spotify API Client Secret

    console.log("entered ResultList");

    useEffect(() => {

        const searchSong = async () => {
            setIsLoading(true);
            console.log("we are going to search for your song" + query);
            try {
                const authResponse = await axios.post('https://accounts.spotify.com/api/token', null, {
                    params: {
                        grant_type: 'client_credentials',
                    },
                    headers: {
                        Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
                    },
                });

                const accessToken = authResponse.data.access_token;

                const searchResponse = await axios.get('https://api.spotify.com/v1/search', {
                    params: {
                        q: query,
                        type: SEARCHTYPE,
                        limit: LIMIT,
                        offset: offsetIteretor,
                        includeExternal: AUDIO
                    },
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                });

                // const response = await fetch('https://api.mixcloud.com/search/?q=adele&type=cloudcast');
                //let data = await searchResponse.json();
                console.log("the api fetched ", searchResponse);
                setSearchResults(searchResponse.data.tracks.items);
                setOffsetIteretor(offsetIteretor + LIMIT);
            }
            catch (error) {
                console.log("couldn't fetch data", error)
                setErrorMsg(error);
            }
            setIsLoading(false);
            console.log("this is what searchSongs gets" + query);
        }

        if (query) {
            searchSong();
        }

    }, [query, viewMode]

    );

    return (query &&
        <div className="results-list-container">
            {isLoading && <strong>Loading...</strong>}
            {errorMsg && <strong>There was an error, please try again later.</strong>}
            {searchResults.map(result => {
                if (viewMode === "list") return <ResultListItem name={result.name} />
                else return <ResultTileItem name={result.name} />
            })}

        </div>)
}