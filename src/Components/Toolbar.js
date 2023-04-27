import React from "react"

const Toolbar =(props) =>{
    const switchHandler = () => {
        props.onSwitch()
    }
    return <div> 
        <button onClick={switchHandler}>Switch</button>
    </div>
}


export default Toolbar;