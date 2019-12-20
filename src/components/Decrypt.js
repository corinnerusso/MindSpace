import React, { useState, useContext, useCallback } from "react";
import "./decrypt.css";
import Context from "./Context";
import track from "../wild.mp3";

const Decrypt = () => {
  const { count, setCount } = useContext(Context);

  const decode = (e, id) => {
    if (e.target.value === "1") {
      setCount({ message: "M E R R Y - C H R I S T M A S !", id: 1 });
      var audio = new Audio(track);
      audio.play();
    }
  };

  return (
    <div className="flex-parent">
      <h2>Mais ce message est crypté!!!!!</h2>
      <p className="decrypt-todo">
        Résous l'algo pour découvrir la clé de cryptage
      </p>
      <div>
        <p className="decrypt-algo">
          {"const key = [007 , 666, 'not tricky' , 1 , 'easy']"}
        </p>
        <p className="decrypt-algo">
          {"const answer = key.find (element => element < 6)"}
        </p>
        <p className="decrypt-algo">{"console.log(answer)"}</p>
      </div>
      <input type="text" onChange={decode} />

      <div className="game1-message-crypt">{count.message}</div>
    </div>
  );
};

export default Decrypt;
