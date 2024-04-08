import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
function CarList() {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(
    ({ form, cars: { data, searchTerm } }: any) => {
      const filteredCars = data.filter((car: any) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        cars: filteredCars,
        name: form.name,
      };
    }
  );

  const handleCarDelete = (car: any) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car: any) => {
    // DECIDE IF THIS CAR SHOULD BE BOLD
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"} `}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return <div className="car-list"> {renderedCars}</div>;
}

export default CarList;
