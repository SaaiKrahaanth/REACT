import { useState } from "react";


export default function SimpleForm(){
    const [msg,setMsg] =useState("");
    const HandleFun= (event)=>{
        event.preventDefault();
        const namevalue=event.target.name.value;
        const emailvalue=event.target.email.value;

        console.log(namevalue);
        console.log(emailvalue);
        setMsg(namevalue);

    }

    return (
        <>
        <h1>Form</h1>
        <form onSubmit={HandleFun}>
            <input type="text" name="name" />
            <input type="email" name="email"/>
            <button type="submit">Submit</button>
        </form>
        <p>name entered : {msg}</p>

        </>
    );

}