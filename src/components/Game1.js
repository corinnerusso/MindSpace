import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "../components/game1.css";
import Context from "./Context";

const question = ["Comment sappelle la planète la plus proche de la Terre ?"];
const images = [
  [
    {
      url: "https://images-assets.nasa.gov/image/PIA00271/PIA00271~medium.jpg",
      isOk: true,
      name: "Vénus"
    },
    {
      url: "https://images-assets.nasa.gov/image/PIA15164/PIA15164~medium.jpg",
      isOk: false,
      name: "Mercure"
    },
    {
      url: "https://images-assets.nasa.gov/image/PIA02697/PIA02697~small.jpg",
      isOk: false,
      name: "Mars"
    },
    {
      url: "https://images-assets.nasa.gov/image/PIA02225/PIA02225~small.jpg",
      isOk: false,
      name: "Saturne"
    }
  ]
];

const Game1 = props => {
  const { count, setCount } = useContext(Context);

  let { id } = useParams();

  return (
    <div className="game1-parent">
      <h2>{question[id]}</h2>
      <div className="game1-images-parent">
        <div className="game1-images-children1">
          <div className="game1-images-container">
            <p>{images[id][0].name}</p>
            <img
              className="game1-images-image"
              src={images[id][0].url}
              alt="planet"
            />
          </div>
          <div className="game1-images-container">
            <img
              className="game1-images-image"
              src={images[id][1].url}
              alt="planet"
            />
            <p>{images[id][1].name}</p>
          </div>
        </div>
        <div className="game1-images-children1">
          <div className="game1-images-container">
            <p>{images[id][2].name}</p>
            <img
              className="game1-images-image"
              src={images[id][2].url}
              alt="planet"
            />
          </div>
          <div className="game1-images-container">
            <img
              className="game1-images-image"
              src={images[id][3].url}
              alt="planet"
            />
            <p>{images[id][3].name}</p>
          </div>
        </div>
      </div>
      <div className="game1-message-crypt">
        {count.message[0]} {count.message[1]} {count.message[2]}
      </div>
      <div className="game1-next-button">button</div>
    </div>
  );
};

export default Game1;
