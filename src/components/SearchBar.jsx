import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Real time search
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search by brand or model..."
        value={searchTerm}
        onChange={handleChange}
      />
      <span className="search-icon">🔍</span>
    </div>
  );
};

export default SearchBar;
