import {useState} from "react";
import SearchBox from "./components/SearchBox";
import SearchResult from "./components/SearchResult";
import "./style.css"
import data from "../../data/users.json";

export default function Search() {

    const [isAtTop, setIsAtTop] = useState(false);
    const [result, setResult] = useState([]);

    const handleCloseSearch = () => {
        setIsAtTop(false)
        setResult([]);
    };

    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
        if(data.length){
            const searchTextLowercase = searchText.toLowerCase();
            const filteredData = data.filter((value) => {
                return (
                    value.name.toLowerCase().includes(searchTextLowercase) || 
                    value.phone.toLowerCase().includes(searchTextLowercase) ||
                    value.email.toLowerCase().includes(searchTextLowercase) ||
                    value.username.toLowerCase().includes(searchTextLowercase) 
                );
            });
            setResult(filteredData);
        }
    };

    return (
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox 
                onSearch={handleSearchClick} 
                onClose={handleCloseSearch}
                isSearching={isAtTop}
                />
            <SearchResult result={result} isSearching={isAtTop}/>
        </div>
    );
}