import { useState } from "react";
function BookEdit({ book, onSubmit }: any) {
  const [title, setTitle] = useState(book.title);

  const handelChang = (event: any) => {
    setTitle(event.target.value);
  };
  const handleSubmitForm = (event: any) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label>Title</label>
        <input className="input" value={title} onChange={handelChang} />
        <button className=" button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
