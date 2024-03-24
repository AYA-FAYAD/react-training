import { useState } from "react";
import Dropdown from "./components/DropDown";
function App() {
  const [selection, setSelection] = useState(null);

  const onSelect = (option: any) => {
    setSelection(option);
  };

  const options = [
    { id: "sdf12", label: "Red", value: "red" },
    { id: "eefwf12", label: "Green", value: "green" },
    { id: "lala12", label: "Blue", value: "blue" },
  ];
  return (
    <div>
      <Dropdown options={options} value={selection} onChange={onSelect} />
    </div>
  );
}

export default App;
