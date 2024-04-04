import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
import { produce } from "immer";

const INCREMENT = "increment";
const Dencrement = "decrement";
const VALUE_TO_ADD = "value to add";
const ADD_VALUE_TO_COUNT = "add value to count";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case INCREMENT:
      state.count = state.count + 1;
      return;

    case Dencrement:
      state.count = state.count - 1;
      return;
    case VALUE_TO_ADD:
      state.addValue = action.payload;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.addValue;
      state.addValue = 0;
      return;
    default:
      return;
  }

  // /////WITHOUT IMMER /////

  //   switch (action.type) {
  //     case INCREMENT:
  //       return {
  //         ...state,
  //         count: state.count + 1,
  //       };

  //     case Dencrement:
  //       return {
  //         ...state,
  //         count: state.count - 1,
  //       };
  //     case VALUE_TO_ADD:
  //       return {
  //         ...state,
  //         addValue: action.payload,
  //       };
  //     case ADD_VALUE_TO_COUNT:
  //       return {
  //         ...state,
  //         count: state.count + state.addValue,
  //         addValue: 0,
  //       };
  //     default:
  //       return state;
  //   }
  //   ///////if/////
  //   if (action.type === INCREMENT) {
  //     return {
  //       ...state,
  //       count: state.count + 1,
  //     };
  //   }
  //   if (action.type === Dencrement) {
  //     return {
  //       ...state,
  //       count: state.count - 1,
  //     };
  //   }
  //   if (action.type === VALUE_TO_ADD) {
  //   return {
  //     ...state,
  //     addValue: action.payload,
  //   };
  //   }
};
function CounterPage({}) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: 0,
    addValue: 0,
  });
  console.log(state);

  //   const [count, setcount] = useState(0);
  //   const [addValue, setAddValue] = useState(0);
  const increment = () => {
    // setcount(count + 1);
    dispatch({
      type: INCREMENT,
    });
  };
  const dencrement = () => {
    // setcount(count - 1);

    dispatch({
      type: Dencrement,
    });
  };
  const handleChang = (event: any) => {
    const value = parseInt(event.target.value) || 0;
    // setAddValue(value);
    dispatch({
      type: VALUE_TO_ADD,
      payload: value,
    });
  };

  const handelSubmit = (event: any) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
    // setcount(count + addValue);
    // setAddValue(0);
  };
  const { count, addValue } = state;

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={dencrement}>Dencrement</Button>
      </div>

      <form onSubmit={handelSubmit}>
        <label>Add a lot!</label>
        <input
          value={addValue || ""}
          onChange={handleChang}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
