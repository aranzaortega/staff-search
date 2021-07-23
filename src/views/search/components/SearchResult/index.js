import SearchResultsItem from "./SearchResultsItem";
import "./style.css";

export default function SearchResult({result, isSearching}) {
    return (
        <div  className="search-box-result">
        {!result.length && isSearching && <p>Not found</p>}
            {result?.map((value) => 
                <SearchResultsItem key={value.id} {...value}/>
            )}
        </div>
    );
}