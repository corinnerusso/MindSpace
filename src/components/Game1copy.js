import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { useParams, Redirect } from "react-router-dom";
import "../components/game1.css";
import Context from "./Context";

const question = [
  "Classez ces planètes de la plus proche du Soleil a la plus éloignée",
  "classez ces couleurs d'étoiles de la plus froide a la plus chaude",
  "classez ces planetes du plus petit nombre de satellites au plus grand",
  "classez ces rovers par date d'aterrissage de la plus ancienne a la plus recente"
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
  const { count, setCount } = useContext(Context);
  const { answer, setAnswer } = useState("");
  const { select1, setSelect1 } = useState(0);
  const { select2, setSelect2 } = useState("");
  const { select3, setSelect3 } = useState("");
  let nextPage = "";

  let { id } = useParams();

  const handleClick = e => {
    switch (id) {
      case "0":
        if (answer === "earthsaturneuranus") {
          nextPage = "../game1/1";
          setCount({ message: "N F S S ? ? ? ? ? ? ? ? ? ? ? !" });
          props.history.push(nextPage);
        }
        return;
      case "1":
        if (answer === "orangebluewhite") {
          nextPage = "../game1/2";
          setCount({ message: "N F S S Z _ D I ? ? ? ? ? ? ? !" });
          props.history.push(nextPage);
        }
        return;
      case "2":
        if (answer === "earthmarsneptune") {
          nextPage = "../game1/3";
          setCount({ message: "N F S S Z _ D I S J T U ? ? ? !" });
          props.history.push(nextPage);
        }
        return;
      case "3":
        if (answer === "spiritcuriosityinsight") {
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
    setSelect1(prevState => prevState + 1);
    console.log(select1);
  };

  const handleChange2 = e => {
    setSelect2(e.target.value);
    console.log(select1);
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
              <option value="ONE">ONE</option>
              <option value="TWO">TWO</option>
              <option value="THREE">THREE</option>
            </select>

            <select name="space2" id="space2" onChange={handleChange2}>
              <option value="ONEone">ONE</option>
              <option value="ONEtwo">TWO</option>
              <option value="ONEthree">THREE</option>
            </select>

            <select name="space3" id="space3" onChange={handleChange3}>
              <option value="ONE4161">ONE</option>
              <option value="ONE65468">TWO</option>
              <option value="ONE6849847">THREE</option>
            </select>
          </div>
        </div>
      </div>

      <div className="game1-message-crypt">{count.message}</div>
      <div className="game1-next-button">button</div>
    </div>
  );
};

export default Game1;
