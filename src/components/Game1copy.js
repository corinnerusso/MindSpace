import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { useParams, Redirect } from "react-router-dom";
import "../components/game1.css";
import Context from "./Context";

const question = [
  "Classez ces planètes de la plus proche du Soleil à la plus éloignée",
  "Classez ces couleurs d'étoiles de la plus froide à la plus chaude",
  "Classez ces planetes du plus petit nombre de satellites au plus grand",
  "Classez ces rovers par date d'aterrissage de la plus ancienne à la plus recente"
];
const images = [
  [
    "images-assets.nasa.gov/image/GSFC_20171208_Archive_e000100GSFC_20171208_Archive_e000100~orig.jpg",
    "images-assets.nasa.gov/image/PIA05389/PIA05389~orig.jpg",
    "images-assets.nasa.gov/image/PIA00122/PIA00122~orig.jpg"
  ],
  [
    "http://clipart-library.com/images/Aibrx4nET.jpg",
    "images-assets.nasa.gov/image/white_dwarf_disk_final/white_dwarf_disk_final~orig.jpg",
    "images-assets.nasa.gov/image/PIA22350/PIA22350~orig.jpg"
  ],
  [
    "https://images.nasa.gov/details-PIA00046",
    "images-assets.nasa.gov/image/PIA00122/PIA00122~orig.jpg",
    "images-assets.nasa.gov/image/PIA03077/PIA03077~orig.jpg"
  ],
  [
    "images-assets.nasa.gov/image/KSC-03pd3272/KSC-03pd3272~orig.jpg",
    "images-assets.nasa.gov/image/PIA22813/PIA22813~orig.jpg",
    "images-assets.nasa.gov/image/PIA13235/PIA13235~orig.jpg"
  ]
];

const select = [
  ["uranus", "saturne", "earth"],
  ["blue", "white", "orange"],
  ["neptune", "earth", "mars"],
  ["spirit", "insight", "curiosity"]
];

const Game1 = props => {
  let { id } = useParams();
  const { count, setCount } = useContext(Context);
  const [select1, setSelect1] = useState(select[id][0]);
  const [select2, setSelect2] = useState(select[id][1]);
  const [select3, setSelect3] = useState(select[id][2]);
  let nextPage = "";

  const handleClick = e => {
    let result = `${select1}${select2}${select3}`;
    switch (id) {
      case "0":
        if (result === "earthsaturneuranus") {
          nextPage = "../game1/1";
          setCount({ message: "N F S S ? ? ? ? ? ? ? ? ? ? ? !" });
          props.history.push(nextPage);
        }
        return;
      case "1":
        if (result === "orangebluewhite") {
          nextPage = "../game1/2";
          setCount({ message: "N F S S Z _ D I ? ? ? ? ? ? ? !" });
          props.history.push(nextPage);
        }
        return;
      case "2":
        if (result === "earthmarsneptune") {
          nextPage = "../game1/3";
          setCount({ message: "N F S S Z _ D I S J T U ? ? ? !" });
          props.history.push(nextPage);
        }
        return;
      case "3":
        if (result === "spiritcuriosityinsight") {
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
  };

  const handleChange2 = e => {
    setSelect2(e.target.value);
  };

  const handleChange3 = e => {
    setSelect3(e.target.value);
  };

  return (
    <div className="game1-parent">
      <h2>{question[id]}</h2>
      <div className="contain">
        <div className="question"></div>
        <div className="container">
          <div className="answer">SELECT RIGHT ANSWER</div>
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
      <button className="game1-next-button" onClick={handleClick}>
        button
      </button>
    </div>
  );
};

export default Game1;
