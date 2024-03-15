import { useState } from "react";
import BookCreate from "./compontas/bookCreate";
import BookList from "./compontas/bookList";

function App() {
  const [books, setBook] = useState([]);

  const editBookById = (id: number, newTitle: string) => {
    const updatebook: any = books.map((book: any) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });
    setBook(updatebook);
  };

  const deleteBookById = (id: any) => {
    const updatebook = books.filter((book: any) => {
      return book.id !== id;
    });
    setBook(updatebook);
  };

  const creatBook = (title: any) => {
    const updatebook: any = [
      ...books,
      { id: Math.round(Math.random() * 999), title },
    ];
    setBook(updatebook);
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
