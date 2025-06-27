import { useState } from "react"

export default function State(){
    const[count,update_count]=useState(0);
    function intermediate(){
        return (update_count(count+1));

    }
   return( <>
    <h1>Counter</h1>
    <h3>you have clicked {count} times</h3>
    <button className="bg-color" onClick={intermediate}>click {count}</button>
    </>
   );
}