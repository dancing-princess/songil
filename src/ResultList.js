import { useState, useEffect } from "react";
import ResultItem from "./ResultItem";

export default function ResultList({ query }) {

    const [searchResults, setSearchResults] = useState([]); //6 results at a time
    const [isLoading, setIsLoading] = useState();
    const [errorMsg, setErrorMsg] = useState();
    console.log("entered ResultList");

    useEffect(() => {

        const searchSong = async () => {
            setIsLoading(true);
            console.log("we are going to search for your song" + query);
            try {
                const response = await fetch('https://api.mixcloud.com/search/?q=adele&type=cloudcast');
                let data = await response.json();
                console.log("the api fetched ", data.data);
                setSearchResults(data.data);
            }
            catch (error) {
                console.log("couldn't fetch data", error)
                setErrorMsg(error);
            }
            setIsLoading(false);
            console.log("this is what searchSongs gets" + query);
        }

        if (query) {
            console.log("useEffect is working on it's thing");
            searchSong();
        }

    }, [query]

    );

    return (query &&
        <div className="results-list-container">
            {isLoading && <strong>Loading... please wait</strong>}
            {errorMsg && <strong>There was an error, please try again later.</strong>}
            {searchResults.map(result => {
                console.log("currently mapping results ", result, result.name);
                return <ResultItem name = {result.name}/>})}

        </div>)
}