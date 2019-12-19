import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ContextMessage from "../components/Context";

import "../components/game1.css";

const question = [
  "Comment sappelle la planète la plus proche de la Terre ?",
  "Quel véhicule l'homme emploie-t-il pour aller dans l'espace ?",
  "De quelle planète vient Choubaka",
  "Qui a découvert Titan, un satellite de Saturne ?"
];
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
  ],
  [
    {
      url: "https://i.ytimg.com/vi/4x_M14Qc22E/hqdefault.jpg",
      isOk: false,
      name: "Une soucoupe volante"
    },
    {
      url:
        "https://images.unsplash.com/photo-1468530986413-2c93495ed020?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",
      isOk: false,
      name: "Un avion"
    },
    {
      url:
        "https://images.unsplash.com/photo-1543599723-86e84893ebba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80",
      isOk: true,
      name: "Une navette spatiale"
    },
    {
      url:
        "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fblog.csiro.au%2Fwp-content%2Fuploads%2F2016%2F07%2Fup-helium-1024x560.jpg",
      isOk: false,
      name: "Des ballons"
    }
  ],
  [
    {
      url:
        "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fstarwars%2Fimages%2Fe%2Fea%2FKashyyyk-SW-MTHC.png%2Frevision%2Flatest%3Fcb%3D20190605010641",
      isOk: true,
      name: "Kashyyyk"
    },
    {
      url:
        "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdna.artstation.com%2Fp%2Fassets%2Fimages%2Fimages%2F011%2F291%2F646%2Flarge%2Fluis-carrasco-doom-e.jpg%3F1528828508",
      isOk: false,
      name: "Doom"
    },
    {
      url:
        "https://slack-imgs.com/?c=1&o1=ro&url=http%3A%2F%2Fwww.fondsecran.eu%2Fa%2Fget_photo%2F169683%2F960%2F540",
      isOk: false,
      name: "Smiley Planet"
    },
    {
      url:
        "https://www.faceaujeu.com/959-large_default/maurice-planete-singes-pop-454.jpg",
      isOk: false,
      name: "La planète des singes"
    }
  ],
  [
    {
      url: "http://www.apophtegme.com/SPICILEGE/RELIGION/images/newton.jpg",
      isOk: false,
      name: "Isaac Newton"
    },
    {
      url:
        "https://images.charentelibre.fr/2015/02/27/5645cdc47971bb340f4d1f04/golden/1000x625/spock-est-mort-agrave.jpg",
      isOk: false,
      name: "Spock "
    },
    {
      url: "https://www.maison-bianchi.fr/media/Christiaan-Huygens.jpg",
      isOk: true,
      name: "Christiaan Huygens"
    },
    {
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Johannes_Kepler_1610.jpg/220px-Johannes_Kepler_1610.jpg",
      isOk: false,
      name: "Johannes Kepler"
    }
  ]
];

const Game1 = () => {
  let { id } = useParams();
  const message = useContext(ContextMessage);

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
      <div className="game1-message-crypt">k{message}</div>
      <div className="game1-next-button">button</div>
    </div>
  );
};

export default Game1;
