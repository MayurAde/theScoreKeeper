import React from "react"


const RunButtons = (props) =>{
    console.log(props.active + "test")
    const clickHandler = (val) =>{
        // console.log(val)
        
            props.runAdder(val);
        

    }
    return (
    <div className="runButtons">
        <button type="button" className="btn btn-outline-primary" onClick={() =>clickHandler(1)}>+1</button>
        <button type="button" className="btn btn-outline-primary" onClick={() =>clickHandler(2)}>+2</button>
        <button type="button" className="btn btn-outline-primary" onClick={() =>clickHandler(3)}>+3</button>
        <button type="button" className="btn btn-outline-success" onClick={() =>clickHandler(4)}>+4</button>
        <button type="button" className="btn btn-outline-primary" onClick={() =>clickHandler(5)}>+5</button>
        <button type="button" className="btn btn-outline-success" onClick={() =>clickHandler(6)}>+6</button>
        <button type="button" className="btn btn-outline-danger" onClick={() =>clickHandler("W")}>+W</button>
    </div>
    )
}

export default RunButtons;