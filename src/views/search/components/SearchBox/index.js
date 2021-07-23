import { useState } from "react";
import "./style.css"

export default function SearchBox( {onSearch, onClose, isSearching} ){

    const [searchText, setSearchText] = useState("");

    const handleCloseClick = () => {
        setSearchText("");
        onClose();
    }

    return (
        <div className="search-box">
            <h2 className="search-box-title">Staff Search</h2>
            <div className="search-box-cta">
                <label>
                    <input 
                        value={searchText} 
                        onChange={({ target: { value }}) => setSearchText(value)}
                        className="search-box-input"
                        />
                </label>
                <button 
                    onClick={() => onSearch(searchText)} 
                    disabled={!searchText.length}>
                    Search
                </button>
                {isSearching && 
                    <button 
                        onClick={handleCloseClick}>
                        Close
                    </button>
                }
            </div>
        </div>
    );
}