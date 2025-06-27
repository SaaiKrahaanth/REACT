import { useState } from "react";


export default function SimpleForm(){
    const namechng[] useState("");
    const submitFun= (event)=>{
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);

    }

    return (
        <>
        <h1>Form</h1>
        <form onSubmit={submitFun}>
            <input type="text" name="name" />
            <input type="email" email="email"/>
            <button type="submit">Submit</button>
        </form>
        <p>name entered : {}</p>

        </>
    );

}