import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }: any) => {
    const filteredCars = data.filter((car: any) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return filteredCars.reduce((acc: any, car: any) => {
      return acc + car.cost;
    }, 0);
    // let cost = 0;
    // for (let car of filteredCars) {
    //   cost += car.cost;
    // }
    // return cost;
  });
  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
