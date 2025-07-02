import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./TaskManager.css";

export default function TaskManager(){
    const[tasks,setTask]=useState([]); // step 12 Create a empty memory list STATE


    /* STEP 13 FUNC CALL to store data in list STATE */
    function addTask(text){
        const newState={id:Date.now(), text:text,completed:false}
        /* STEP 14 to append tasks STATE to avoid replace whole State LIST
          Spread operator used <here>*/
          setTask([...tasks,newState]);



    }

    return(//step 1 create a basic struct & component
        <>
        <h1>Task Manager</h1>

        <TaskForm addTask={addTask}/> {/*step 2 create a task form -->navigate there */}
        {/* step 15 PROPS USED HERE share add task funtion to TaskForm.jsx 
        value from form --> come in this function added to the STATE list of Taskmanager.jsx
        */} 

        <p>Tasks {tasks.length}</p>
        
        </>
    );
}