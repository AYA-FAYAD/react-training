import { useState } from "react";

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
