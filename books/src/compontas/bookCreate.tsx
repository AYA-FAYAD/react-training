import { useState } from "react";

import useBooksContext from "../hooks/use-books-context";
function BookCreate() {
  const [title, setTitle] = useState("");
  const { creatBook }: any = useBooksContext();
  const handelSumbmitForm = (event: any) => {
    event.preventDefault();
    creatBook(title);
    setTitle("");
  };

  const handelChang = (event: any) => {
    // console.log("you made chang");

    setTitle(event.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handelSumbmitForm}>
        <label>Title </label>

        <input className="input" value={title} onChange={handelChang} />

        <button className="button">Create!!</button>
      </form>
    </div>
  );
}

export default BookCreate;
