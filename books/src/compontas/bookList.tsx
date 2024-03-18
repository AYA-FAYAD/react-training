import useBooksContext from "../hooks/use-books-context";
import BookShow from "./bookShow";
function BookList() {
  const { books }: any = useBooksContext();
  const renderedBook = books.map((book: any) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBook}</div>;
}

export default BookList;
