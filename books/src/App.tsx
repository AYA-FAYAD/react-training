import { useState } from "react";
import { useEffect } from "react";
import BookCreate from "./compontas/bookCreate";
import BookList from "./compontas/bookList";
import axios from "axios";

function App() {
  const [books, setBook] = useState([]);

  const fetchBook = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBook(response.data);
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const editBookById = async (id: number, newTitle: string) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatebook: any = books.map((book: any) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });
    setBook(updatebook);
  };

  const deleteBookById = async (id: any) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatebook = books.filter((book: any) => {
      return book.id !== id;
    });
    setBook(updatebook);
  };

  const creatBook = async (title: any) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatebook: any = [...books, response.data];
    setBook(updatebook);

    //  Old way
    // const updatebook: any = [
    //   ...books,
    //   { id: Math.round(Math.random() * 999), title },
    // ];
    // setBook(updatebook);
  };

  return (
    <>
      <div className="app">
        <h1>Reading List</h1>
        <BookList
          books={books}
          OnDelete={deleteBookById}
          OnEdit={editBookById}
        />
        <BookCreate OnCreate={creatBook} />
      </div>
    </>
  );
}

export default App;
