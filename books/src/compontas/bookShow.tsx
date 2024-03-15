import { useState } from "react";
import BookEdit from "./bookEdit";

function BookShow({ book, OnDelete, OnEdit }: any) {
  const [bookEdit, setBookEdit] = useState(false);
  const handleDeleteClick = () => {
    OnDelete(book.id);
  };

  const handleEditBook = () => {
    setBookEdit(!bookEdit);
  };

  const handleSubmit = (id: any, newTitle: any) => {
    setBookEdit(false);
    OnEdit(id, newTitle);
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
