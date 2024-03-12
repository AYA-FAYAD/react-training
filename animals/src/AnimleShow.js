import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";
import "./AnimalShow.css";
const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClick] = useState(0);

  const handlClick = () => {
    setClick(clicks + 1);
  };
  return (
    <div className="animal-show" onClick={handlClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img
        className="heart"
        alt=" heart"
        src={heart}
        style={{ width: 10 * 10 * clicks + "px" }}
      />
    </div>
  );
}

export default AnimalShow;
