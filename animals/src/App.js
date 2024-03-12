import { useState } from "react";
import AnimalShow from "./AnimleShow";
import "./App.css";

function getRandomAnimal() {
  const animal = ["cat", "dog", "bird", "gator", "cow", "horse"];

  return animal[Math.floor(Math.random() * animal.length)];
}

function App() {
  const [animals, setAnimal] = useState([]);

  const handlClick = () => {
    setAnimal([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handlClick}> Add an animal </button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
