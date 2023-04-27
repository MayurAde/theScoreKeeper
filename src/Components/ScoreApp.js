import React, { useState } from "react";
import "./ScoreApp.css";
import ScoreDisplay from "./ScoreDisplay";
import RunButtons from "./RunButtons";
import Toolbar from "./Toolbar";

const ScoreApp = (props) => {
    const [score, setScore] = useState(0);
    const [wickets, setWickets] = useState(0);
    const [overs, setOvers] = useState({totalovers:0, totalballs:0});
    const [team1active, setTeam1active] =useState(true);
    const switchInningsHandler = () => {
      setTeam1active(() => {return !team1active})
    }
    // console.log(props.matchParams.team1Name) 
    const runsHandler = (value) =>{
        console.log(value) 
        setScore(() =>{return score + value})
        if(overs.totalballs==5){
          setOvers({...overs, totalovers:overs.totalovers+1, totalballs:0})
        }
        else{
          setOvers({...overs, totalballs:overs.totalballs+1})
        }
    }
  return (
    

    <div className="scoreBody">
      <div className="ScoreArea">
        <h1>Score App</h1>
        <div className="scoreArea__inner">
          <ScoreDisplay teamName={props.matchParams.team1Name} updateScore={team1active? score: 0} overs={overs}/>
          <ScoreDisplay teamName={props.matchParams.team2Name} updateScore={team1active? 0:score} overs={overs}/>
        </div>
        
        <RunButtons runAdder={runsHandler}/>
        <Toolbar onSwitch = {switchInningsHandler}/>
      </div>
    </div>
  );
};

export default ScoreApp;
