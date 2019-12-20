import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="title">MIND SPACE</div>
      <div className="regles">
        Officia esse eiusmod sit officia tempor dolor aliquip enim ea ex minim
        aliquip aute. Duis enim nostrud fugiat voluptate deserunt sint in dolor.
        Velit adipisicing do nostrud aliquip. Sint ut dolor commodo elit
        consectetur Lorem non occaecat sint occaecat et velit labore do. Aliqua
        tempor dolore laborum magna nulla irure quis culpa. Dolore velit culpa
        tempor nulla culpa.
      </div>
      <div className="button">
        <Link to="/game1/0">
          <button className="play">PLAY</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
