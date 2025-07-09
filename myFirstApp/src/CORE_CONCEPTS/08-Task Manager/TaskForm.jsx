
import './TaskManager.css';
import { useState } from "react";

export default function TaskForm({addTask}){
    

    /*step 8  memory need so useState used */
    const [value,setValue]=useState("");

   
    const handleSubmit=(event)=>{
        if(value.trim()){  /*step 10 value is  checked if its not only blank spaces */

            event.preventDefault(); //prevent refresh It prints Submitted!✅ Page doesn't reload✅ React state stays as it is
            console.log("submited",value.trim()); /*step 6 BTN CHCK ->console.log("submited") */
            //ADD TASK 
             
            /* step 11 value need to added in the state first 
            so naviagete to --> TaskManeger.jsx*/

            addTask(value);



            setValue("");//value erased at the input field
            
        }
        

    }
    /*step 9 input  memory setted into value variable value=event.target.value ; target is input tag*/
    const handleText=(event)=>{
        setValue(event.target.value);

    }

    return( 
        <>{/*STEP 3 create the form and add style */}
        <form action="" onSubmit={handleSubmit}> 
            {/*step 5 Submit event listner ,
            btn submit triggers to FUNCTION CALL-->(handleSubmit()) */}
        <div className="add-task-action">
            
            {/*step 7 ADD THE text to eventlistner */}
            <input 
            type="text"
            placeholder="Enter the task.."
            className="add-task-input"
            onChange={handleText}
            value={value}
            />
            
             {/*step 4 put the type as submit */}
            <button type="submit" className="add-task-btn ">Add Task</button>
            
        </div>
        </form>
        </>
    );
}

/* import { useState } from "react";    PRACTICEE----- 

export default function TaskForm(){

    const [value,setText]=  useState("");
    const handleSubmit =(event)=>{
        if (value.trim()){
                    event.preventDefault();
                    console.log("Submitted",value.trim());
                    setText("");
        }
    }



    return (
        <>
        <form action="" onSubmit={handleSubmit}>
            <div className="add-task-action">
            
            <input 
                onChange={(e)=>setText(e.target.value)}
                type="text"
                placeholder="Enter task here.."
                className="add-task-input"
                value={value}
                
            />
            <button type="submit" className="add-task-btn">Add Task</button>
        </div>
        </form>
        </>
    );
}

*/