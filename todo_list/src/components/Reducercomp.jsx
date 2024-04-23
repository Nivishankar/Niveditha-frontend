import React from 'react'
import { useReducer } from 'react'

const intialValue={count:0}

const reducer=(state,action)=>{
    switch(action.type){
        case "increment":
            return {count:state.count+1}
        case 'decrement':
            return {count:state.count-1}
        case "reset":
            return {count:0}
        default:
            return state
    }
}
const Reducercomp = () => {
    const[state,dispatcher]=useReducer(reducer,intialValue);
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatcher({type:"increment"})}>Increment</button>
        <button onClick={()=>dispatcher({type:"decrement"})}>Decrement</button>
        <button onClick={()=>dispatcher({type:"nothing"})}>Nothing</button>
        <button onClick={()=>dispatcher({type:"reset"})}>Reset</button>
    </div>
  )
}

export default Reducercomp


// whenever we call dispatcher it will handle reducer 