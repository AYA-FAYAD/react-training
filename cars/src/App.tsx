import CarForm from "./componenets/carForm";
import CarList from "./componenets/carList";
import CarSearch from "./componenets/carSearch";
import CarValue from "./componenets/carValue";

function App() {
  return (
    <div>
      <div>
        <CarForm />
        <CarList />
        <CarSearch />
        <CarValue />
      </div>
    </div>
  );
}

export default App;
