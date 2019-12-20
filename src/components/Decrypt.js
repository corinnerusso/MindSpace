import React from "react";
import "./decrypt.css";

const Decrypt = () => {
  return (
    <div>
      <h2>Mais ce message est crypté!!!!!</h2>
      <p className="decrypt-todo">
        Résous l'algo pour découvrir la clé de cryptage
      </p>
      <div className="decrypt-algo">
        <p>{"const key = [007 , 666, 'not tricky' , 1 , 'easy']"}</p>
        <p>{"const answer = key.find (element => element < 6)"}</p>
        <p>{"console.log(answer)"}</p>
        <input type="text" />
      </div>
    </div>
  );
};

export default Decrypt;
