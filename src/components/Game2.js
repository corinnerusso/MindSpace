import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { useParams, Redirect } from "react-router-dom";
import "../components/game2.css";
import Context from "./Context";

const question = [
  "Classez ces planètes de la plus proche du Soleil à la plus éloignée",
  "Classez ces couleurs d'étoiles de la plus froide à la plus chaude",
  "Classez ces planètes du plus petit nombre de satellites au plus grand",
  "Classez ces rovers par date d'atterrissage de la plus ancienne à la plus récente"
];
const images = [
  [
    "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000100/GSFC_20171208_Archive_e000100~small.jpg",
    "https://images-assets.nasa.gov/image/PIA06594/PIA06594~small.jpg",
    "https://images-assets.nasa.gov/image/PIA00122/PIA00122~small.jpg"
  ],
  [
    "https://telescopicwatch.com/wp-content/uploads/2019/04/01-Zeta-Puppis.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/c9/Sirius_A_and_B_artwork.jpg",
    "https://zupimages.net/up/19/51/ajfv.jpg"
  ],
  [
    "https://images-assets.nasa.gov/image/PIA01142/PIA01142~small.jpg",
    "https://images-assets.nasa.gov/image/PIA00122/PIA00122~small.jpg",
    "https://zupimages.net/up/19/51/95y7.jpg"
  ],
  [
    "https://images-assets.nasa.gov/image/PIA05137/PIA05137~small.jpg",
    "https://images-assets.nasa.gov/image/PIA22813/PIA22813~medium.jpg",
    "https://images-assets.nasa.gov/image/PIA22486/PIA22486~medium.jpg"
  ]
];

const select = [
  ["Uranus", "Saturne", "Terre"],
  ["Bleue", "Blanche", "Rouge"],
  ["Neptune", "Terre", "Mars"],
  ["Spirit", "Insight", "Curiosity"]
];

const Game1 = props => {
  let { id } = useParams();
  const { count, setCount } = useContext(Context);
  const [select1, setSelect1] = useState(select[id][0]);
  const [select2, setSelect2] = useState(select[id][1]);
  const [select3, setSelect3] = useState(select[id][2]);
  const [image1, setImage1] = useState(images[id][0]);
  const [image2, setImage2] = useState(images[id][1]);
  const [image3, setImage3] = useState(images[id][2]);
  let nextPage = "";

  const handleClick = e => {
    let result = `${select1}${select2}${select3}`;
    switch (id) {
      case "0":
        if (result === "TerreSaturneUranus") {
          nextPage = "../game1/1";
          setCount({ message: "N F S S ? ? ? ? ? ? ? ? ? ? ? !" });
          props.history.push(nextPage);
        }
        return;
      case "1":
        if (result === "RougeBleueBlanche") {
          nextPage = "../game1/2";
          setCount({ message: "N F S S Z _ D I ? ? ? ? ? ? ? !" });
          props.history.push(nextPage);
        }
        return;
      case "2":
        if (result === "TerreMarsNeptune") {
          nextPage = "../game1/3";
          setCount({ message: "N F S S Z _ D I S J T U ? ? ? !" });
          props.history.push(nextPage);
        }
        return;
      case "3":
        if (result === "SpiritCuriosityInsight") {
          nextPage = "../decrypt";
          setCount({ message: "N F S S Z _ D I S J T U N B T !" });
          props.history.push(nextPage);
        }
        return;
      default:
        break;
    }
  };

  const handleChange1 = e => {
    setSelect1(e.target.value);
    switch (e.target.value) {
      case select[id][0]:
        setImage1(images[id][0]);
        return;
      case select[id][1]:
        setImage1(images[id][1]);
        return;
      case select[id][2]:
        setImage1(images[id][2]);
        return;
      default:
        break;
    }
  };

  const handleChange2 = e => {
    setSelect2(e.target.value);
    switch (e.target.value) {
      case select[id][0]:
        setImage2(images[id][0]);
        return;
      case select[id][1]:
        setImage2(images[id][1]);
        return;
      case select[id][2]:
        setImage2(images[id][2]);
        return;
      default:
        break;
    }
  };

  const handleChange3 = e => {
    setSelect3(e.target.value);
    switch (e.target.value) {
      case select[id][0]:
        setImage3(images[id][0]);
        return;
      case select[id][1]:
        setImage3(images[id][1]);
        return;
      case select[id][2]:
        setImage3(images[id][2]);
        return;
      default:
        break;
    }
  };

  return (
    <div className="game1-parent">
      <h2>{question[id]}</h2>
      <div className="contain">
        <div className="question"></div>
        <div className="container">
          <div className="answer">CHOISISSEZ LA BONNE REPONSE</div>
          <div className="images">
            <img src={image1} alt="planet" />
            <img src={image2} alt="planet" />
            <img src={image3} alt="planet" />
          </div>
          <div className="select">
            <select name="space1" id="space1" onChange={handleChange1}>
              <option value={select[id][0]}>{select[id][0]}</option>
              <option value={select[id][1]}>{select[id][1]}</option>
              <option value={select[id][2]}>{select[id][2]}</option>
            </select>

            <select name="space2" id="space2" onChange={handleChange2}>
              <option value={select[id][1]}>{select[id][1]}</option>
              <option value={select[id][2]}>{select[id][2]}</option>
              <option value={select[id][0]}>{select[id][0]}</option>
            </select>

            <select name="space3" id="space3" onChange={handleChange3}>
              <option value={select[id][2]}>{select[id][2]}</option>
              <option value={select[id][0]}>{select[id][0]}</option>
              <option value={select[id][1]}>{select[id][1]}</option>
            </select>
          </div>
        </div>
      </div>

      <div className="game1-message-crypt">{count.message}</div>
      <div className="divbutton">
        <button className="game1-next-button" onClick={handleClick}>
          Valider
        </button>
      </div>
    </div>
  );
};

export default Game1;
