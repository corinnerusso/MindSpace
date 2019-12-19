import React from "react";
import "./game2.css";

const GameTwo = () => {
  return (
    <div className="contain">
      <div className="question"></div>
      <div className="container">
        <div className="answer">SELECT RIGHT ANSWER</div>
        <div className="select">
          <select name="space1" id="space1">
            <option value="ONE">ONE</option>
            <option value="ONE">TWO</option>
            <option value="ONE">THREE</option>
          </select>

          <select name="space2" id="space2">
            <option value="ONE">ONE</option>
            <option value="ONE">TWO</option>
            <option value="ONE">THREE</option>
          </select>

          <select name="space3" id="space3">
            <option value="ONE">ONE</option>
            <option value="ONE">TWO</option>
            <option value="ONE">THREE</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default GameTwo;
