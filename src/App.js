import React, {useState} from "react"
import NewScoreSession from "./Components/NewScoreSession";
import ScoreApp from "./Components/ScoreApp";


const App = () => {
  const [newSession, setNewSession] = useState(true);
  const [matchDetails, setMatchDetails] = useState({});
    const newSessionHandler = (values) => {
    setMatchDetails(values) 
    setNewSession(false)
  }

  return (<div> 
    {newSession? <NewScoreSession createNew={newSessionHandler}/>: <div></div>}
    {newSession?  <div></div>:<ScoreApp matchParams={matchDetails}/>}
    
  </div>)
}


export default App;