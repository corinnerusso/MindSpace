import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="title">MIND SPACE</div>
      <div className="regles">
      Installé sur ton canapé, un laptop sur les jambes, tu reçois un SOS venu de l’espace. Tu dois résoudre des énigmes pour découvrir un message à délivrer à l’Univers !!
      </div>
      <div className="button">
        <Link to="/game">
          <button className="play">PLAY</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
