import "./style.css";

export default function SearchResultsItem({name, email}){
    return (
        <div className="search-box-result-item">
            <p>{name}</p>
            <p>{email}</p>
        </div>
    )
}