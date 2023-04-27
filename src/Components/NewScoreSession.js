import React, {useState} from "react"
import "./NewScoreSession.css"

const NewScoreSession = (props) => {
    const [team1Name, setTeam1Name] = useState("");
    const [team2Name, setTeam2Name] = useState("");
    const[oversVal, setOversVal] = useState("")

    const submitHandler = (event) => {
        const teamValues = {team1Name, team2Name}
        event.preventDefault();
        props.createNew(teamValues);

    }

    const handleTeam1Change = (event) => {
        setTeam1Name(event.target.value)
        console.log(team1Name);
    }
    const handleTeam2Change = (event) => {
        setTeam2Name(event.target.value)
        console.log(team2Name);
    }
    const handleOverChange = (event) => {
        setOversVal(event.target.value)
    }
    
    return (
        <form  onSubmit={submitHandler}>
            <div className="sessionArea"> 
                <h1>New Score Session</h1>
                    <div className="teamNames">
                        <div className="team1">
                            <label htmlFor="team1"> Team 1 Name</label>
                            <input type="text" id="team1" size={25} onChange={handleTeam1Change} placeholder="Team Name" value={team1Name}/>
                        
                        </div>
                        
                        <div className="team2">
                            <label htmlFor="team2"> Team 2 Name</label>
                            <input type="text" id="team2" size={25} onChange={handleTeam2Change} placeholder="Team Name" value={team2Name}/>
                        </div>
                        
                    </div>
                    <div className="overInput">
                            <label htmlFor="team2"> Overs</label>
                            <input type="number" id="team2" size={25} onChange={handleOverChange} placeholder="Overs? " value={oversVal}/>
                        </div>
                <button type="submit" className="btn btn-dark">Start</button>

                
            </div>
        </form>
    )
    
}



export default NewScoreSession;