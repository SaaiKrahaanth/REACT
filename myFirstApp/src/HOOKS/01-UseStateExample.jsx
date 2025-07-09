
//Adds state to functional components
import { useState } from "react";

export default function UseStateExample() {
    const [isVisible,setIsVisible]=useState(false);

    function HandleClick(){
        setIsVisible(!isVisible)//toggle
    }

return(
<>
<div>
    <button onClick={HandleClick}>Show text</button>
    {isVisible && <p>this is the text that gets toggled!!</p>}
</div>

</>);
}
    ``