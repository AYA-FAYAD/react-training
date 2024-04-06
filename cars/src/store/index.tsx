import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from "./slice/CarsSlice";
import { formReducer, changName, changeCost } from "./slice/formsSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changName, changeCost, addCar, removeCar, changeSearchTerm };
