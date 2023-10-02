import './ResultItem.css'

export default function ResultItem ({name}) {
    console.log("the smallest comp! ", name);
    return <div className="result-item"> {name} </div>
}