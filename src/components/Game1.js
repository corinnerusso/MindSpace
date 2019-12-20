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
      url: "https://zupimages.net/up/19/51/btqc.jpg",
      isOk: false,
      name: "Un OVNI"
    },
    {
      url: "https://zupimages.net/up/19/51/oxj8.jpg",
      isOk: false,
      name: "Un avion"
    },
    {
      url: "https://zupimages.net/up/19/51/63es.jpg",
      isOk: true,
      name: "Une navette spatiale"
    },
    {
      url: "https://zupimages.net/up/19/51/rb6d.jpg",
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
      url: "https://zupimages.net/up/19/51/a9tm.jpg",
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
      url: "https://zupimages.net/up/19/51/cwnc.jpg",
      isOk: false,
      name: "Monsieur Spock "
    },
    {
      url: "https://www.maison-bianchi.fr/media/Christiaan-Huygens.jpg",
      isOk: true,
      name: "Christiaan Huygens"
    },
    {
      url: "https://zupimages.net/up/19/51/0wyi.jpg",
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
          nextPage = "../game2/2";
          setCount({ message: "N F S S Z _ D I S J ? ? ? ? ? !" });
          props.history.push(nextPage);
        }
        return;
      case "3":
        if (e.target.id === "2") {
          nextPage = "../game2/3";
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
          <div className="game1-images-container" onClick={handleClick} id="0">
            <p>{images[id][0].name}</p>
            <img
              id="0"
              className="game1-images-image"
              src={images[id][0].url}
              alt="planet"
            />
          </div>
          <div className="game1-images-container" onClick={handleClick} id="1">
            <img
              id="1"
              className="game1-images-image"
              src={images[id][1].url}
              alt="planet"
            />
            <p>{images[id][1].name}</p>
          </div>
        </div>
        <div className="game1-images-children1">
          <div className="game1-images-container" onClick={handleClick} id="2">
            <p>{images[id][2].name}</p>
            <img
              id="2"
              className="game1-images-image"
              src={images[id][2].url}
              alt="planet"
            />
          </div>
          <div className="game1-images-container" onClick={handleClick} id="3">
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
    </div>
  );
};

export default Game1;
