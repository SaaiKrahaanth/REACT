import { useReducer } from "react";  //TYPED ON MY OWN!!


const initialState={count:0}

function reducer(state,event){
    switch(event.type){
        case 'increment':
            return {count:state.count+1};
        case 'decrement':
            return {count:state.count-1};
        
    }

}
export default function UseReducerExample(){

    const[state,dispatch]=useReducer(reducer,initialState);

    return(
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={()=>dispatch({type:'increment'})}>increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
            


        </div>
    );
}





/*import { useReducer } from "react";
const initialState={count:0}
function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {count:state.count+1};
        case 'decrement':
            return {count:state.count-1};
    }
}

export default function UseReducerExample(){
    const [state,dispatch]=useReducer(reducer,initialState)
    return(<>
        <div>
            <h1>Count:{state.count}</h1>
            <button onClick={()=>dispatch({type:'increment'})}>increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>

        </div>
    
    
    </>);

}

*/