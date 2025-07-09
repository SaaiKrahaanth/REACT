export default function TaskList({tasks,toggleTask,deleteTask}){

    return(
        <>
        <ul className="task-list">
            {tasks.map((task,index)=> <li
            key={index}>
            
             <span 
             onClick={()=>toggleTask(task['id'])} 
             className={task.completed ? 'completed' : ''}
             >
                {task['text']}
             </span>

             <span 
             className="delete"
             onClick={()=>deleteTask(task['id'])}
             >X</span>

            
            </li>)}
        </ul>
        
        </>
    );
}