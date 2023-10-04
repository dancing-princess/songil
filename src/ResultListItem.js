import './ResultListItem.css'

export default function ResultListItem ({name}) {
    console.log("the smallest comp! ", name);
    return <div className="result-item"> {name} </div>
}