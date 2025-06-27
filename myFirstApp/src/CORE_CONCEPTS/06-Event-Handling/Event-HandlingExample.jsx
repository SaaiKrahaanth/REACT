import { useState } from "react";

export default function EventHandlingExample(){
    const [msg,setMsg]=useState("");
    
    const handleChange = (event) =>{
        setMsg(event.target.value)

    }

    return(
        <>
        <h1>Event Handling Example</h1>
        <input type="text" placeholder="Enter the text" onChange={handleChange}></input>
        <p>{msg}</p>
        </>

    );
    

}