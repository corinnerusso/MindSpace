import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "../components/game1.css";

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

const Game1 = () => {
  let { id } = useParams();

  return (
    <div className="game1-parent">
      <div className="game1-question">{question[id]}</div>
      <div className="game1-images-parent">
        <div className="game1-images-children1">
          <div>
            <img
              className="game1-images-image"
              src={images[id][0].url}
              alt="planet"
            />
          </div>
          <div>
            <img
              className="game1-images-image"
              src={images[id][1].url}
              alt="planet"
            />
          </div>
        </div>
        <div className="game1-images-children1">
          <div>
            <img
              className="game1-images-image"
              src={images[id][2].url}
              alt="planet"
            />
          </div>
          <div>
            {" "}
            <img
              className="game1-images-image"
              src={images[id][3].url}
              alt="planet"
            />
          </div>
        </div>
      </div>
      <div className="game1-message-crypt">msg</div>
      <div className="game1-next-button">button</div>
    </div>
  );
};

export default Game1;
