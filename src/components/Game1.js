import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { useParams, Redirect } from "react-router-dom";
import "../components/game1.css";
import Context from "./Context";

const question = [
  "Comment s'appelle la planète la plus proche de la Terre ?",
  "Quel véhicule l'homme emploie-t-il pour aller dans l'espace ?",
  "De quelle planète vient Choubaka ?",
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
      url: "https://zupimages.net/up/19/51/soqa.jpg",
      isOk: false,
      name: "Doom"
    },
    {
      url: "https://zupimages.net/up/19/51/zme6.jpg",
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

const Game1 = props => {
  const { count, setCount } = useContext(Context);
  let nextPage = "";

  let { id } = useParams();

  const handleClick = e => {
    switch (id) {
      case "0":
        if (e.target.id === "0") {
          nextPage = "../game2/0";
          setCount({ message: "N F ? ? ? ? ? ? ? ? ? ? ? ? ? !" });
          props.history.push(nextPage);
        }
        return;
      case "1":
        if (e.target.id === "2") {
          nextPage = "../game2/1";
          setCount({ message: "N F S S Z _ ? ? ? ? ? ? ? ? ? !" });
          props.history.push(nextPage);
        }
        return;
      case "2":
        if (e.target.id === "0") {
          nextPage = "../game2/1";
          setCount({ message: "N F S S Z _ D I S J ? ? ? ? ? !" });
          props.history.push(nextPage);
        }
        return;
      case "3":
        if (e.target.id === "2") {
          nextPage = "../game2/1";
          setCount({ message: "N F S S Z _ D I S J T U N B ? !" });
          props.history.push(nextPage);
        }
        return;
      default:
        break;
    }
  };

  return (
    <div className="game1-parent">
      <h2>{question[id]}</h2>
      <div className="game1-images-parent">
        <div className="game1-images-children1">
          <div className="game1-images-container">
            <p>{images[id][0].name}</p>
            <img
              id="0"
              className="game1-images-image"
              src={images[id][0].url}
              alt="planet"
              onClick={handleClick}
            />
          </div>
          <div className="game1-images-container">
            <img
              id="1"
              className="game1-images-image"
              src={images[id][1].url}
              alt="planet"
              onClick={handleClick}
            />
            <p>{images[id][1].name}</p>
          </div>
        </div>
        <div className="game1-images-children1">
          <div className="game1-images-container">
            <p>{images[id][2].name}</p>
            <img
              id="2"
              className="game1-images-image"
              src={images[id][2].url}
              alt="planet"
            />
          </div>
          <div className="game1-images-container">
            <img
              id="3"
              className="game1-images-image"
              src={images[id][3].url}
              alt="planet"
            />
            <p>{images[id][3].name}</p>
          </div>
        </div>
      </div>
      <div className="game1-message-crypt">{count.message}</div>
      <div className="game1-next-button">button</div>
    </div>
  );
};

export default Game1;
