import ReactDOM from "react-dom";
import { useEffect } from "react";
function Modal({ onClick, children, actionBar }: any) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const container = document.querySelector(".module-container");
  if (!container) {
    return null;
  }
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClick}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,

    container
  );
}

export default Modal;
