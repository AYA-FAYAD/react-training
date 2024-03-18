import { useState } from "react";
import BookEdit from "./bookEdit";

import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }: any) {
  const [bookEdit, setBookEdit] = useState(false);

  const { deleteBookById }: any = useBooksContext();
  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditBook = () => {
    setBookEdit(!bookEdit);
  };

  const handleSubmit = () => {
    setBookEdit(false);
  };

  let contant = <h3>{book.title}</h3>;

  if (bookEdit) {
    contant = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {contant}
      <div className="actions">
        <button className="edit" onClick={handleEditBook}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
