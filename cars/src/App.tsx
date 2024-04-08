import CarForm from "./componenets/carForm";
import CarList from "./componenets/carList";
import CarSearch from "./componenets/carSearch";
import CarValue from "./componenets/carValue";

function App() {
  return (
    <div>
      <div className="container is-fluid">
        <CarForm />
        <CarSearch />
        <CarList />

        <CarValue />
      </div>
    </div>
  );
}

export default App;
