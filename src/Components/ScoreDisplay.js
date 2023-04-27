import React from "react";
import "./ScoreDisplay.css"

const ScoreDisplay = (props) => {
    
  return (
    <div className="teamScore">
      <div className="teamName"> {props.teamName}</div>
  
      <div className="score">
        <div><span className="runs">{props.updateScore}</span>
        <span>/</span>
        <span className="wickets">
          0
        </span></div>
        <div className="overs">Overs {props.overs.totalovers}{"."}{props.overs.totalballs}</div>
      </div>
    </div>
  );
}


export default ScoreDisplay;