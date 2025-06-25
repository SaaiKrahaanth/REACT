import React from "react";
import "../../App.css";

export default class JSX extends React.Component{
    render(){
        const name = "saai";
        return(
        <>
            <h1 className="bg-color">Hi Da {name} ehh!!</h1>
            <p style={{backgroundColor:"yellow",color:"red"}}>ClassComponent vechi ni unoda first JSX example paninu iruka teriyuma date:26/6/2025 12:30 am </p>
        </>);
    }
}