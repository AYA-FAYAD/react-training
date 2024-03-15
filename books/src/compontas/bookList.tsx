import BookShow from "./bookShow";
function BookList({ books, OnDelete, OnEdit }: any) {
  const renderedBook = books.map((book: any) => {
    return (
      <BookShow key={book.id} book={book} OnDelete={OnDelete} OnEdit={OnEdit} />
    );
  });

  return <div className="book-list">{renderedBook}</div>;
}

export default BookList;
