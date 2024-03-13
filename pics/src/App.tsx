import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImage from "./api";

function App() {
  const [images, setIamge] = useState([]);
  const handleSubmit = async (term: any) => {
    const result = await searchImage(term);

    // console.log(result);
    setIamge(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
