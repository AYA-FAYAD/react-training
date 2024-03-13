import { useState } from "react";
import "./SearchBar.css";
function SearchBar({ onSubmit }: any) {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (event: any) => {
    event.preventDefault();

    // console.log("passing data to parent");
    onSubmit(term);
  };

  const handleChange = (event: any) => {
    // console.log(event.target.value);
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
