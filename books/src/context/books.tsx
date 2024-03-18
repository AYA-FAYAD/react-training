import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext({});

function Provider({ children }: any) {
  const [books, setBook] = useState([]);

  const fetchBook = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBook(response.data);
  };

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

  const valueToShare = {
    books,
    creatBook,
    editBookById,
    deleteBookById,
    fetchBook,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
