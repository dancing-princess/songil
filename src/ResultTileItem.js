import './ResultListItem.css'

export default function ResultTileItem ({name}) {
    console.log("the smallest comp! ", name);
    return <div className="result-item"> {name} </div>
}