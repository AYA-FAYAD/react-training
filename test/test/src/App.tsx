import Counter from "./components/counter";
import "./App.css";
import Buttons from "./components/Buttom";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState(0);

  const handleIncClick = () => {
    setCount(count + 1);
    if (count === 5) {
      alert("Brother EWW");
    }
  };

  const handleDecClick = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  };

  const handleRestClick = () => {
    setCount(0);
  };

  const handleAddCLick = () => {
    setCount(inputVal);
  };

  return (
    <>
      <div>
        <div>
          <input
            value={inputVal}
            onChange={(event) => setInputVal(parseInt(event.target.value))}
            type="number"
          />
          <Buttons onclick={handleAddCLick}>Add Number</Buttons>
        </div>
        <Counter count={count} />
        <div>
          <Buttons onclick={handleIncClick}>
            {"increment".replace("i", "I")}
          </Buttons>
          <Buttons onclick={handleDecClick}>Decremernt</Buttons>
          <Buttons onclick={handleRestClick}>Rest</Buttons>
        </div>
      </div>
    </>
  );
}

export default App;
