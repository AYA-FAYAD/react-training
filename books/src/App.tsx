import { useEffect, useContext } from "react";
import BookCreate from "./compontas/bookCreate";
import BookList from "./compontas/bookList";
import BooksContext from "./context/books";

function App() {
  const { fetchBook }: any = useContext(BooksContext);
  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
      </div>
    </>
  );
}

export default App;
